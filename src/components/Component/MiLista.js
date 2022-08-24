export default function MiLista(props) {
    return (
        <>
        <div className="add" onClick={() => props.setAddList(!props.addlist)}>{props.plus}</div>
      {
        props.addlist ?
            <div>
                <div className='milista'>
                    <h1>Mi Lista</h1>
                    <hr />
                    <form className='form' onSubmit={props.submitList}>
                        <label>
                            <span className="spanl">Palabra</span>
                            <input type="text" name="palabra" className='inputV' placeholder='...' />
                        </label>
                        <label>
                            <span>Significado</span>
                            <input type="text" name="significado" placeholder='...' className='inputV2' />
                        </label>
                        <button type="submit" className='milistabtn'>Add</button>
                    </form>
                    <hr />
                    <div className='divpalabras'>
                        {props.lista[0].verbo === "" ? "" : props.lista.map((i, o) => <div key={o} className="verbolist"><span className='spanlist'>{i.verbo}</span>{i.verbo === "" ? "" : <button className='btnlist' onClick={() => props.deleteW(o)}>Delete</button>}</div>)}
                    </div>
                </div>
            </div>
            : ""
    }
    </>
    )
}