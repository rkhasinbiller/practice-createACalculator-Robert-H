function absoluteValueCalculation (num) {

  return Math.abs(num);
}

function powerCalculation (base, exponent) {

  return Math.pow(base, exponent);
}

function sqRtFinder (num) {

  return Math.sqrt(num);
}

function minAndMaxFinder (num) {

  return {
   max:  Math.max(...numbers),
   min:  Math.min(...numbers)
  };
 
}

function randomNumberGenerator (num) {

  return Math.floor(Math.random() * max);

}

function customRounding (num) {

  return Math.round()
}


console.log(absoluteValueCalculation (-45.67));
console.log(powerCalculation(5,3));
console.log(sqRtFinder(144));