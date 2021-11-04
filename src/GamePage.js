import { useState, useRef, useEffect } from "react";
import Action from "./Action";
import Avatar from "./Avatar";
import Stats from "./Stats";
import Header from "./Header";

const GamePage = (props) => {
  const [stats, setStats] = useState({
    gold: 1,
    attack: 1,
    str: 1,
    def: 1,
    hp: 10,
  });
  const [gold, setGold] = useState(100);
  const goldIncrease = stats.gold * 10;
  const levelUpBaseCost = 100;
  const [tick, setTick] = useState(0);
  const [currentTask, setCurrentTask] = useState("");
  const calculateCost = (currentLevel) => {
    return currentLevel * levelUpBaseCost;
  };
  const levelUpCost = {
    gold: calculateCost(stats.gold),
    attack: calculateCost(stats.attack),
    str: calculateCost(stats.str),
    def: calculateCost(stats.def),
    hp: calculateCost(stats.hp),
  };
  const levelGold = () => {
    stats.gold += 1;
    console.log(`goldIncrease ${goldIncrease}`);
  };
  const levelAttack = () => {
    stats.attack += 1;
    console.log(`attack ${stats.attack}`);
  };
  const levelStr = () => {
    stats.str += 1;
    console.log(`str ${stats.str}`);
  };
  const levelDef = () => {
    stats.def += 1;
    console.log(`def ${stats.def}`);
  };
  const levelHp = () => {
    stats.hp += 1;
    console.log(`hp ${stats.hp}`);
  };
  const actions = {
    gold: levelGold,
    attack: levelAttack,
    str: levelStr,
    def: levelDef,
    hp: levelHp,
  };

  const handleCurrentTask = (task) => {
    if (gold >= levelUpCost[task]) {
      setGold(gold - levelUpCost[task]);
      actions[task]();
    } else {
      alert(
        `insufficient gold, please wait until you have enough gold and try again. it cost ${levelUpCost[task]} to level up ${task}`
      );
      return null;
    }
    if (!currentTask) {
      setCurrentTask(task);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setGold(gold + goldIncrease);
      setTick(tick + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [gold, goldIncrease, tick]);

  return (
    <div>
      <div id="haha">
        {" "}
        <Header gold={gold} userAvatarSeed={props.userAvatarSeed} />
      </div>

      <div id="container">
        <div id="stats">
          <Stats stats={stats} />
        </div>
        <div id="actions">
          <Action
            levelUpCost={levelUpCost}
            level={stats.gold}
            actionType="gold"
            handleCurrentTask={handleCurrentTask}
          />
          <Action
            levelUpCost={levelUpCost}
            level={stats.hp}
            actionType="hp"
            handleCurrentTask={handleCurrentTask}
          />
          <Action
            levelUpCost={levelUpCost}
            level={stats.attack}
            actionType="attack"
            handleCurrentTask={handleCurrentTask}
          />
          <Action
            levelUpCost={levelUpCost}
            level={stats.str}
            actionType="str"
            handleCurrentTask={handleCurrentTask}
          />
          <Action
            levelUpCost={levelUpCost}
            level={stats.def}
            actionType="def"
            handleCurrentTask={handleCurrentTask}
          />
        </div>
      </div>
    </div>
  );
};

export default GamePage;
