import readlineSync from 'readline-sync';
import welcomeUser from './cli.js';

const askQuestion = (question) => console.log(`Question: ${question}`);

const getUserAnswer = () => {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

const compareAnswer = (userAnswer, correctAnswer) => {
  const result = userAnswer === correctAnswer;
  if (result) {
    console.log('Correct!');
  } else {
    const wrongMsg = `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`;
    console.log(wrongMsg);
  }
  return result;
};

const finishGame = (userName, roundCount) => {
  if (roundCount === 0) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};

const playGame = (rules, playRound) => {
  const userName = welcomeUser();
  console.log(rules);

  let roundCount = 3;
  while (roundCount > 0) {
    const [question, correctAnswer] = playRound();

    askQuestion(question);
    const userAnswer = getUserAnswer();

    const isRight = compareAnswer(userAnswer, correctAnswer);

    if (isRight) {
      roundCount -= 1;
    } else {
      break;
    }
  }

  finishGame(userName, roundCount);
};

export default playGame;
