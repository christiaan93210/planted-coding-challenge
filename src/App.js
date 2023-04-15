/* eslint-disable react/react-in-jsx-scope */
import "./App.css";
import { useState, useEffect } from "react";
import getCoordinate from "./helper/getCoordinate";
import findProjects from "./helper/findProjects";

function App() {
  const [projects, setProjects] = useState([]);
  const [location, setLocation] = useState("");
  const [alertText, setAlertText] = useState("please enter location");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      let coordinate = getCoordinate(location);
      if(coordinate === false)
      {
        setAlertText("please enter correct location")
        setProjects([]);
      }
      else
      {
        let result = findProjects(getCoordinate(location));
        setLocation("");
        if(result.length) setProjects(result);
        else setProjects([]);
      }
    }
  };

  useEffect(() => {
    if(location === "")
    {
      setAlertText("please enter location");
    }
  }, [location])

  return (
    <div className="p-5">
      <h2 className="mt-5 text-center text-[30px] font-mono">
        Planted Coding Challenge - Christiaan
      </h2>
      <div className="mt-5 rounded-2xl max-w-[605px] w-[100%] mx-auto p-[30px] shadow-md flex flex-col bg-[#131823]">
        <div className="rounded-2xl max-w-[300px] w-[100%] mx-auto flex p-3 bg-[#06070a]">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2-KnEFXk9XQDENBtqNM7KWs445vaL43ogtg&usqp=CAU" alt="searchIcon" width="30px" />
          <input
            placeholder="Search Location"
            className="ml-5 bg-[#06070a] outline-0"
            onChange={(e) => setLocation(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        {projects.length ? (
          projects.map((project, index) => (
            <div key={index} className="border border-[#202835] rounded-2xl mt-3 p-5">
              <h2 className="text-[23px]">{project.location}</h2>
              <h2 className="text-[#3e78ad]">{project.distance} km</h2>
            </div>
          ))
        ) : (
          <div className="text-center mt-5">
            <h2 className="text-[23px]">{alertText}</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
