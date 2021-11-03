import { useState } from "react";
const Avatar = (props) =>{
    const [avatar,setAvatar]= useState("")
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
      const makeApiCall = () => {
        let subIndex = Math.floor(Math.random() * 18);
        fetch(
          `https://avatars.dicebear.com/api/${typeArr[subIndex]}/${props.userAvaterSeed}.svg`
        ).then((res) => setAvatar(res.url));
      };
      if(!avatar){
        makeApiCall()
      }
    
    return <div id="avatar
    ">
       <img src={avatar} alt="whoops" /> 
    </div>
}

export default Avatar