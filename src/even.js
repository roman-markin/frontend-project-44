import readlineSync from 'readline-sync';
import welcomeUser from './cli.js';

const minRandomNumber = 1;
const maxRandomNumber = 100;
const numberOfRounds = 3;

const getRandomeNumber = (min, max) => {
  const rand = Math.random() * (max - min) + min;
  return Math.round(rand);
};

export default () => {
  const userName = welcomeUser();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let roundCount = numberOfRounds;
  while (roundCount > 0) {
    const number = getRandomeNumber(minRandomNumber, maxRandomNumber);
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';

    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      const wrongMsg = `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`;
      console.log(wrongMsg);
      break;
    } else {
      console.log('Correct!');
      roundCount -= 1;
    }
  }

  if (roundCount === 0) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};
