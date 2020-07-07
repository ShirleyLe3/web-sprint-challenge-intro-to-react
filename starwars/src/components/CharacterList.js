import React from "react";
import Character from "./Character";

const CharacterList = props => {
    return (
        <div className="container">
            {props.characters.map((character, i) => {
                return <Character character={character} key={i} />            
                })}
        </div>
    );
};

export default CharacterList;