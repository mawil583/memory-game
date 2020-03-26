import React, { Component } from 'react';
import characters from './characters.json';
import Card from './components/card';
import Wrapper from './components/wrapper';
import Jumbotron from './components/jumbotron';
import './App.css';
import Title from './components/title';

class App extends Component {
  state = {
    characters,
    score: 0,
    idArr: [],
    gameOver: false
  };

  shuffleImages = () => {
    let array = [...this.state.characters]
    array.sort(() => Math.random() - 0.5);
    this.setState({ characters: array })
  }
  reset = () => {

  }

  handleClick = id => {
    console.log(id);
    if (this.state.idArr.includes(id)) {
      alert(`Game over! You already guessed ${this.state.characters.find(character => character.id === id).name}. 
      Your final score was ${this.state.score}.`)
      let gameOver = true;
      let score = 0;
      const idArr = [];
      this.setState({ score, idArr, gameOver })
    } else {
      const score = this.state.score + 1;
      const idArr = this.state.idArr.concat(id);
      this.shuffleImages();
      this.setState({ score, idArr });
      if (score >= characters.length) {
        alert("You won!")
      }
      console.log("else statement", idArr);
    }
  };


  render() {
    return (
      <div>
        <Jumbotron />
        <div className='container'>
          <Wrapper>

            <Title score={this.state.score}></Title>
            {
              this.state.characters.map((character) => {
                return <Card
                  key={character.id}
                  name={character.name}
                  id={character.id}
                  handleClick={this.handleClick}
                  image={character.image}
                  occupation={character.occupation}
                  location={character.location}
                />
              })
            }
          </Wrapper>
        </div>

      </div>
    )
  }
}


export default App;
