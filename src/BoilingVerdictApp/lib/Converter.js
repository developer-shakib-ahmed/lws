export function toCelcius(fahrenheit) {
  const input = ((fahrenheit - 32) * 5) / 9;
  const result = Math.round(input * 1000) / 1000;
  return result;
}

export function toFahrenheit(celcius) {
  const input = (celcius * 9) / 5 + 32;
  const result = Math.round(input * 1000) / 1000;
  return result;
}
