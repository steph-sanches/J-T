import { createSignal } from 'solid-js'
import './App.css'

function App() {
  const [message, setMessage] = createSignal('')

  const fetchMessage = async () => {
    try {
      const response = await fetch('http://localhost:5001/api/hello')
      const data = await response.json()
      setMessage(data.message)
    } catch (error) {
      console.error('Erreur lors de la récupération du message :', error)
    }
  }

  return (
    <div>
      <h1>SolidJS Frontend 🚀</h1>
      <button onClick={fetchMessage}>Appeler le backend</button>
      <p>{message()}</p>
    </div>
  )
}

export default App
