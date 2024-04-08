import {
  askQuestion,
  compareAnswer,
  finishGame,
  getAnswer,
  getRandomArrayOfNumbers,
  numberOfRounds,
  startGame,
} from '../src/index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getGCD = (num1, num2) => {
  let a = num1 < num2 ? num2 : num1;
  let b = num1 > num2 ? num2 : num1;
  let temp;
  let result = 0;

  while (b > 0) {
    temp = a % b;
    a = b;
    b = temp;
  }
  result = a;
  return result.toString();
};

const playRound = () => {
  const pair = getRandomArrayOfNumbers();
  const [num1, num2] = pair;

  const correctAnswer = getGCD(num1, num2);

  const example = `${num1} ${num2}`;

  askQuestion(example);

  const userAnswer = getAnswer();

  return compareAnswer(userAnswer, correctAnswer);
};

export default () => {
  const userName = startGame(rules);

  let roundCount = numberOfRounds;
  while (roundCount > 0) {
    const isRight = playRound();

    if (isRight) {
      roundCount -= 1;
    } else {
      break;
    }
  }
  finishGame(userName, roundCount);
};
