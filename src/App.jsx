import './App.css'
import Alarm from './components/Alarm'

function App() {
  return (
    <div className="App">
      <div className="left">
        <Alarm />
        <div className="eisenhower">
          Eisenhower Matrix
        </div>
        <div className="goals">
          Daily goals
        </div>
        <div className="indicators">
          Indicators of
        </div>
      </div>
      <div className="right">
        <div className="schedule">
          Schedule
        </div>
      </div>
    </div>
  )
}

export default App
