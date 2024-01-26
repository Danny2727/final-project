import './App.css'
import Character from './components/Chracter'

const App = () => {

  return (
    <div className="container">
      <div className="nav">
        <h1>Demon Slayer</h1>
      </div>
      <div className="demon-slayer">
          <Character />
      </div>

    </div>
  )
}

export default App
