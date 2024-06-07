// here we declare two functions and export them 
function celsiusToFahrenheit(celsius) {
    return celsius * (9 / 5) + 32;
}

module.exports.celsiusToFahrenheit = celsiusToFahrenheit;

module.exports.fahrenheitToCelsius = function (fahrenheit) {
    return (fahrenheit - 32) * (5 / 9);
}


// here we essentially store functions into the module.exports object 