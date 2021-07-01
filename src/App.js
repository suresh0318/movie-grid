import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
  const [list, setList] = useState([]);
  useEffect(() => {
   getData()
  }, []);

  const  getData = async () =>{
const result = await axios.get("https://www.omdbapi.com/?apikey=45f0782a&s=war")
setList(result.data.Search)

  }
  return (
    <div className="card">
      {list.length &&
        list.map(({imdbID,Title,Poster}) => (
          <div className="wrapper" key={imdbID}>
            <div >
              <img src={Poster} alt="Title" />
              <h4>{Title}</h4>
            </div>
          </div>
        ))}
    </div>
  );
}

export default App;
