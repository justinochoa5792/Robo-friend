import { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";

import CardList from "./component/CardList";
import Scroll from "./component/Scroll";

function App() {
  const [robot, setRobots] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getRobots = async () => {
      const response = await Axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setRobots(response.data);
    };
    getRobots();
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredRobots = robot.filter((eachRobot) => {
    return eachRobot.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="tc pa 2">
      <h1 className="f1">RoboFriends</h1>
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={handleChange}
      />
      <Scroll>
        <CardList robot={filteredRobots} />
      </Scroll>
    </div>
  );
}

export default App;
