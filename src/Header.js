import { getByPlaceholderText } from "@testing-library/dom";
import { useState } from "react";
import Avatar from "./Avatar";
const Header = (props) => {
  return (
    <div id="header">
      <Avatar userAvatarSeed={props.userAvatarSeed} />
      <p className="header-text" id="1">character:{props.userAvatarSeed}</p>
      <p className="header-text" id="2"> gold:{props.gold}</p>
    </div>
  );
};

export default Header;
