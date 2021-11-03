import { getByPlaceholderText } from "@testing-library/dom";
import { useState } from "react";
import Avatar from "./Avatar";
const Header = (props) =>{
    


    console.log(props.userAvatarSeed)

    return<div>
        <Avatar userAvatarSeed={props.userAvatarSeed} />
        <p>character:{props.userAvatarSeed} gold:{props.gold}</p>
    </div>

}

export default Header