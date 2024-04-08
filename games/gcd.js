import welcomeUser from '../src/cli.js';
import {
  askQuestion,
  compareAnswer,
  finishGame,
  getAnswer,
  getRandomArrayOfNumbers,
  getUserName,
  numberOfRounds,
} from '../src/index.js';

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
  const userName = getUserName();
  welcomeUser(userName);
  console.log('Find the greatest common divisor of given numbers.');

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
