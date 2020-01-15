import React, { Component } from 'react';
import characters from './characters.json';
import Card from './components/card';
import Wrapper from './components/wrapper'
import './App.css';
import Title from './components/title';
import Modal from './components/modal';



// function shuffle () {
//   characters.sort(() => {Math.random() - 0.5})
// }

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
  // Filter this.state.friends for friends with an id not equal to the id being removed
  console.log(id);
  // shuffle();
  // let hasBeenClickedCopy = [...hasBeenClicked];
  if (this.state.idArr.includes(id)) {
    // write "game over" code
    // filter = (id) => 
    // id === this.state.characters.id
    alert(`Game over! You already chose ${this.state.characters.find(character => character.id === id).name}`)
    // $('#myModal').modal('show');
    // this.state.gameOver = true;
    // let gameOver = this.state.gameOver;
    let gameOver = true;

    // this.state.score = 0;
    // let score = this.state.score;

    let score = 0;
    // this.state.idArr = [];
    // const idArr = this.state.idArr;
    const idArr = [];

    // this.shuffleImages();
    this.setState({ score, idArr, gameOver })
    // console.log("if statement ", score)
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
  // this.setState(this.state.hasBeenClicked.push(id));
  // const friends = this.state.friends.filter(friend => friend.id !== id);
  // Set this.state.friends equal to the new friends array
  // this.setState({ friends });
};

// let bsModal = React.createClass({
//   componentDidMount(){
//       $(this.getDOMNode()).modal('show');
//       $(this.getDOMNode()).on('hidden.bs.modal', this.props.handleHideModal);
//   }

render() {
  return (
    <div className='container'>
      <Wrapper>
        {/* {
          
          this.state.characters.filter((character) => {
            character.id === this.state.characters.id
            return <Modal ></Modal>
          })
        } */}
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
        };
          </Wrapper>
    </div>
  )
}
}


export default App;
