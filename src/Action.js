const Action = (props) => {
  return (
    <div
      className="action"
      onClick={() => props.handleCurrentTask(props.actionType)}
    >
      <div>
        <p className="text">
          <span className="subject">Train</span> {props.actionType} $
          {props.levelUpCost[props.actionType]}
        </p>{" "}
        <p className="text">
          <span
            className="subject">
            Current Level:
          </span>
          {props.level}
        </p>
      </div>
    </div>
  );
};
export default Action;
