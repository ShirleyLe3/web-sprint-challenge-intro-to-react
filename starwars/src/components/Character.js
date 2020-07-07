// Write your Character component here
import React from 'react';
import axios from 'axios';

import styled from 'styled-components';
import "./Character.css";
import StarWarsFilms from './StarWarsFilm';

const Character = props => {
    return (
  
                <div>
                    <StarWarsFilms film={movie} />
                    <CardContainer>
                        <h2>{props.character.name}</h2>
                        <h6>{props.character.birth_year}</h6>                                                                                  
                    </CardContainer>
                </div>  
    )}

export default Character;