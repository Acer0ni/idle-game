


const Action = (props) =>{
    
  
    return <div onClick={() =>props.handleCurrentTask(props.actionType)}>
        <h2>Train  {props.actionType} ${props.levelUpCost[props.actionType]}</h2>
    </div>

}
export default Action 