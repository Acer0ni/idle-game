const Action = (props) => {
  return (
    <div
      className="action"
      onClick={() => props.handleCurrentTask(props.actionType)}
    >
      <h4>
        Train {props.actionType} ${props.levelUpCost[props.actionType]} current
        level:{props.level}
      </h4>
    </div>
  );
};
export default Action;
