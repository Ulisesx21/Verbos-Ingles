export default function Dificulty(props){
    return(
      <div className='dificulty'>
        <h3>Dificultad</h3>
        <select onChange={props.handleDif}>
          <option value="hard" selected={props.hard}>Difícil</option>
          <option value="a III" selected={props.adj3}>Adj III</option>
          <option value="a II" selected={props.adj2}>Adj II</option>
          <option value="a I" selected={props.adj1}>Adj I</option>
          <option value="prep" selected={props.prep}>Prep</option>
          <option value="v II" selected={props.verb2}>Verb II</option>
          <option value="v I" selected={props.verb1}>Verb I</option>
          <option value="easy" selected={props.easy}>Fácil</option>
        </select>
      </div>
    )
}


