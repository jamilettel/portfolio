export default function TerminalInput({
  input,
  focused,
  inputIndex,
  blink,
  className,
}: {
  input: string;
  inputIndex: number;
  focused: boolean;
  blink: boolean;
  className?: string;
}) {
  return (
    <div
      className={`user-input ${className} ${focused ? "focused" : ""} ${
        blink && focused ? "blink" : ""
      }`}
    >
      {input.split("").map((letter, index) => (
        <span
          className={
            input.length - inputIndex === index ? "highlighted" : undefined
          }
          key={index}
        >
          {letter}
        </span>
      ))}
      {inputIndex === 0 && <span className="cursor-block"> </span>}
    </div>
  );
}
