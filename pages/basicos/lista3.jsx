function gerarLista(final = 10) {
  const lista = []
  for(let i = 1; i <= final; i++) {
    lista.push(<span>{i},</span>)
  }
  return lista
}

export default function lista() {
  return (
    <div>
      <div>
        {gerarLista(50)}
      </div>
      <div>
        {gerarLista(3)}
      </div>

    </div>

  )
}
// valor padrão é  10 
// se eu passar os parâmetros ele assume como valor final