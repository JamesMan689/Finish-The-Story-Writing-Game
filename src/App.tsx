import Turns from "./component/Turns"
import Game from "./component/Game"
import {useState} from "react"
import Header from "./component/Header"

function App() {

  const [totalRounds, setTotalRounds] = useState(0)
  const [playerCount, setPlayerCount] = useState(0)

  return (
    
    

    <div>
      <Header />
      <Turns setTotalRounds={setTotalRounds} setPlayerCount={setPlayerCount}/>
      <Game totalRounds={totalRounds} playerCount={playerCount} />
    </div>
  )
}

export default App
