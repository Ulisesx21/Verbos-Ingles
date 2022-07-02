export default function Dificulty(props){
    return(
        <div className='dificulty'>
        <h3>Dificultad</h3>
        <select onChange={props.handleDif}>
          <option value="easy">Facil</option>
          <option value="medium" select="true">Medio</option>
          <option value="hard">Dificil</option>
        </select>
      </div>
    )
}


