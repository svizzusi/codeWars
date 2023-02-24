function squareDigits(num){
  
    singleNum = num.toString()
    digitArray = Array.from(singleNum)
    squaredArr = digitArray.map((digit) => parseInt(digit) * parseInt(digit))
    concatArr = squaredArr.join('')
    concatNum = parseInt(concatArr)
    
    return concatNum;
  }