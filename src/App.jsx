import "./App.css";
import { useState, useEffect } from "react";
import { Main } from "./components/Main";
import Visor from "./components/Visor";
import WordsE from "./Words/VerbosE";
import Verb1 from "./Words/Verb-1";
import Verb2 from "./Words/Verb-2";
import Adj1 from "./Words/Adj-1";
import Adj2 from "./Words/Adj-2";
import Adj3 from "./Words/Adj-3";
import WordsH from "./Words/VerbosH";
import Preps from "./Words/Preps";
import Dificulty from "./components/Dificulty";
import Desde from "./components/Desde";
import Help from "./components/Help";
import MiLista from "./components/MiLista";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faArrowLeft,
  faArrowRight,
  faQuestion,
  faPlus,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";
import { getItem, setItem } from "./utils/localStorage";

function App() {
  let [input, setInput] = useState("");
  let [state, setState] = useState(0);
  let [count, setCount] = useState(0);

  const INITIAL_VALUES = [{ verbo: "", respuesta: [] }];

  // Palabras
  let [words, setWords] = useState(INITIAL_VALUES);
  // Lista
  let [lista, setLista] = useState(INITIAL_VALUES);

  // Porcentaje completado
  let [countVisor, setCountVisor] = useState(0);

  // Booleans
  let [gameState, setGameState] = useState(true);
  let [counterState, setCounterState] = useState(true);

  // Muestra la palabra
  let [boolean, setBoolean] = useState(false);

  let [inputBoolean, setInputBoolean] = useState(false);

  // Abre todos los modales de Help
  let [helpState, setHelpState] = useState(false);

  // Modal de MiLista
  let [addlist, setAddList] = useState(false);

  // Modal que muestra las palabras vistas
  let [vistasBool, setVistasBool] = useState(false);

  // Animation Booleans
  let [animation, setAnimation] = useState(false);
  // Border color booleans
  let [animRed, setAnimRed] = useState(false);
  let [animBlue, setAnimBlue] = useState(false);
  let [animViolet, setAnimViolet] = useState(false);
  let [animYellow, setAnimYellow] = useState(false);
  let [animOrange, setAnimOrange] = useState(false);

  // Select Booleans
  let [selectBoolean, setSelectBoolean] = useState("");

  const iconEye = <FontAwesomeIcon icon={faEye} />;
  const arrLeft = <FontAwesomeIcon icon={faArrowLeft} />;
  const arrRight = <FontAwesomeIcon icon={faArrowRight} />;
  const iconQuestion = <FontAwesomeIcon icon={faQuestion} />;
  const plus = <FontAwesomeIcon icon={faPlus} />;
  const restart = <FontAwesomeIcon icon={faRotateRight} />;

  // Inicializando partida con LocalStorage
  useEffect(() => {
    const getSection = getItem("verbos");
    const getState = Number(getItem("state"));
    const getCount = Number(getItem("count"));
    const getMiLista = getItem("milista");

    if (getSection === "hard") {
      setWords(WordsH);
      setSelectBoolean("hard");
    } else if (getSection === "v I") {
      setWords(Verb1);
      setSelectBoolean("v I");
    } else if (getSection === "v II") {
      setWords(Verb2);
      setSelectBoolean("v II");
    } else if (getSection === "prep") {
      setWords(Preps);
      setSelectBoolean("prep");
    } else if (getSection === "a I") {
      setWords(Adj1);
      setSelectBoolean("a I");
    } else if (getSection === "a II") {
      setWords(Adj2);
      setSelectBoolean("a II");
    } else if (getSection === "a III") {
      setWords(Adj3);
      setSelectBoolean("a III");
    } else if (getSection === "easy") {
      setWords(WordsE);
      setSelectBoolean("easy");
    } else if (getSection === "milista") {
      if (getItem("milista") === null) {
      } else {
        setLista(getMiLista);
        setWords(getMiLista);
      }
      setSelectBoolean("milista");
    } else {
      setWords(WordsE);
      setSelectBoolean("easy");
    }

    if (getItem("see") === null) {
      setItem("see", []);
    }

    if (getItem("milista") === null) {
      setItem("milista", [{ verbo: "", respuesta: [] }]);
    } else {
      setLista(getItem("milista"));
    }

    setLista(getMiLista);

    setState(getState);
    setInput(getState + 1);
    setCountVisor(getState);
    setCount(getCount);
    setAnimation(true);

    setTimeout(() => {
      setAnimation(false);
    }, 800);
  }, []);

  // Cerrar modal que muestra las palabras vistas
  document.addEventListener("click", () => {
    setVistasBool(false);
  });

  // Logica del Juego
  function handleChange(e) {
    const inputValue = e.target.value;

    if (e.key === "Control") {
      handleClick();
    }
    if (e.key === "Enter") {
      if (gameState) {
        if (words[state].respuesta.includes(inputValue.toLowerCase())) {
          if (state >= words.length - 1) {
            setCountVisor(countVisor + 1);
            setGameState(false);
            setBoolean(false);
            setInputBoolean(true);
            if (getItem("see").length >= 1) {
              setVistasBool(true);
            }
            setInput("Finalizado");
          } else {
            setState(state + 1);
            setCountVisor(countVisor + 1);
            setBoolean(false);
            setCounterState(true);
            setItem("state", `${state + 1}`);
            setInput(`${state + 2}`);
            setAnimation(true);
            setAnimBlue(true);
            setTimeout(() => {
              setAnimation(false);
              setAnimBlue(false);
            }, 800);
          }
        } else {
          setAnimRed(true);
          setTimeout(() => {
            setInput(`${state + 1}`);
          }, 820);
          setTimeout(() => {
            setAnimRed(false);
          }, 1000);
        }
        e.target.value = "";
      }
    }
  }

  // Contador de Palabras vistas
  function handleClick() {
    if (gameState) {
      if (counterState) {
        setBoolean(!boolean);
        setAnimViolet(true);
        setTimeout(() => {
          setAnimViolet(false);
        }, 1000);
        setCounterState(!counterState);
        setCount(count + 1);
        localStorage.setItem("count", `${count + 1}`);
        let aux = getItem("see");
        if (!aux.includes(state)) {
          aux.push(state);
          setItem("see", aux);
        }
      }
    }
  }

  // Cambio de Dificultad y set de LocalStorage
  function handleDif(e) {
    const selectValue = e.target.value;

    switch (selectValue) {
      case "easy":
        setWords(WordsE);
        break;
      case "v I":
        setWords(Verb1);
        break;
      case "v II":
        setWords(Verb2);
        break;
      case "prep":
        setWords(Preps);
        break;
      case "a I":
        setWords(Adj1);
        break;
      case "a II":
        setWords(Adj2);
        break;
      case "a III":
        setWords(Adj3);
        break;
      case "hard":
        setWords(WordsH);
        break;
      case "milista":
        if (getItem("milista") === null) {
          setLista([{ verbo: "", respuesta: [] }]);
          setWords([{ verbo: "", respuesta: [] }]);
        } else {
          setWords(getItem("milista"));
        }
        if (lista[0].verbo === "") {
          setAddList(true);
        }
        break;
      default:
        setWords(WordsE);
        break;
    }

    reset();
    animYel();
    setAddList(false);
    setItem("state", "0");
    setItem("verbos", `${selectValue}`);
  }

  // Cambio de state/palabra
  function stateChange(e) {
    const number = Number(e.target.value);

    if (e.key === "Enter" && number > 0 && number <= words.length) {
      setState(number - 1);
      setCountVisor(number - 1);
      setInput(`${number}`);
      setItem("state", `${number - 1}`);
      setItem("count", `${count}`);
      e.target.value = "";
      setAnimation(true);
      setCounterState(true);
      setBoolean(false);
      setTimeout(() => {
        setAnimation(false);
      }, 800);
      setAnimOrange(true);
      setTimeout(() => {
        setAnimOrange(false);
      }, 1000);
    }
  }

  // Reset de los Estados
  function reset() {
    setState(0);
    setCountVisor(0);
    setCount(0);
    setInput("1");
    setBoolean(false);
    setCounterState(true);
    setGameState(true);
    setInputBoolean(false);
    setAnimation(true);

    setItem("see", []);
    setItem("count", "0");
    setItem("state", "0");
    setTimeout(() => {
      setAnimation(false);
    }, 800);
  }

  // Animacion amarillo
  function animYel() {
    setAnimYellow(true);
    setTimeout(() => {
      setAnimYellow(false);
    }, 1000);
  }

  // Agregar palabras a Mi Lista
  function submitList(e) {
    e.preventDefault();

    const word = e.target[0].value;
    const meaning = e.target[1].value;

    if (
      word !== "" &&
      meaning !== "" &&
      word.length <= 20 &&
      meaning.length <= 20
    ) {
      if (lista[0].verbo === "") {
        lista[0] = {
          verbo: word.toLowerCase(),
          respuesta: [meaning.toLowerCase()],
        };
        if (
          lista.length === 1 &&
          getItem("verbos") === "milista" &&
          lista[0].verbo !== "" &&
          word !== "" &&
          meaning !== ""
        ) {
          setAnimation(true);
          setTimeout(() => {
            setAnimation(false);
          }, 800);
        }
      } else {
        lista.push({
          verbo: word.toLowerCase(),
          respuesta: [meaning.toLowerCase()],
        });
      }
      setLista(lista);
      setItem("milista", lista);
      setLista(getItem("milista"));
      if (getItem("verbos") === "milista") {
        setItem("see", []);
        setWords(getItem("milista"));
      }
      e.target[0].value = "";
      e.target[1].value = "";
      e.target[0].select();
    }
  }

  // Eliminar palabras de Mi Lista
  function deleteW(e) {
    if (lista.length === 1) {
      lista[0] = { verbo: "", respuesta: [] };
    } else {
      lista.splice(e, 1);
    }
    setLista(lista);

    setItem("milista", lista);
    if (getItem("verbos") === "milista") {
      setWords(getItem("milista"));
      setState((state = 0));
      setCount((count = 0));
      setCountVisor((countVisor = 0));
      setItem("see", []);
      setItem("state", "0");
      setItem("count", "0");
      setInput("1");
      setBoolean(false);
    }
    setLista(getItem("milista"));
    setGameState(true);
    if (getItem("verbos") === "milista" && e === 0) {
      setAnimation(true);
      setTimeout(() => {
        setAnimation(false);
      }, 800);
    }
  }

  return (
    <div className="App">
      <Visor
        visor={count}
        arrlength={words.length}
        completado={countVisor}
        icon={iconEye}
      />

      <h1 className="titulo">
        Traduce
        {words[state].verbo === "" ? " " + 0 : " " + words.length}
        {words === Verb1 || words === Verb2
          ? " Verbos "
          : words === Adj1 || words === Adj2 || words === Adj3
          ? " Adjetivos "
          : words === Preps
          ? " Preposiciones "
          : " Palabras "}
        de Inglés a Español
      </h1>

      {vistasBool && (
        <div className="Alert">
          <div className="a">
            <h3>Palabras Vistas:</h3>
            {JSON.parse(localStorage.getItem("see")).map((i, o) => (
              <p key={o} className="divix">
                {words[i].verbo.toLocaleUpperCase()}:{" "}
                {words[i].respuesta.join(" / ")}
              </p>
            ))}
          </div>
        </div>
      )}

      <MiLista
        setAddList={setAddList}
        lista={lista}
        deleteW={deleteW}
        addlist={addlist}
        plus={plus}
        submitList={submitList}
      />

      <Main
        input={input}
        handleClick={handleClick}
        handleChange={handleChange}
        Verbos={words}
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
        length={words.length}
        restart={reset}
        iconrestart={restart}
        words={words}
      />

      <Dificulty handleDif={handleDif} selectBoolean={selectBoolean} />

      {helpState && <Help left={arrLeft} right={arrRight} />}

      <div className="ayuda" onClick={() => setHelpState(!helpState)}>
        {iconQuestion}
      </div>
    </div>
  );
}

export default App;
