import './App.css';
import { useState, useEffect } from 'react';
import Visor from './components/Visor';
import Main from "./components/Main";
import WordsE from './components/Words/VerbosE';
import Verb1 from "./components/Words/Verb-1";
import Verb2 from './components/Words/Verb-2';
import Adj1 from "./components/Words/Adj-1";
import Adj2 from "./components/Words/Adj-2";
import Adj3 from "./components/Words/Adj-3";
import WordsH from './components/Words/VerbosH';
import Preps from './components/Words/Preps';
import Dificulty from './components/Dificulty';
import Desde from './components/Desde';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';



function App() {

  let [input, setInput] = useState("")
  let [state, setState] = useState(0)
  let [count, setCount] = useState(0)
  let [countVisor, setCountVisor] = useState(0)
  let [Words, setWords] = useState([{verbo: "",respuesta: []}])

  // Booleans
  let [boolean, setBoolean] = useState(false)
  let [inputBoolean, setInputBoolean] = useState(false)
  let [counterState, setCounterState] = useState(true)
  let [gameState, setGameState] = useState(true)

  // Animation Booleans
  let [animation, setAnimation] = useState(false)
  let [animRed, setAnimRed] = useState(false)
  let [animBlue, setAnimBlue] = useState(false)
  let [animViolet, setAnimViolet] = useState(false)
  let [animYellow, setAnimYellow] = useState(false)
  let [animOrange, setAnimOrange] = useState(false)

  // Select Booleans
  let [hardBool, setHardBool] = useState(false)
  let [easyBool, setEasyBool] = useState(false)
  let [Verb1Bool, setVerb1Bool] = useState(false)
  let [Verb2Bool, setVerb2Bool] = useState(false)
  let [Adj1Bool, setAdj1Bool] = useState(false)
  let [Adj2Bool, setAdj2Bool] = useState(false)
  let [Adj3Bool, setAdj3Bool] = useState(false)

  let iconEye = <FontAwesomeIcon icon={faEye}/>

  // Inicializando partida con LocalStorage
  useEffect(()=>{
    if(localStorage.getItem("verbos") == "hard"){
      setWords(WordsH)
      setHardBool(true)
    }
    else if(localStorage.getItem("verbos") == "v I"){
      setWords(Verb1)
      setVerb1Bool(true)
    }
    else if(localStorage.getItem("verbos") == "v II"){
      setWords(Verb2)
      setVerb2Bool(true)
    }
    else if(localStorage.getItem("verbos") == "a I"){
      setWords(Adj1)
      setAdj1Bool(true)
    }
    else if(localStorage.getItem("verbos") == "a II"){
      setWords(Adj2)
      setAdj2Bool(true)
    }
    else if(localStorage.getItem("verbos") == "a III"){
      setWords(Adj3)
      setAdj3Bool(true)
    }
    else if(localStorage.getItem("verbos") == "easy"){
      setWords(WordsE)
      setEasyBool(true)
    }
    else{
      setWords(WordsE)
    }
    setState(Number(localStorage.getItem("state")))
    setInput(Number(localStorage.getItem("state"))+1)
    setCountVisor(Number(localStorage.getItem("state")))
    setCount(Number(localStorage.getItem("count"))+1)

  },[])

  // Logica del Juego
  function handleChange(e) {
    if (e.key == "Enter") {
      if (gameState) {
        if (Words[state].respuesta.includes(e.target.value.toLowerCase())) {
          if (state >= Words.length - 1) {
            e.target.value = ""
            setCountVisor(countVisor + 1)
            setGameState(false)
            setInputBoolean(true)
          } else {
            setState(state + 1)
            setCountVisor(countVisor + 1)
            setBoolean(false)
            setCounterState(true)
            localStorage.setItem("state",`${state+1}`)
            setInput(`${state+2}`)
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
      setAnimViolet(true)
      setTimeout(()=>{
        setAnimViolet(false)
      },1000)
      if (counterState) {
        setCounterState(!counterState)
        setCount(count + 1)
        localStorage.setItem("count",`${count}`)
      }
    }
  }

  // Cambio de Dificultad y set de LocalStorage
  function handleDif(e){
    if(e.target.value === "easy"){
      setWords(WordsE)
      localStorage.setItem("verbos","easy")
      localStorage.setItem("state","0")
      reset()
      animYel()
    }
    if(e.target.value === "v I"){
      setWords(Verb1)
      localStorage.setItem("verbos","v I")
      localStorage.setItem("state","0")
      reset()
      animYel()
    }
    if(e.target.value === "v II"){
      setWords(Verb2)
      localStorage.setItem("verbos","v II")
      localStorage.setItem("state","0")
      reset()
      animYel()
    }
    if(e.target.value === "a I"){
      setWords(Adj1)
      localStorage.setItem("verbos","a I")
      localStorage.setItem("state","0")
      reset()
      animYel()
    }
    if(e.target.value === "a II"){
      setWords(Adj2)
      localStorage.setItem("verbos","a II")
      localStorage.setItem("state","0")
      reset()
      animYel()
    }
    if(e.target.value === "a III"){
      setWords(Adj3)
      localStorage.setItem("verbos","a III")
      localStorage.setItem("state","0")
      reset()
      animYel()
    }
    if(e.target.value === "hard"){
      setWords(WordsH)
      localStorage.setItem("verbos","hard")
      localStorage.setItem("state","0")
      reset()
      animYel()
    }
  }

  // Cambio de state/palabra
  function stateChange(e){
    if(e.key == "Enter" && Number(e.target.value) > 0 && Number(e.target.value) <= Words.length){
      setState(Number(e.target.value)-1)
      setCountVisor(Number(e.target.value)-1)
      setInput(`${e.target.value}`)
      localStorage.setItem("state",`${Number(e.target.value)-1}`)
      localStorage.setItem("count",`${count}`)
      e.target.value = ""
      setAnimOrange(true)
      setTimeout(()=>{
        setAnimOrange(false)
      },1000)
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

  // Animacion amarillo
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
            anim4={animViolet}
            anim5={animYellow}
            anim6={animOrange}
      />

      <Desde 
            changeState={stateChange}
            length={Words.length}
      />

      <Dificulty 
            handleDif={handleDif}
            hard={hardBool}
            easy={easyBool}
            verb1={Verb1Bool}
            verb2={Verb2Bool}
            adj1={Adj1Bool}
            adj2={Adj2Bool}
            adj3={Adj3Bool}
      />

    </div>
  );
}

export default App;
