import React from 'react';
import ListCard from './list-card';


class ViewCards extends React.Component{
  render(){
    const renderCard = this.props.GiveCardArrayToViewCard.map((card,index ) => {
      return <ListCard key={index} question={card.question} answer={card.answer} />
    });
    return(
      <div className="container">
        <h1>My Cards</h1>
        <div className="row row-cols-1 row-cols-md-3">

        {renderCard}




      </div>
    </div>
    )
  }
}

export default ViewCards;
