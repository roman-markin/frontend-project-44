import readlineSync from 'readline-sync';

export const numberOfRounds = 3;

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
