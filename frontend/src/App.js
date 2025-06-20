import './App.css'
import H1 from './components/H1'
import MainPage from './pages/main/MainPage'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <H1>Library App</H1>
      </header>
      <div className='app-body'>
        <MainPage />
      </div>
    </div>
  )
}

export default App
