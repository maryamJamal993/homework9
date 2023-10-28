import { useState } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  const [count,setCount]=useState(0);

  const increaseCount=()=>{
    setCount(count+1)
  }
  const decreaseCount=()=>{
    setCount(count-1)
  }
  const setCountToZero=()=>{
    setCount(0)
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
      <button onClick={setCountToZero}>set to Zero</button>
    </>
  )
}

export default App
