import React, { useState } from "react";
import "./App.css";

function App() {
  const [grid, setGrid] = useState([
    [1, 3, 4, 6],
    [3, 6, 7, 5],
    [1, 7, 5, 4],
    [9, 0, 0, 9],
  ]);
  return (
    <div className="App">
      <div className="container">
        {grid.map((row, rowIndex) => {
          return (
            <div className="row" key={rowIndex}>
              {row.map((col, colIndex) => {
                return (
                  <div className="card" key={colIndex}>
                    {col}
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
