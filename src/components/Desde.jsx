import "../css/Desde.css";

export default function Desde({
  changeState,
  length,
  restart,
  iconrestart,
  words,
}) {
  return (
    <>
      <button className="restart" onClick={restart}>
        {iconrestart}
      </button>
      <div className="Desde">
        <h3>Palabra</h3>
        <input
          placeholder={`${words[0].verbo === "" ? 0 : 1} a ${
            words[0].verbo === "" ? 0 : length
          }...`}
          onKeyDown={changeState}
        ></input>
      </div>
    </>
  );
}
