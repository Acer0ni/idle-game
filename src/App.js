import { useState } from 'react';
import { Link, Route, Effect } from "react-router-dom";
import Entrance from './Entrance.js'
import GamePage from './GamePage.js';
import './App.css';

function App() {
  const[userAvatar,setUsername] = useState("")

  return (
    <div className="App">
      <Route path="/"component={Entrance}/>
      <Route path="/gamePage" component={GamePage} />
    </div>
  );
}

export default App;
