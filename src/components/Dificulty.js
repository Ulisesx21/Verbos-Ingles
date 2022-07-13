export default function Dificulty(props){
    return(
        <div className='dificulty'>
        <h3>Dificultad</h3>
        <select onChange={props.handleDif}>
          <option value="easy">Facil</option>
          <option value="m I.I">Verb I</option>
          <option value="m I.II">Verb II</option>
          <option value="m II.I">Adj I</option>
          <option value="m II.II">Adj II</option>
          <option value="m II.III">Adj III</option>
          <option value="hard">Dificil</option>
        </select>
      </div>
    )
}


