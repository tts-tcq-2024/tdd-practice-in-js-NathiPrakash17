function extractDelimiter(numbers) {
  let delimiter = ',';
  let numberStrings = numbers;

  if (numbers.startsWith('//')) {
    const delimiterEnd = numbers.indexOf('\n');
    delimiter = numbers.substring(2, delimiterEnd);
    numberStrings = numbers.substring(delimiterEnd + 1);
  }
  return numberStrings.split(delimiter);
}

function add(numbers) {
  if (numbers === '') {
    return 0;
  }
  
const numberStrings = processDelimiter(numbers);
  
  let sum = 0;
  for (let i = 0; i < numberStrings.length; i++) {
    sum += Number(numberStrings[i]);
  }
  return sum;
}

module.exports = {
    add
};
