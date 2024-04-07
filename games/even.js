import welcomeUser from '../src/cli.js';
import {
  askQuestion,
  compareAnswer,
  finishGame,
  getAnswer,
  getRandomeNumber,
  getUserName,
  numberOfRounds,
} from '../src/index.js';

const minRandomNumber = 1;
const maxRandomNumber = 100;

const getRightAnswer = (number) => (number % 2 === 0 ? 'yes' : 'no');

const playRound = () => {
  const number = getRandomeNumber(minRandomNumber, maxRandomNumber);
  const correctAnswer = getRightAnswer(number);

  askQuestion(number);

  const userAnswer = getAnswer();

  return compareAnswer(userAnswer, correctAnswer);
};

export default () => {
  const userName = getUserName();
  welcomeUser(userName);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

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
