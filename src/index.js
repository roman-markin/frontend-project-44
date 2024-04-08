import readlineSync from 'readline-sync';
import welcomeUser from './cli.js';

export const numberOfRounds = 3;

export const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

export const askQuestion = (question) => console.log(`Question: ${question}`);

export const getAnswer = () => {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

export const compareAnswer = (userAnswer, correctAnswer) => {
  const correctMsg = 'Correct!';
  const wrongMsg = `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`;
  const result = userAnswer === correctAnswer;
  if (result) {
    console.log(correctMsg);
  } else {
    console.log(wrongMsg);
  }
  return result;
};

export const getRandomeNumber = (min, max) => {
  const rand = Math.random() * (max - min) + min;
  return Math.round(rand);
};

export const startGame = (rules) => {
  const userName = getUserName();
  welcomeUser(userName);
  console.log(rules);
  return userName;
};

export const finishGame = (userName, roundCount) => {
  if (roundCount === 0) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};

export const getRandomArrayOfNumbers = (count = 2) => {
  const min = 1;
  const max = 100;
  const numbers = [];
  for (let i = 0; i < count; i += 1) {
    numbers.push(getRandomeNumber(min, max));
  }
  return numbers;
};
