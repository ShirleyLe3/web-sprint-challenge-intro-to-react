// Write your Character component here
import React from 'react';
import axios from 'axios';
import StarWarsFilms from './StarWarsFilm';
import styled from 'styled-components';



    
    let Character = []
    movie.map(items => {
        
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
                        <p>Gender: {gender}</p>
                        <p>Birth Year: {birthYear}</p>
                        <p>Eye Color: {props.dataSets.eye_color}</p>
                        <p>Hair Color: {props.dataSets.hair_color}</p>>
                        <p>Skin Color: {props.dataSets.skin_color}</p>>
                    </CardContainer>
                </div>  
    )
}


export default Character;