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
const operations = ['+', '-', '*'];

const getRandomeOperator = () => {
  const rand = getRandomeNumber(0, operations.length - 1);
  return operations[rand];
};

const getRightAnswer = (firstNum, secondNum, operator) => {
  let result = 0;
  switch (operator) {
    case operations[0]:
      result = firstNum + secondNum;
      break;
    case operations[1]:
      result = firstNum - secondNum;
      break;
    case operations[2]:
      result = firstNum * secondNum;
      break;
    default:
      break;
  }
  return result.toString();
};

const playRound = () => {
  const firstNum = getRandomeNumber(minRandomNumber, maxRandomNumber);
  const secondNum = getRandomeNumber(minRandomNumber, maxRandomNumber);
  const operator = getRandomeOperator();

  const correctAnswer = getRightAnswer(firstNum, secondNum, operator);

  const example = `${firstNum} ${operator} ${secondNum}`;

  askQuestion(example);

  const userAnswer = getAnswer();

  return compareAnswer(userAnswer, correctAnswer);
};

export default () => {
  const userName = getUserName();
  welcomeUser(userName);
  console.log('What is the result of the expression?');

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
