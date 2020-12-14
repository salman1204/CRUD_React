import React from "react";
import "./Read.css";
import { UserContext } from "../UserContext/UserContext";
import { useContext } from "react";

const Read = ({id}) => {
  const [users, setUser] = useContext(UserContext);
    console.log(users);
    
  return (
    <div>
      {/* <h1>Id:{id}</h1>
      <h1>Name:{name}</h1>
      <h1>Position:{position}</h1>
      <h1>Salary:{salary}</h1> */}
    </div>
  );
};

export default Read;
