export default function Desde(props){
    return(
        <div className="Desde">
            <h3>Desde</h3>
            <input placeholder={`1 a ${props.length}...`} onKeyDown={props.changeState}></input>
        </div>
    )
}