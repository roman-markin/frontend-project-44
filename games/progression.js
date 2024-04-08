import run from '../src/index.js';
import { getRandomeNumber } from '../src/utils.js';

const rules = 'What number is missing in the progression?';
const progressionLength = 10;

const getSequence = (length) => {
  const ratio = getRandomeNumber(1, 10);
  const first = getRandomeNumber(1, 15);
  let i = length - 1;
  const result = [first];
  while (i > 0) {
    result.push(result.at(-1) + ratio);
    i -= 1;
  }
  return result;
};

const getRightAnswer = (arr) => {
  const copyArr = [...arr];
  const randIndex = getRandomeNumber(0, 9);

  const correctAnswer = copyArr[randIndex];
  copyArr[randIndex] = '..';
  const question = copyArr.join(' ');

  return [question, String(correctAnswer)];
};

const playProgressionRound = () => {
  const sequenceOfNumbers = getSequence(progressionLength);
  const [question, correctAnswer] = getRightAnswer(sequenceOfNumbers);

  return [question, correctAnswer];
};

export default () => {
  run(rules, playProgressionRound);
};
