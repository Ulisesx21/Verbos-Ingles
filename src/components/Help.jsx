import "../css/Help.css";

export default function Help({ right, left }) {
  return (
    <div className="help">
      <div className="visorHelp">
        <div className="helpPorcentaje">
          <h1>Porcentaje Completado {right}</h1>
        </div>
        <div className="helpVisto">
          <h1>{left} Palabras Vistas</h1>
        </div>
      </div>
      <div>
        <div className="helpInput">
          <h1>{left} Escriba y presione "Enter"</h1>
        </div>
        <div className="helpVisor">
          <h1>{left} Haga "Click" o presione "Ctrl"</h1>
        </div>
        <div className="helpLista">
          <h1>{left} Crea Tu Lista</h1>
        </div>
      </div>
    </div>
  );
}
