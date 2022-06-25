export default function Visor(props){
    return(
        <div className="visor-container">
            <h1 className="porcentaje">{`${((props.completado*100)/props.arrlength).toFixed(0)}%`}</h1>
            <h1 className="visto"><img className="img-visto" src="https://cdn-icons-png.flaticon.com/512/64/64943.png"></img>{props.visor}</h1>
        </div>  
    )
}