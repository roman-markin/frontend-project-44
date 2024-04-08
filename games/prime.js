import run from '../src/index.js';
import { getRandomeNumber } from '../src/utils.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getNumber = () => {
  let number = getRandomeNumber();
  while (number !== 2 && number % 2 === 0) {
    number = getRandomeNumber();
  }

  return number;
};

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  let divider = 2;
  while (divider <= number / 2) {
    if (number % divider === 0) {
      return false;
    }
    divider += 1;
  }

  return true;
};

const getRightAnswer = (number) => (isPrime(number) ? 'yes' : 'no');

const playPrimeRound = () => {
  const number = getNumber();
  const correctAnswer = getRightAnswer(number);
  const question = number;

  return [question, correctAnswer];
};

export default () => {
  run(rules, playPrimeRound);
};
