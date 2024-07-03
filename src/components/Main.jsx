import "../css/Main.css";

export const Main = ({
  Verbos,
  count,
  anim,
  anim2,
  anim3,
  anim4,
  anim5,
  anim6,
  handleChange,
  inputBoolean,
  handleClick,
  boolean,
  icon,
  input,
}) => {
  
  let respuesta1 = Verbos[count].respuesta[0];
  let respuesta2 = Verbos[count].respuesta[1];

  return (
    <div
      className={`container 
                        ${anim2 ? "anim2" : ""} 
                        ${anim3 ? "anim3" : ""} 
                        ${anim4 ? "anim4" : ""} 
                        ${anim5 ? "anim5" : ""} 
                        ${anim6 ? "anim6" : ""}`}
    >
      <h1 className={`verbo-principal ${anim ? "anim" : ""}`}>
        {Verbos[count].verbo === "" ? "-" : Verbos[count].verbo}
      </h1>
      <input
        className="input"
        onKeyDown={handleChange}
        placeholder="Escriba aqui..."
        disabled={inputBoolean}
        autoFocus={true}
      />
      <div className={`show`} onClick={handleClick}>
        {boolean ? (
          `${respuesta1 ? respuesta1 : ""} ${respuesta2 ? "/" : ""} ${
            respuesta2 ? respuesta2 : ""
          }`
        ) : (
          <span className="showicon">{icon}</span>
        )}
      </div>
      <div className="incorrecto-container">
        <h2 className="incorrecto">{Verbos[count].verbo === "" ? 0 : input}</h2>
      </div>
    </div>
  );
};
