import { useState, useRef } from "react";
import { Link, Route, Effect } from "react-router-dom";

const Entrance = (props) => {
  const [userSeed, setUserSeed] = useState("");
  const [avatar, setAvatar] = useState("");
  const typeArr = [
    "adventurer",
    "adventurer-neutral",
    "avataaars",
    "big-ears",
    "big-ears-neutral",
    "big-smile",
    "bottts",
    "croodles",
    "croodles-neutral",
    "gridy",
    "identicon",
    "jdenticon",
    "micah",
    "miniavs",
    "open-peeps",
    "personas",
    "pixel-art",
    "pixel-art-neutral",
  ];

  const inputRefName = useRef();
  const handleClick = (props) => {
    setUserSeed(inputRefName.current.value);
    makeApiCall(userSeed);
  };
  const makeApiCall = (name) => {
    let subIndex = Math.floor(Math.random() * 18);
    fetch(
      `https://avatars.dicebear.com/api/${typeArr[subIndex]}/${userSeed}.svg`
    ).then((res) => props.setUserAvatar(res.url));
  };

  let userAvatar = "";
  if (props.userAvatar) {
    userAvatar = <img src={props.userAvatar} alt="whoops" />;
  }

  return (
    <div>
      {userAvatar}
      <h2 id="nameChoice">Please enter your name.</h2>

      <input ref={inputRefName} type="text" />
      <Link to="/gamePage">
        <button onClick={handleClick}>Create</button>
      </Link>
    </div>
  );
};

export default Entrance;
