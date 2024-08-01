function add(numbers) {
  if (numbers === '') {
    return 0;
  }
  const numbersArray = numbers.split(',');
  let sum = 0;
  for (let i = 0; i < numbersArray.length; i++) {
    sum += +numbersArray[i];
  }
  return sum;
}

module.exports = {
    add
};
