import {
  askQuestion,
  compareAnswer,
  finishGame,
  getAnswer,
  getRandomeNumber,
  numberOfRounds,
  startGame,
} from '../src/index.js';

const minRandomNumber = 1;
const maxRandomNumber = 100;
const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRightAnswer = (number) => (number % 2 === 0 ? 'yes' : 'no');

const playRound = () => {
  const number = getRandomeNumber(minRandomNumber, maxRandomNumber);
  const correctAnswer = getRightAnswer(number);

  askQuestion(number);

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
