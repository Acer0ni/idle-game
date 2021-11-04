import { getByPlaceholderText } from "@testing-library/dom";
import { useState } from "react";
import Avatar from "./Avatar";
const Header = (props) => {
  return (
    <div id="header">
      <Avatar userAvatarSeed={props.userAvatarSeed} />
      <p id="1">character:{props.userAvatarSeed}</p>
      <p id="2"> gold:{props.gold}</p>
    </div>
  );
};

export default Header;
