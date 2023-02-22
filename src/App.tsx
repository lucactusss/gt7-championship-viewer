import './App.css'
import CountDown from './components/countdown/CountDown'

function App() {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-r from-purple-900 via-indigo-800 to-purple-900 text-white">
      {/* <p>{process.env.REACT_APP_APIKEY ?? 'toto'}</p> for secret includes */}
      <div className="m-auto">
        <CountDown></CountDown>
      </div>
    </div>
  )
}

export default App
