const Stats = (props) => {
  return (
    <div>
      <div>Gold: {props.stats.gold}</div>
      <div>HP: {props.stats.hp}</div>
      <div>Attack: {props.stats.attack}</div>
      <div>Strength: {props.stats.str}</div>
      <div>Defence: {props.stats.def}</div>
    </div>
  );
};

export default Stats;
