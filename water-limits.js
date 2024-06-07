const converters = require('./converters.js');
// converters is an object that has two methods
const { celsiusToFahrenheit } = converters;
// we destructed to only get the function we need

const celsiusInput = process.argv[2];
const fahrenheitValue = celsiusToFahrenheit(celsiusInput);

console.log(`${celsiusInput} degrees Celsius = ${fahrenheitValue} degrees Fahrenheit`);