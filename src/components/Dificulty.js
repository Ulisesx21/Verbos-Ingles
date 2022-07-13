export default function Dificulty(props){
    return(
        <div className='dificulty'>
        <h3>Dificultad</h3>
        <select onChange={props.handleDif}>
          <option value="easy">Facil</option>
          <option value="v I">Verb I</option>
          <option value="v II">Verb II</option>
          <option value="a I">Adj I</option>
          <option value="a II">Adj II</option>
          <option value="a III">Adj III</option>
          <option value="hard">Dificil</option>
        </select>
      </div>
    )
}


