export default function Dificulty(props){
    return(
        <div className='dificulty'>
        <h3>Dificultad</h3>
        <select onChange={props.handleDif}>
          <option value="easy">Facil</option>
          <option value="m I.I">Media I.I</option>
          <option value="m I.II">Media I.II</option>
          <option value="m II.I">Media II.I</option>
          <option value="m II.II">Media II.II</option>
          <option value="m II.III">Media II.III</option>
          <option value="hard">Dificil</option>
        </select>
      </div>
    )
}


