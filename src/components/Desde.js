export default function Desde(props) {
    return (
        <>
            <div className="restart" onClick={props.restart}>{props.iconrestart}</div>
            <div className="Desde">
                <h3>Palabra</h3>
                <input placeholder={`1 a ${props.length}...`} onKeyDown={props.changeState}></input>
            </div>
        </>

    )
}