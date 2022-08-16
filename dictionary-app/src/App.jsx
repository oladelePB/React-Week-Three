import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { dictionaryAPi } from "./utilities/utilities";
import Header from "./components/Header/Header";
import { Container, CircularProgress } from "@mui/material";
import Definition from "./components/Definition/Definition";

function App() {
  const [meaning, setMeaning] = useState([]);
  const [word, setWord] = useState("");

  useEffect(() => {
    async function fecthData() {
      if (word !== "") {
        const result = await dictionaryAPi("en", word);
        if (result) {
          setMeaning([...result]);
        }
      }
    }
    fecthData();
  }, [word]);

  return (
    <div
      style={{ height: "100vh", backgroundColor: "#282c34", color: "white" }}
    >
      <Container
        maxWidth="md"
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <Header word={word} setWord={setWord} />
        {/* {meaning && meaning.length === 0 ? (
          <CircularProgress color="secondary" />
        ) : (
          <Definition word={word} meaning={meaning} />
        )} */}
        <Definition word={word} meaning={meaning}/>
      </Container>
    </div>
  );
}

export default App;
