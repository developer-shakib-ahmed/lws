const scaleNames = {
  c: 'Celcius',
  f: 'Fahrenheit',
};

export default function TemperatureInput({ name, value, handle }) {
  return (
    <fieldset>
      <legend>Enter Temperature in {scaleNames[name]}:</legend>
      <input type="number" name={name} value={value} onChange={handle} />
    </fieldset>
  );
}
