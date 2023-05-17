import React from "react";

type Props = {
  word: String;
};

const Board = (props: Props) => {
  return (
    <div className="flex items-center place-content-center">
      <div className="">{props.word}</div>
    </div>
  );
};

export default Board;
