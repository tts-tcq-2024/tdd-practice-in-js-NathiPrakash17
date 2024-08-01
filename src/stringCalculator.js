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

function sumInputs(numberStrings){
   let sum = 0;
  for (let i = 0; i < numberStrings.length; i++) {
     const num = Number(numberStrings[i]);
    // filter - less than 1000
    if (num <= 1000) {
      sum += num;
    }
  }
  return sum;
}
function add(numbers) {
  
  // empty string
  if (numbers === '') {
    return 0;
  }
  // delimiters removal
const numberStrings = processDelimiter(numbers);
  // negative check
checkForNegatives(numberStrings);
  
  // sum
  return sumInputs(numberStrings);
  
}

module.exports = {
    add
};
