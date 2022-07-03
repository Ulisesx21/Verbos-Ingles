import './App.css';
import { useState } from 'react';
import Visor from './components/Visor';
import Main from "./components/Main";
import VerbosE from './components/VerbosE';
import VerbosM from "./components/VerbosM";
import VerbosH from './components/VerbosH';
import Dificulty from './components/Dificulty';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faQuestion, faArrowRight } from '@fortawesome/free-solid-svg-icons';



function App() {

  let [input, setInput] = useState("")
  let [state, setState] = useState(0)
  let [count, setCount] = useState(0)
  let [Verbos, setVerbos] = useState(VerbosE)
  let [countVisor, setCountVisor] = useState(0)
  let [boolean, setBoolean] = useState(false)
  let [counterState, setCounterState] = useState(true)
  let [gameState, setGameState] = useState(true)


  function handleChange(e) {
    if (e.key == "Enter") {
      if (gameState) {
        if (Verbos[state].respuesta.includes(e.target.value.toLowerCase())) {
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

  function handleDif(e){
    if(e.target.value == "easy"){
      setVerbos(Verbos = VerbosE)
      reset()
    }
    if(e.target.value == "medium"){
      setVerbos(Verbos = VerbosM)
      reset()
    }
    if(e.target.value == "hard"){
      setVerbos(Verbos = VerbosH)
      reset()
    }
  }

  function reset(){
    setState(state = 0)
    setCountVisor(countVisor = 0)
    setCount(count = 0)
    setInput("")
    setBoolean(boolean = false)
    setCounterState(counterState = true)
    setGameState(true)
}

  
  return (
    <div className="App">
      <Visor visor={count} arrlength={Verbos.length} completado={countVisor} icon={<FontAwesomeIcon icon={faEye} />} />
      <h1 id="titulo">Traduzca {Verbos.length} {Verbos == VerbosM ? "verbos" : "palabras"} de Ingles a Español</h1>
      <Main input={input} handleClick={handleClick} handleChange={handleChange} Verbos={Verbos} count={state} boolean={boolean} gameState={gameState} icon={<FontAwesomeIcon icon={faEye}/>} />
      <Dificulty handleDif={handleDif}/>
    </div>
  );
}

export default App;
