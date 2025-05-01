function absoluteValueCalculation (num) {

  return Math.abs(num);
}

function powerCalculation (base, exponent) {

  return Math.pow(base, exponent);
}

function sqRtFinder (num) {

  return Math.sqrt(num);
}

function minAndMaxFinder (numbers) {

  return {
   max:  Math.max(...numbers),
   min:  Math.min(...numbers)
  };
 
}

function randomNumberGenerator (min, max) {

  return Math.floor(Math.random() * max);

}

function customRounding(num, decimalPlaces) {
  return Number(num.toFixed(decimalPlaces));
}


console.log(absoluteValueCalculation (-45.67));
console.log(powerCalculation(5,3));
console.log(sqRtFinder(144));
console.log(minAndMaxFinder([3, 78, -12, 0.5, 27]));
console.log(randomNumberGenerator(1, 50));
console.log(customRounding(23.67891, 2));

const readlineSync = require("readline-sync");

function calculator() {
  console.log("Select an operation:");
  console.log("1. Absolute Value");
  console.log("2. Power Calculation");
  console.log("3. Square Root");
  console.log("4. Max and Min");
  console.log("5. Random Number");
  console.log("6. Custom Rounding");

  const choice = readlineSync.question("Enter a number (1-6): ");

  switch (choice) {
    case "1":
      const num1 = parseFloat(readlineSync.question("Enter a number: "));
      console.log("Result:", absoluteValueCalculation(num1));
      break;
    case "2":
      const base = parseFloat(readlineSync.question("Enter the base: "));
      const exp = parseFloat(readlineSync.question("Enter the exponent: "));
      console.log("Result:", powerCalculation(base, exp));
      break;
    case "3":
      const num2 = parseFloat(readlineSync.question("Enter a number: "));
      console.log("Result:", sqRtFinder(num2));
      break;
    case "4":
      const values = readlineSync.question("Enter numbers separated by commas: ")
        .split(",")
        .map(Number);
      const { max, min } = minAndMaxFinder(values);
      console.log("Max:", max, "Min:", min);
      break;
    case "5":
      const minVal = parseInt(readlineSync.question("Enter min value: "));
      const maxVal = parseInt(readlineSync.question("Enter max value: "));
      console.log("Random number:", randomNumberGenerator(minVal, maxVal));
      break;
    case "6":
      const num3 = parseFloat(readlineSync.question("Enter a number: "));
      const decimals = parseInt(readlineSync.question("Decimal places: "));
      console.log("Rounded value:", customRounding(num3, decimals));
      break;
    default:
      console.log("Invalid selection.");
  }
}

console.log("ABSOLUTE VALUE:", absoluteValueCalculation(-45.67));           
console.log("POWER:", powerCalculation(5, 3));                          
console.log("SQRT:", sqRtFinder(144));                         
console.log("MAX/MIN:", minAndMaxFinder([3, 78, -12, 0.5, 27]));      
console.log("RANDOM:", randomNumberGenerator(1, 50));                   
console.log("ROUND:", customRounding(23.67891, 2));       