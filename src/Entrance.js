import { useState, useRef } from "react";
import { Link, Route, Effect } from "react-router-dom";
import Avatar from "./Avatar";

const Entrance = (props) => {
  const [userSeed, setUserSeed] = useState("");
  const [avatar, setAvatar] = useState("");

  const inputRefName = useRef();
  const handleClick = () => {
    props.setUserAvatarSeed(inputRefName.current.value);
  };

  return (
    <div>
      <h2 id="nameChoice">Please enter your name.</h2>

      <input ref={inputRefName} type="text" />
      <Link to="/gamePage">
        <button onClick={handleClick}>Create</button>
      </Link>
    </div>
  );
};

export default Entrance;
