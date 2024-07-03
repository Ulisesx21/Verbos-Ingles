import "../css/MiLista.css"


export default function MiLista({
  setAddList,
  addlist,
  plus,
  submitList,
  lista,
  deleteW,
}) {
  return (
    <>
      <div className="add" onClick={() => setAddList(!addlist)}>
        {plus}
      </div>
      {addlist ? (
        <div>
          <div className="milista">
            <h1>Mi Lista</h1>
            <hr />
            <form className="form" onSubmit={submitList}>
              <label>
                <span className="spanl">Palabra</span>
                <input
                  type="text"
                  name="palabra"
                  className="inputV"
                  placeholder="..."
                />
              </label>
              <label>
                <span>Significado</span>
                <input
                  type="text"
                  name="significado"
                  placeholder="..."
                  className="inputV2"
                />
              </label>
              <button type="submit" className="milistabtn">
                Add
              </button>
            </form>
            <hr />
            <div className="divpalabras">
              {lista[0].verbo === ""
                ? ""
                : lista.map((i, idx) => (
                    <div key={idx} className="verbolist">
                      <span className="spanlist">{i.verbo}</span>
                      {i.verbo === "" ? (
                        ""
                      ) : (
                        <button
                          className="btnlist"
                          onClick={() => deleteW(idx)}
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  ))}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
