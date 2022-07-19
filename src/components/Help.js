export default function Help(props){
    return (
        <div className='help'>
        <div className='visorHelp'>
          <div className='helpPorcentaje'>
            <h1>Porcentaje Completado {props.right}</h1>
          </div>
          <div className='helpVisto'>
            <h1>{props.left} Palabras Vistas</h1>
          </div>
        </div>
        <div>
          <div className='helpInput'>
            <h1>{props.left} Escriba y presione "Enter"</h1>
          </div>
          <div className='helpVisor'>
            <h1>{props.left} Haga "Click" o presione "Ctrl"</h1>
          </div>
        </div>
        <div>
          <div className='helpDesde'>
            <h1>{props.left} Número de Palabra</h1>
          </div>
          <div className='helpDif'>
            <h1>{props.left} Seleccione Dificultad</h1>
          </div>
        </div>
      </div>
    )
}