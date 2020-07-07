import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import StarWarsCard from './components/StarWarsCard';
import styled from 'styled-components';
// import {Button} from '@material-ui/core';
import { render } from 'react-dom';





const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [charData, setCharData] = useState([]);
  const [page, setPage] = useState(1);

  function changePage(change) {
    let newPage = page + change;
    if (newPage === 0) newPage = 1;
    setPage(newPage);
  }

  useEffect( () => {
    axios.get(`https://swapi.dev/api/people`)
    .then(res => {
      console.log("dataset", res.data.results);
      setCharData(res.data.results);
      //return res.json();
    //.then(data => {
    //  this.setState({
    //    starwarsChars:data.results,
    //    nextPage: data.next,
    //    previousPage: data.previous
    //  });
    })
    .catch(error => {
      console.log(error)
    })
  }, [page]);






  return (
    <div className="App">
      <MainContainer>
        <MainHeader><h1>Star Wars</h1></MainHeader>

        <div className="cards">
            {
              charData.map(items => {
                return (
                  <StarWarsCard dataSets = {items}/>
                )
              })
            }
        </div>   
        <button onClick={() => changePage(-1)} enabled={page <=1}> {'Prev'}</button>
        <button onClick={() => changePage(+1)} enabled={page <=1}> {'Next'}</button> 
      </MainContainer>
      
    </div>
  );
}



// styled-components

const MainContainer = styled.div
      `text-align: center;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: center;`
const MainHeader = styled.h1
      `color: #B85C3C;
      text-shadow: 12px 6px darkgrey;
      font-style: italic bold 12px/30px Georgia, serif;`



export default App;
