import './App.css';
import { useState, useRef } from 'react';
import Main from "./components/Main";
import Verbos from "./components/Verbos"
import Visor from './components/Visor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';



function App() {

  let [input, setInput] = useState("")
  let [state, setState] = useState(0)
  let [count, setCount] = useState(0)
  let [countVisor, setCountVisor] = useState(0)
  let [boolean, setBoolean] = useState(false)
  let [counterState, setCounterState] = useState(true)
  let [gameState, setGameState] = useState(true)

  function handleChange(e) {

    if (e.key == "Enter") {
      if (gameState) {
        if (e.target.value.toLowerCase() == Verbos[state].respuesta) {
          if (state >= Verbos.length - 1) {
            setInput("Finalizado")
            e.target.value = ""
            setCountVisor(countVisor + 1)
            setGameState(false)
          } else {
            setState(state + 1)
            setCountVisor(countVisor + 1)
            setInput("")
            setBoolean(false)
            setCounterState(true)
            e.target.value = ""
          }
        } else {
          setInput("INCORRECTO")
          e.target.value = ""
        }
      }
    }
  }

  function handleClick(e) {
    if (gameState) {
      setBoolean(!boolean)
      if (counterState) {
        setCounterState(!counterState)
        setCount(count + 1)
      }
    }
  }


  return (
    <div className="App">
      <Visor visor={count} arrlength={Verbos.length} completado={countVisor} icon={<FontAwesomeIcon icon={faEye} />}/>
      <h1 id="titulo">Los 100 verbos más usados en inglés</h1>
      <Main input={input} handleClick={handleClick} handleChange={handleChange} Verbos={Verbos} count={state} boolean={boolean} gameState={gameState} icon={<FontAwesomeIcon icon={faEye} />}/>
    </div>
  );
}

export default App;
