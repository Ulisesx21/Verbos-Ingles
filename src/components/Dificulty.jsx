import "../css/Dificulty.css";

export default function Dificulty({ selectBoolean, handleDif }) {
  return (
    <div className="dificulty">
      <h3>Secciones</h3>
      <select onChange={handleDif}>
        <option value="milista" selected={selectBoolean === "milista"}>
          Mi Lista
        </option>
        <option value="hard" selected={selectBoolean === "hard"}>
          Difícil
        </option>
        <option value="a III" selected={selectBoolean === "a III"}>
          Adj III
        </option>
        <option value="a II" selected={selectBoolean === "a II"}>
          Adj II
        </option>
        <option value="a I" selected={selectBoolean === "a I"}>
          Adj I
        </option>
        <option value="prep" selected={selectBoolean === "prep"}>
          Prep
        </option>
        <option value="v II" selected={selectBoolean === "v II"}>
          Verb II
        </option>
        <option value="v I" selected={selectBoolean === "v I"}>
          Verb I
        </option>
        <option value="easy" selected={selectBoolean === "easy"}>
          Fácil
        </option>
      </select>
    </div>
  );
}
