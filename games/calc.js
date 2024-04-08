import run from '../src/index.js';
import { getRandomArrayOfNumbers, getRandomeNumber } from '../src/utils.js';

const operations = ['+', '-', '*'];
const rules = 'What is the result of the expression?';

const getRandomeOperator = () => {
  const rand = getRandomeNumber(0, operations.length - 1);
  return operations[rand];
};

const getRightAnswer = (num1, num2, operator) => {
  switch (operator) {
    case operations[0]:
      return num1 + num2;
    case operations[1]:
      return num1 - num2;
    case operations[2]:
      return num1 * num2;
    default:
      return '';
  }
};

const playCalcRound = () => {
  const pair = getRandomArrayOfNumbers();
  const [num1, num2] = pair;
  const operator = getRandomeOperator();

  const correctAnswer = String(getRightAnswer(num1, num2, operator));

  const question = `${num1} ${operator} ${num2}`;

  return [question, correctAnswer];
};

export default () => {
  run(rules, playCalcRound);
};
