import React from "react";
import { mineColor } from "../util/mineColor";
import Circle from "./circle";

//CELL
export default function Cell({ data, updateBoard, flagCell }) {
  const style = {
    block: {
      width: 32,
      height: 30,
      color: numColorCode(data.value),
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontWeight: 800,
      fontSize: 30,
      cursor: "pointer",
      background: data.revealed
        ? data.value === "X"
          ? mineColor()
          : bombChexPattern(data.x, data.y)
        : chexPattern(data.x, data.y),
    },
  };
  //ONCLICK
  const onClickUpdate = (e) => {
    if (data.flagged) {
      return;
    }
    console.log(e.type);
    updateBoard(data.x, data.y);
  };

  const onClickFlag = (e) => {
    e.preventDefault();
    flagCell(data.x, data.y);
  };
  
  //RETURN VALUES
  return (
    <div
      style={style.block}
      onClick={(e) => onClickUpdate(e)}
      onContextMenu={(e) => onClickFlag(e)}
    >
      {data.flagged && !data.revealed ? (
        "🚩"
      ) : data.revealed && data.value !== 0 ? (
        data.value === "X" ? (
          <Circle />
        ) : (
          data.value
        )
      ) : (
        ""
      )}
    </div>
  );
}
//PATTERN OF BOARD
const chexPattern = (x, y) => {
  if (x % 2 === 0 && y % 2 === 0) {
    return "teal";
  } else if (x % 2 === 0 && y % 2 !== 0) {
    return "#94ccd0";
  } else if (x % 2 !== 0 && y % 2 === 0) {
    return "#94ccd0";
  } else {
    return "teal";
  }
}
//BOMB PATTERN
const bombChexPattern = (x, y) => {
  if (x % 2 === 0 && y % 2 === 0) {
    return "#999";
  } else if (x % 2 === 0 && y % 2 !== 0) {
    return "#fff";
  } else if (x % 2 !== 0 && y % 2 === 0) {
    return "#fff";
  } else {
    return "#999";
  }
}
//NUMBERS COLOUR CODE
const numColorCode = (num) => {
  if (num === 1) {
    return "black";
  } else if (num === 2) {
    return "black";
  } else if (num === 3) {
    return "black";
  } else if (num === 4) {
    return "black";
  } else if (num === 5) {
    return "black";
  } else if (num === 6) {
    return "black";
  } else {
    return "black";
  }
};