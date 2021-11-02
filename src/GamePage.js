import { useState, useRef,useEffect } from "react";

const GamePage = () =>{
    const [Stats,setStats] = useState("")
    const [gold,setGold]= useState(100)
    const [goldIncrease,setGoldIncrease] = useState(10)
    const [tickInterval,setTickInterval] = useState(null)
    const manageGameTicks = () =>{
        setTimeout(() =>{
            setGold(gold +goldIncrease)
        },5000)
        
        // setGold(gold +goldIncrease)
        // if(currenttaskticks == currentticks){
        //     complete job
        // }
        // else{
        //     tick++
        // }
    }
    
    // if (tickInterval === null){
    //     setTickInterval(setInterval(manageGameTicks,5000))
    // }
    


    
    const SetCurrentTask = (task) =>{
        

    }
    useEffect(() =>{
        manageGameTicks();
    },[gold])
    console.log(gold)
    return <div>{gold}</div>
}

export default GamePage