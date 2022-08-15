import React from "react";
import "./Definition.css";


const Definition = ({ word, meaning }) => {
  return (
    <div className="container">
      {word === "" ? (
        <span className="subtitle">Start by typing a word in search</span>
      ) : (
        meaning.map((m) =>
          m.meanings.map((item) =>
            item.definitions.map((def, index) => (
              <div className="meaning" key={index}>
                <b>{def.definition}</b>
                <hr />
                {def.example && (
                  <span>
                    <b>Example: {def.example}</b>
                  </span>
                )}
                {def.synonyms && def.synonyms.map((syn) => `${syn}, `)}
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

export default Definition;
