export default function BoilingResult({ temp = 0 }) {
  if (temp >= 100) {
    return <h3>The Water Would Boil in {temp}° C.</h3>;
  }

  return <h2>The Water Would not Boil in {temp}° C.</h2>;
}
