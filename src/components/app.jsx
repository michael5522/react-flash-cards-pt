import React from 'react';
import ViewCards from './view-cards';
import ReviewCards from './review-cards';
import CreateCard from './create-card';
import Nav from './nav';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      view: "view-card",
      cards: []
    }
    this.setView = this.setView.bind(this);
    this.addCard = this.addCard.bind(this);
  }

  setView(currentView){
    this.setState ({
      view: currentView
    });
  }

  getView(){
    switch(this.state.view){
      case 'create-card':
        return <CreateCard addCardToCreateCard={this.addCard}/>;
      case 'review-cards':
        return <ReviewCards />;
      case 'view-cards':
        return <ViewCards GiveCardArrayToViewCard={this.state.cards}/>;
      default:
        return null;
    }
  }

  saveCards(){
    var stringified = JSON.stringify(this.state.cards);
    localStorage.setItem( 'flash-cards', stringified);
  }

  addCard(cardObject){
    console.log(cardObject);
    this.setState ({
      cards: [
        ...this.state.cards,
        cardObject
      ]
    })

  }

  render() {
    console.log("state of cards", this.state.cards);
    return (
      <div>
        <Nav setView={this.setView} />
        {this.getView()}
      </div>
    );
  }
}

export default App;
