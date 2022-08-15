import React from "react";
import { TextField } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { debounceSearch } from "../../utilities/utilities";

import "./Header.css";
import { useCallback } from "react";

const Header = ({ word, setWord }) => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#fff",
      },
    },
  });

  const handleChange = (e) => {
    setWord(e.target.value);
  };

  const optimizedSearchInput = useCallback(
    debounceSearch(handleChange, 2000),
    []
  );

  return (
    <div className="header">
      <span className="title">{word ? word : "Word Hunt"}</span>
      <div className="input">
        <ThemeProvider theme={darkTheme}>
          {/* Without debounce */}
          {/* <TextField
            id="standard-basic"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            label="Search a word"
            className="search"
            variant="standard"
          /> */}

          {/* with debounce */}
          <TextField
            id="standard-basic"
            onChange={optimizedSearchInput}
            label="Search a word"
            className="search"
            variant="standard"
          />
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
