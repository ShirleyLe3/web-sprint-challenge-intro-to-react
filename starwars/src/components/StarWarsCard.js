import React from 'react';
import axios from 'axios';
import StarWarsFilms from './StarWarsFilm';
import styled from 'styled-components';



const CardContainer = styled.div
        `background-color: coral;
        border: 1px solid white;
        width: 600px;
        height: 60px;
        border-radius: 10px;
        margin: 10px;`



function StarWarsCard(props) {
    const name = props.dataSets.name
    const gender = props.dataSets.gender
    const birthYear = props.dataSets.birth_year
    const films = props.dataSets.films
    
    
    let movie = []
    films.map(items => {
        
        return(
            axios.get(`${items}`)
            .then(res => {
                console.log(res.data.title)
                movie.push(res.data.title)
            })
            .catch(error => {
                console.log("Error", error)
            })
            )
        })
            return(
                <div>
                    <StarWarsFilms film={movie} />
                    <CardContainer>
                        <h2>{name}</h2>
                        <h6>{birthYear}</h6>
                    </CardContainer>    
                </div>  
    )
}


// create div with details, set height: 0  visibility:hidden,  button height:(300px),  visibility: visible   transition(css) height   duration (in styled-components), toggled button to change back,      

export default StarWarsCard;