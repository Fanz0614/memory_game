import React, { useState } from "react";
import "./App.css";

type TValue = {
  row: number;
  col: number;
};

function App() {
  const [grid, setGrid] = useState([
    // [1, 3, 4, 6],
    // [3, 6, 7, 5],
    // [1, 7, 5, 4],
    // [9, 0, 0, 9],
    [0, 0],
    [1, 1],
  ]);

  const [revealedGrid, setRevealedGrid] = useState(
    new Array(grid.length)
      .fill("")
      .map(() => new Array(grid[0].length).fill(false))
  );

  const [previousClick, setPreviousClick] = useState<TValue | undefined>();

  const handleCardClick = (rowIndex: number, colIndex: number) => {
    if (revealedGrid[rowIndex][colIndex]) return;
    const clickedNumber = grid[rowIndex][colIndex];
    const newRevealedGrid = [...revealedGrid];
    newRevealedGrid[rowIndex][colIndex] = true;
    setRevealedGrid(newRevealedGrid);
    if (previousClick) {
      const previousNumber =
        grid[previousClick.row][previousClick.col];
      if (previousNumber !== clickedNumber) {
        setTimeout(() => {
          newRevealedGrid[rowIndex][colIndex] = false;
          newRevealedGrid[previousClick.row][previousClick.col] =
            false;
          setRevealedGrid([...newRevealedGrid]);
        }, 1000);
      } else {
        const hasWon = revealedGrid.every((subRevealedGrid) =>
          subRevealedGrid.every((val) => val === true)
        );
        if (hasWon) {
          setTimeout(() => {
            alert("you won");
          }, 1000);
        }
      }
      setPreviousClick(undefined);
    } else {
      setPreviousClick({ row: rowIndex, col: colIndex });
    }
  };
  return (
    <div className="App">
      <div className="container">
        {grid.map((row, rowIndex) => {
          return (
            <div className="row" key={rowIndex}>
              {row.map((col, colIndex) => {
                return (
                  <div
                    className="card"
                    key={colIndex}
                    onClick={() => handleCardClick(rowIndex, colIndex)}
                  >
                    {revealedGrid[rowIndex][colIndex] ? col : null}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
