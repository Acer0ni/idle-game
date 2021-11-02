import { useState } from 'react';
import { Link, Route, Effect } from "react-router-dom";
import Entrance from './Entrance.js'
import GamePage from './GamePage.js';
import './App.css';

function App() {
  const[userAvatar,setUserAvatar] = useState("")

  return (
    <div className="App">
      <Route path="/"render={()=><Entrance userAvatar={userAvatar}setUserAvatar={setUserAvatar}/>}/>
      <Route path="/gamePage" render={()=><GamePage userAvatar={userAvatar}setUserAvatar={setUserAvatar}/>}/>
    </div>
  );
}

export default App;

