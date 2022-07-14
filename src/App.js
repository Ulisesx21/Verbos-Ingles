import './App.css';
import { useState } from 'react';
import Visor from './components/Visor';
import Main from "./components/Main";
import WordsE from './components/Words/VerbosE';
import Verb1 from "./components/Words/Verb-1";
import Verb2 from './components/Words/Verb-2';
import Adj1 from "./components/Words/Adj-1";
import Adj2 from "./components/Words/Adj-2";
import Adj3 from "./components/Words/Adj-3";
import WordsH from './components/Words/VerbosH';
import Dificulty from './components/Dificulty';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';



function App() {

  let [input, setInput] = useState("")
  let [state, setState] = useState(0)
  let [count, setCount] = useState(0)
  let [Words, setWords] = useState(WordsE)
  let [countVisor, setCountVisor] = useState(0)
  let [boolean, setBoolean] = useState(false)
  let [inputBoolean, setInputBoolean] = useState(false)
  let [counterState, setCounterState] = useState(true)
  let [gameState, setGameState] = useState(true)

  let [animation, setAnimation] = useState(false)
  let [animRed, setAnimRed] = useState(false)
  let [animBlue, setAnimBlue] = useState(false)
  let [animOrange, setAnimOrange] = useState(false)
  let [animYellow, setAnimYellow] = useState(false)


  let iconEye = <FontAwesomeIcon icon={faEye}/>



  // Logica del Juego
  function handleChange(e) {
    if (e.key == "Enter") {
      if (gameState) {
        if (Words[state].respuesta.includes(e.target.value.toLowerCase())) {
          if (state >= Words.length - 1) {
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
            setAnimation(true)
            setAnimBlue(true)
            setTimeout(()=>{
            setAnimation(false)
            setAnimBlue(false)
            },800)
            e.target.value = ""
          }
        } else {
          setAnimRed(true)
          setTimeout(()=>{
          setInput("")
          },830)
          setTimeout(()=>{
          setAnimRed(false)
          },1000)
          e.target.value = ""
        }
      }
    }
  }

  // Contador de Palabras vistas
  function handleClick(e) {
    if (gameState) {
      setBoolean(!boolean)
      setAnimOrange(true)
      setTimeout(()=>{
        setAnimOrange(false)
      },1000)
      if (counterState) {
        setCounterState(!counterState)
        setCount(count + 1)
      }
    }
  }

  // Cambio de Dificultad
  function handleDif(e){
    if(e.target.value === "easy"){
      setWords(WordsE)
      reset()
      animYel()

    }
    if(e.target.value === "v I"){
      setWords(Verb1)
      reset()
      animYel()
    }
    if(e.target.value === "v II"){
      setWords(Verb2)
      reset()
      animYel()
    }
    if(e.target.value === "a I"){
      setWords(Adj1)
      reset()
      animYel()
    }
    if(e.target.value === "a II"){
      setWords(Adj2)
      reset()
      animYel()
    }
    if(e.target.value === "a III"){
      setWords(Adj3)
      reset()
      animYel()
    }
    if(e.target.value === "hard"){
      setWords(WordsH)
      reset()
      animYel()
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

  // animacion amarillo
function animYel(){
  setAnimYellow(true)
  setTimeout(()=>{
      setAnimYellow(false)
    },1000)
}

  
  return (
    <div className="App">

      <Visor 
            visor={count} 
            arrlength={Words.length} 
            completado={countVisor} 
            icon={iconEye} 
      />

      <h1 className='titulo'>
            Traduzca 
            {" " + Words.length} 
            {    Words == Verb1  
              || Words == Verb2
              ? " Verbos " 
              :    Words == Adj1
                || Words == Adj2
                || Words == Adj3 
                  ? " Adjetivos " 
                  : " Palabras "} 
                  de Ingles a Español
      </h1>   

      <Main 
            input={input} 
            handleClick={handleClick} 
            handleChange={handleChange} 
            Verbos={Words} 
            count={state} 
            boolean={boolean} 
            gameState={gameState} 
            icon={iconEye} 
            inputBoolean={inputBoolean}
            anim={animation}
            anim2={animRed}
            anim3={animBlue}
            anim4={animOrange}
            anim5={animYellow}
      />

      <Dificulty 
            handleDif={handleDif}
      />

    </div>
  );
}

export default App;
