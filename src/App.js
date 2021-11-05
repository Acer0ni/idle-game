import { useState } from 'react';
import { Link, Route, Effect } from "react-router-dom";
import Entrance from './Entrance.js'
import GamePage from './GamePage.js';
import './App.css';

function App() {
  const[userAvatarSeed,setUserAvatarSeed] = useState("")
  const[playerSave,setPlayerSave] = useState({})
  console.log(playerSave)
  return (
    <div className="App">
      
      <Route path="/" exact render={()=> !playerSave  ? <GamePage playerSave={playerSave} setPlayerSave={setPlayerSave} userAvatarSeed={userAvatarSeed}/> : <Entrance userAvatarSeed={userAvatarSeed} setUserAvatarSeed={setUserAvatarSeed}/>}/>

      <Route path="/gamePage" render={()=><GamePage playerSave={playerSave} setPlayerSave={setPlayerSave} userAvatarSeed={userAvatarSeed}/>}/>
    </div>
  );
}

export default App;


// font-family: 'Bebas Neue', cursive;
// font-family: 'Lato', sans-serif;