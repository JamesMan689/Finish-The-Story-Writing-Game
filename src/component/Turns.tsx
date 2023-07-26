import {useState} from 'react'
import "../component-css/Turns.css"

const Turns = (props) => {

  const [playerCount, setPlayerCount] = useState(0)

  function playerInputChange(event){
    if(event.target.value>1){
      setPlayerCount(event.target.value)
    }else{
      alert("Players need to be more than 1")
    }
  }

  const [roundCount, setRoundCount] = useState(0)

  function roundInputChange(event){
    setRoundCount(event.target.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    props.setTotalRounds(playerCount*roundCount)
    props.setPlayerCount(playerCount)
    
  }

  return(
    <div>
      <div className="turns-main">
        <form onSubmit={handleSubmit}>
          <input type="number" placeholder="Number of players" onChange={playerInputChange} className="playerInput"/>
          <input type="number" placeholder="Number of rounds per player" onChange={roundInputChange} className="numberInput"/>
          <button title="Submit rounds and players!!" className="enter-button">Enter</button>
        </form>
        
      </div>
    </div>
  )
}

export default Turns