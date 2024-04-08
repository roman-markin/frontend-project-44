import run from '../src/index.js';
import { getRandomArrayOfNumbers } from '../src/utils.js';

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
  return result;
};

const playGCDRound = () => {
  const pair = getRandomArrayOfNumbers();
  const [num1, num2] = pair;

  const correctAnswer = String(getGCD(num1, num2));

  const question = `${num1} ${num2}`;

  return [question, correctAnswer];
};

export default () => {
  run(rules, playGCDRound);
};
