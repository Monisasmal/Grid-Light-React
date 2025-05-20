import React,{useEffect, useState} from "react";

const Grid = ({ gridSize, delay }) => {
  const [selectedCells, setSelectedCells] = useState([]);
  const [cells, setCells] = useState([]);

  useEffect(()=>{
    setCells(new Array(gridSize*gridSize).fill(false));
    setSelectedCells([]);
  },[gridSize]);

  const handleClick = (index) => {
    if (!selectedCells.includes(cells)) {
      const newSelected = [...selectedCells, index];
      const newCell = [...cells];
      newCell[index] = true;
      setSelectedCells(newSelected);
      setCells(newCell);
      if (newSelected.length === gridSize * gridSize) {
        reverseUnselect(newSelected);
      }
    }
  };

  const reverseUnselect = (selected) => {
    let index = selected.length - 1;
    const interval = setInterval(() => {
      if (index < 0) {
        clearInterval(interval);
        setSelectedCells([]);
        setCells(new Array(gridSize*gridSize).fill(false));
        return
      }
      const idx = selected[index];
      setCells((prev)=>{
        const updated = [...prev];
        updated[idx] = false;
        return updated;
      });
      index--;
    },delay);
  };

  return (
    <div
      className="grid-container"
      style={{ gridTemplateColumns: `repeat(${gridSize},auto)` }}
    >
      {cells.map((isSelected, index) => (
        <div
          key={index}
          className={`cell ${isSelected ? "selected" : ""}`}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default Grid;
