import React from "react";

type Props = {};

const Keyboard = (props: Props) => {
  return (
    <div className="h-[var(--keyboard-height)]">
      <Row letters={["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]} />
      <Row letters={["A", "S", "D", "F", "G", "H", "J", "K", "L"]} />
      <Row letters={["ENTER", "Z", "X", "C", "V", "B", "N", "M", "DELETE"]} />
    </div>
  );
};

type rowProps = {
  letters: String[];
};

const Row = (props: rowProps) => {
  return (
    <div className="flex justify-center gap-1 mx-auto mb-2">
      {props.letters.map((letter, index) => (
        <kbd className="text-xl font-bold kbd" key={index}>
          {letter}
        </kbd>
      ))}
    </div>
  );
};

export default Keyboard;
