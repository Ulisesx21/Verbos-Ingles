import "../css/Visor.css";

export default function Visor({ completado, arrlength, icon, visor }) {
  return (
    <div className="visor-container">
      <div className="porcentaje-container">
        <h1 className="porcentaje">
          {`${Math.floor((completado * 100) / arrlength)}`}
          <p className="p">%</p>
        </h1>
      </div>
      <div className="visto-container">
        <div>{icon}</div>
        <h1 className="visto">{visor}</h1>
      </div>
    </div>
  );
}
