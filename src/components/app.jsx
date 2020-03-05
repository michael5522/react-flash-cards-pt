import React from 'react';
import ViewCards from './view-cards';
import ReviewCards from './review-cards';
import CreateCard from './create-card';
import Nav from './nav';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      view: "view-cards",
      cards: [],
      activeCard: undefined
    }
    this.setView = this.setView.bind(this);
    this.addCard = this.addCard.bind(this);
    this.saveCards = this.saveCards.bind(this);
    this.setActiveCard = this.setActiveCard.bind(this);
  }

  componentDidMount(){
    this.getCards();
  }

  setView(currentView){
    this.setState ({
      view: currentView
    });
  }

  getView(){
    switch(this.state.view){
      case 'create-card':
        return <CreateCard addCardToCreateCard={this.addCard} lengthOfCards={this.state.cards.length}/>;
      case 'review-cards':
        return <ReviewCards activeCardToReviewCards={this.state.activeCard} setActiveCardToReviewCards={this.setActiveCard} cardsArray={this.state.cards}/>;
      case 'view-cards':
        return <ViewCards GiveCardArrayToViewCard={this.state.cards}/>;
      default:
        return null;
    }
  }

  getCards() {
    const cards = localStorage.getItem('flash-cards');

    if(cards) {
      this.setState({
        cards: JSON.parse(cards)
      });
    }
  }

  saveCards(){
    var stringified = JSON.stringify(this.state.cards);
    localStorage.setItem('flash-cards', stringified);
  }

  addCard(cardObject){
    // console.log("this is the card object", cardObject);
    this.setState ({
      cards: [
        ...this.state.cards,
        cardObject
      ]
    }, this.saveCards);
  }

  setActiveCard(index){
    const activeCard = this.state.cards[index];

    if(activeCard) {
      this.setState({
        activeCard: activeCard
      });
    }
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
