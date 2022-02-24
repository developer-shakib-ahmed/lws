export default function Text({ emoji, bracket }) {
  let output = 'Developer Shakib Ahmed';

  if (emoji) {
    output = emoji(output, '@');
  }

  if (bracket) {
    output = bracket(output);
  }

  return <div>{output}</div>;
}
