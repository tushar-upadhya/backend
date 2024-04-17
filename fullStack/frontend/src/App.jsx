import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      // .get("https://localhost:3000/api/jokes")
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log("error:", error);
      });
  }, []);

  return (
    <>
      <h1>HomePage</h1>
      <p>Jokes : {jokes.length}</p>
      {jokes.map((joke, index) => {
        return (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
