import run from '../src/index.js';
import { getRandomeNumber } from '../src/utils.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRightAnswer = (number) => (number % 2 === 0 ? 'yes' : 'no');

const playEvenRound = () => {
  const number = getRandomeNumber();
  const correctAnswer = getRightAnswer(number);
  const question = number;

  return [question, correctAnswer];
};

export default () => {
  run(rules, playEvenRound);
};
