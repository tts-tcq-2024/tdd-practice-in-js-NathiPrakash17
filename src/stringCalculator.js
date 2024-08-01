function processDelimiter(numbers) {
  let delimiter = ',';
  let numberStrings = numbers;

  if (numbers.startsWith('//')) {
    const delimiterEnd = numbers.indexOf('\n');
    delimiter = numbers.substring(2, delimiterEnd);
    numberStrings = numbers.substring(delimiterEnd + 1);
  }
 return numberStrings.split(new RegExp(`[${delimiter}\n]`));
}

function checkForNegatives(numberStrings) {
  const negatives = numberStrings
    .map(number => Number(number))
    .filter(number => number < 0);
  if (negatives.length > 0) {
    throw new Error(`Negatives not allowed: ${negatives.join(', ')}`);
  }
}

function add(numbers) {
  if (numbers === '') {
    return 0;
  }

  // delimiters removal
const numberStrings = processDelimiter(numbers);
  // negative check
checkForNegatives(numberStrings);

  // sum
  let sum = 0;
  for (let i = 0; i < numberStrings.length; i++) {
    sum += Number(numberStrings[i]);
  }
  return sum;
}

module.exports = {
    add
};
