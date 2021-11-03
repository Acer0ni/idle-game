import { useState } from 'react';
import { Link, Route, Effect } from "react-router-dom";
import Entrance from './Entrance.js'
import GamePage from './GamePage.js';
import './App.css';

function App() {
  const[userAvatarSeed,setUserAvatarSeed] = useState("")

  return (
    <div className="App">
      <Route path="/" exact render={()=><Entrance userAvatarSeed={userAvatarSeed} setUserAvatarSeed={setUserAvatarSeed}/>}/>
      <Route path="/gamePage" render={()=><GamePage userAvatarSeed={userAvatarSeed}/>}/>
    </div>
  );
}

export default App;

