import "../component-css/Header.css"

const Header = () =>{

  const spanStyle = {color: "#d04e73", padding: "6px"}

  return(
    <div className="heading-div">
      <h1 className="heading">Finish the Story <span style={spanStyle}>Writing Game</span></h1>
      <p>By James Xu</p>
    </div>
    
  )
}

export default Header