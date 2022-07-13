import './App.css';
import { useState } from 'react';
import Visor from './components/Visor';
import Main from "./components/Main";
import VerbosE from './components/Words/VerbosE';
import Verb1 from "./components/Words/Verb-1";
import Verb2 from './components/Words/Verb-2';
import Adj1 from "./components/Words/Adj-1";
import Adj2 from "./components/Words/Adj-2";
import Adj3 from "./components/Words/Adj-3";
import VerbosH from './components/Words/VerbosH';
import Dificulty from './components/Dificulty';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';



function App() {

  let [input, setInput] = useState("")
  let [state, setState] = useState(0)
  let [count, setCount] = useState(0)
  let [Verbos, setVerbos] = useState(VerbosE)
  let [countVisor, setCountVisor] = useState(0)
  let [boolean, setBoolean] = useState(false)
  let [inputBoolean, setInputBoolean] = useState(false)
  let [counterState, setCounterState] = useState(true)
  let [gameState, setGameState] = useState(true)


  let iconEye = <FontAwesomeIcon icon={faEye}/>



  // Logica del Juego
  function handleChange(e) {
    if (e.key == "Enter") {
      if (gameState) {
        if (Verbos[state].respuesta.includes(e.target.value.toLowerCase())) {
          if (state >= Verbos.length - 1) {
            setInput("Finalizado")
            e.target.value = ""
            setCountVisor(countVisor + 1)
            setGameState(false)
            setInputBoolean(true)
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

  // Contador de Palabras vistas
  function handleClick(e) {
    if (gameState) {
      setBoolean(!boolean)
      if (counterState) {
        setCounterState(!counterState)
        setCount(count + 1)
      }
    }
  }

  // Cambio de Dificultad
  function handleDif(e){
    if(e.target.value === "easy"){
      setVerbos(VerbosE)
      reset()
    }
    if(e.target.value === "v I"){
      setVerbos(Verb1)
      reset()
    }
    if(e.target.value === "v II"){
      setVerbos(Verb2)
      reset()
    }
    if(e.target.value === "a I"){
      setVerbos(Adj1)
      reset()
    }
    if(e.target.value === "a II"){
      setVerbos(Adj2)
      reset()
    }
    if(e.target.value === "a III"){
      setVerbos(Adj3)
      reset()
    }
    if(e.target.value === "hard"){
      setVerbos(VerbosH)
      reset()
    }
  }

  // Reset de los Estados
  function reset(){
    setState(state = 0)
    setCountVisor(countVisor = 0)
    setCount(count = 0)
    setInput("")
    setBoolean(boolean = false)
    setCounterState(counterState = true)
    setGameState(true)
    setInputBoolean(false)
}

  
  return (
    <div className="App">
      <Visor 
            visor={count} 
            arrlength={Verbos.length} 
            completado={countVisor} 
            icon={iconEye} 
      />
      <h1 id="titulo">Traduzca 
                      {" " + Verbos.length} 
                      {Verbos == Verb1  
                        || Verbos == Verb2
                        ? " Verbos " 
                        : Verbos == Adj1
                          || Verbos == Adj2
                          || Verbos == Adj3 
                          ? " Adjetivos " 
                          :" Palabras "} 
                          de Ingles a Español
      </h1>                          
      <Main 
            input={input} 
            handleClick={handleClick} 
            handleChange={handleChange} 
            Verbos={Verbos} 
            count={state} 
            boolean={boolean} 
            gameState={gameState} 
            icon={iconEye} 
            inputBoolean={inputBoolean}
      />
      <Dificulty 
            handleDif={handleDif}
      />
    </div>
  );
}

export default App;
