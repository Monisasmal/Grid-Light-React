

const ConfigPanel = ({gridSize, delay, setGridSize, setDelay}) => {

  const handleApply = () =>{
    setGridSize(Number(document.getElementById('gridSizeInput').value));
    setDelay(Number(document.getElementById('delayInput').value));
  }
  return (
    <div className="config-panel">
      <label>Grid Size:<input type='number' id='gridSizeInput' min="2" max="10" defaultValue={gridSize}/></label>
      <label>Delay:<input type='number' id="delayInput" min="100" defaultValue={delay}/></label>
      <button onClick={handleApply}>Apply</button>
    </div>
  )
}

export default ConfigPanel