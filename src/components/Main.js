
export default function Main(props){
    return(
        <div className="container">
            <h1 className="verbo-principal">{props.Verbos[props.count].verbo}</h1>
            <input className="input" onKeyDown={props.handleChange} placeholder="Escriba aqui..." readonly/>
            <div className="show" onClick={props.handleClick}>
                {props.boolean ? props.Verbos[props.count].respuesta : props.icon}
            </div>
            <div className="incorrecto-container">
                <h2 className="incorrecto">{props.input}</h2>
            </div>
        </div>
    )
}