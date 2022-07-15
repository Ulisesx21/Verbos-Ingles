export default function Main(props) {

    let respuesta1 = props.Verbos[props.count].respuesta[0]
    let respuesta2 = props.Verbos[props.count].respuesta[1]

    return (
        <div className={`container 
                        ${props.anim2 ? "anim2" : ""} 
                        ${props.anim3 ? "anim3" : ""} 
                        ${props.anim4 ? "anim4" : ""} 
                        ${props.anim5 ? "anim5" : ""} 
                        ${props.anim6 ? "anim6" : ""}`}>
            <h1 className={`verbo-principal ${props.anim ? "anim" : ""}`}>{props.Verbos[props.count].verbo}</h1>
            <input className="input" onKeyDown={props.handleChange} placeholder="Escriba aqui..." disabled={props.inputBoolean}/>
            <div className={`show`} onClick={props.handleClick}>
                {props.boolean ? `${respuesta1} ${respuesta2 ? "/" : ""} ${respuesta2 ? respuesta2 : ""}` : <span className="showicon">{props.icon}</span>}
            </div>
            <div className="incorrecto-container">
                <h2 className="incorrecto">{props.input}</h2>
            </div>
        </div>
    )
}