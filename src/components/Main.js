

export default function Main(props){
    return(
        <div className="container">
            <h1>{props.Verbos[props.count].verbo}</h1>
            <input className="input" onKeyDown={props.handleChange} placeholder="..."/>
            <div className="show" onClick={props.handleClick}>
                {props.boolean ? props.Verbos[props.count].respuesta : <img className="img" src="https://cdn-icons-png.flaticon.com/512/64/64943.png"></img>}
            </div>
            <div className="incorrecto-container">
                <h2 className="incorrecto">{props.input}</h2>
            </div>
        </div>
    )
}