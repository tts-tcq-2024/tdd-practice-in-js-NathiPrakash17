function add(numbers) {
  if (numbers === '') {
    return 0;
  }
  
const delimiterRegex = /,|\n/g;
const numberStrings = numbers.split(delimiterRegex);
  
  let sum = 0;
  for (let i = 0; i < numberStrings.length; i++) {
    sum += Number(numberStrings[i]);
  }
  return sum;
}

module.exports = {
    add
};
