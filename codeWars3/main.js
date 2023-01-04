function squareDigits(num) {
    // Convert the input number to a string
    singleNum = num.toString();
  
    // Convert the string of digits into an array-like object
    digitArray = Array.from(singleNum);
  
    // Map over each digit and square it
    squaredArr = digitArray.map((digit) => parseInt(digit) * parseInt(digit));
  
    // Join the squared digits into a single string
    concatArr = squaredArr.join('');
  
    // Convert the concatenated string back into an integer
    concatNum = parseInt(concatArr);
  
    // Return the final result
    return concatNum;
  }