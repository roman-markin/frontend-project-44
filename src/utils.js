export const getRandomeNumber = (min = 1, max = 100) => {
  const rand = Math.random() * (max - min) + min;
  return Math.round(rand);
};

export const getRandomArrayOfNumbers = (count = 2) => {
  const numbers = [];
  for (let i = 0; i < count; i += 1) {
    numbers.push(getRandomeNumber());
  }
  return numbers;
};
