import React, { useState } from 'react'
import ConfigPanel from './Components/ConfigPanel';
import Grid from './Components/Grid';

const App = () => {

  const[gridSize,setGridSize] = useState(4);
  const[delay,setDelay] = useState(400);
  return (
    <div className="app">
    <ConfigPanel gridSize={gridSize} setGridSize={setGridSize} delay={delay} setDelay={setDelay}/>
    <Grid delay={delay} gridSize={gridSize}/>
    </div>
  )
}

export default App