import {useState, useEffect} from 'react'
import "../component-css/Game.css"


const Game = (props) => {

  const [totalRounds, setTotalRounds] = useState(0);

  useEffect(() => {
    setTotalRounds(props.totalRounds);
  }, [props.totalRounds]);

  const [playerCount, setPlayerCount] = useState(0);

  useEffect(() => {
    setPlayerCount(props.playerCount);
  }, [props.playerCount]);

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(e.target.value)
  }

  

  const players = [1]

  if(playerCount===props.playerCount){
    for(let i = 2; i<=props.playerCount; i++){
      players.push(i)
    }
  }

  const [currentPlayer, setCurrentPlayer] = useState(players[0])

  

  const [sentence, setSentence] = useState("")

  const [updated, setUpdated] = useState(sentence)

  function handleChange(e){
    setSentence(e.target.value)
  }
  
  const [log, setLog] = useState([])

  

  function handleClick(){
      // subtracts total rounds
      setTotalRounds(prev => prev-1)
      // alternates player counts
      if(currentPlayer < props.playerCount){
        let i = currentPlayer
        setCurrentPlayer(players[i])
      }else{
        let i = 0
        setCurrentPlayer(players[i])
      }
      // logs the written sentence
      setUpdated(sentence)

      const updatedLog=[
        ...log,
        {
          Player: currentPlayer,
          Response: sentence
        }
      ]

      setLog(updatedLog)
      setSentence('')
  }

  
  function newGame(){
    location.reload();
  }

  return(
    <div className="game-main">
      {((totalRounds)>0)&& (
      <div className="in-progress-game">
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Write your sentence!"
            id="sentence"
            name="sentence"
            onChange={handleChange}
            value={sentence}
            className="sentence-input"
          />
          <button onClick={handleClick} title="Write your sentence!" className="write-button">✏️</button>
        </form> 
        <h1>Number of rounds left: {totalRounds}</h1>
        <h1>Current Player: {currentPlayer}</h1>
        {totalRounds<props.totalRounds && (
          <h1>Previous sentence: {updated}</h1>
        )}
      </div>
      )}
      {(totalRounds===0 && log.length>0) &&
        <div>
          <h1 className="final-story">Here is your story:</h1>
          
          {log.map((entry, index) => (
            <div key={index}>
              <p>Player {entry.Player}: {entry.Response}</p>
            </div>
          ))}
          <br></br>
          <button onClick={newGame} className="newgame-button">New Game</button>
        </div>
      }
    </div>
  )
}

export default Game