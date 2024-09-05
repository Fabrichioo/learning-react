import './App.css'
import useCatImage, { useCatFact } from './hooks/useCatImage'

export function App () {
  // Recuperar un hecho aleatorio de gatos en la primera API
  const { fact, refreshFact } = useCatFact()
  const { urlImage } = useCatImage({ fact })

  return (
    <main>
      <h1>Cat App</h1>
      <button onClick={refreshFact}>New Fact</button>
      {urlImage && (
        <img
          src={urlImage}
          alt={`Image extracted using the first three words for ${fact}`}
        />
      )}
      {fact && <p>{fact}</p>}
    </main>
  )
}
