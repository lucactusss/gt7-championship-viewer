import './App.css'
import CountDown from './components/countdown/CountDown'

function App() {
  return (
    <div className="flex flex-col h-screen bg-slate-300">
      <p>{process.env.REACT_APP_APIKEY ?? 'toto'}</p>
      <div className="m-auto">
        <CountDown></CountDown>
      </div>
    </div>
  )
}

export default App
