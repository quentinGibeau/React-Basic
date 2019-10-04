import React, {Component} from 'react';

import './App.css';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import Cards from './Components/Cards/Cards';
import CardsImage from './Components/Cards/CardsImage';
import Footer from './Components/Footer/Footer';

class App extends Component {

  // State du composant App
  state = {
    cards: [
      { name: 'What ?' },
    ]
  }



 /* // Fonction pour le bouton Switch Cards
  switchCards = (newName) => {
    // utilisé setState pour manipuler le state via une action
    this.setState({
      cards: [
        { name: newName },
        { name: 'Fire' },
        { name: 'Water' }
      ]
    })
  }*/

  // fonction input dans cards
  inputChange = (event) => {
      this.setState({
        cards: [
          { name: event.target.value },
        ]
      })
    }
  

  // Rendu & return
  render(){
    return (
    <div className="App">
      <Header />
      <NavBar />

      <p className="Description">Do commodo pariatur sint nisi est excepteur. Aliqua ex fugiat et eu incididunt. Et cupidatat est velit pariatur incididunt qui sint do. Elit ut laborum deserunt voluptate Lorem tempor dolore tempor adipisicing exercitation. Ipsum ea sunt Lorem ea esse. Occaecat ad proident enim culpa aute deserunt enim cillum.</p>
      
      <Cards 
          name={this.state.cards[0].name}
          changed={this.inputChange}> Enter a Fake title. 
      </Cards>
        
      <CardsImage />
      <Footer />
    </div>
    )
  };
 // return React.createElement('div', {className: 'App'} , React.createElement('h1', null, 'I\'m React App'));
}

// export de la fonction/composant creer vers index.js
export default App;
