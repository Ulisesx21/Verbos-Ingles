export default function Visor(props){
    return(
        <div className="visor-container">
            <div className="porcentaje-container">
                <h1 className="porcentaje">{`${Math.floor((props.completado*100)/props.arrlength)}`}<p className="p">%</p></h1>
            </div>
            <div className="visto-container">
                <div>
                 {props.icon}
                </div>
                <h1 className="visto">{props.visor}</h1>
            </div>
        </div>  
    )
}