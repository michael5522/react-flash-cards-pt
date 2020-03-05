import React from 'react';

class ReviewCards extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isQuestion: true,
    }
    this.nextCard = this.nextCard.bind(this);
    this.lastCard = this.lastCard.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
  }

  componentDidMount(){
    this.props.setActiveCardToReviewCards(0);
  }

  nextCard(){
    let curIndex = this.props.activeCardToReviewCards.id;
    if(curIndex === this.props.cardsArray.length - 1) {
      curIndex = 0;
    }
    else {
      curIndex++;
    }
    this.props.setActiveCardToReviewCards(curIndex);

    // const insideIndex = this.props.cardsArray.findIndex((card)=>{
    //   return card.id == currentCard.id
    // });
    // console.log("current card",currentCard, "inside index",insideIndex);
    // console.log(currentCard.question);
    // console.log(currentCard.answer);
    }

    lastCard(){
      let curIndex = this.props.activeCardToReviewCards.id;
      if(curIndex == 0){
        curIndex = this.props.cardsArray.length - 1;
      }
      else {
        curIndex--;
      }
      this.props.setActiveCardToReviewCards(curIndex);

    }

    changeStatus(){
      this.setState({
        isQuestion: !this.state.isQuestion
      });
      console.log("currentStatus",this.state.isQuestion);
    }

    render(){
      // const activeCard = this.props.activeCardToReviewCards;
      // if(activeCard) {
      //   console.log("active card--------",activeCard);
      // }
      // // console.log('Active Card in Review Cards:', this.props.activeCardToReviewCards);
      // return (
      //   <div className="container">
      //     <h1 className="text-center my-4">Review Cards</h1>
      //     <h2 className="text-center my-4" onClick={this.changeStatus}>Question: {activeCard ? activeCard.question : ''}</h2>
      //     <h2 className="text-center my-4" onClick={this.changeStatus}>Answer: {activeCard ? activeCard.answer : ''}</h2>
      //     <button onClick={this.nextCard}>next card</button>
      //     <button onClick={this.lastCard}>prevous card</button>
      //   </div>

      // );


      const activeCard = this.props.activeCardToReviewCards;
      //  if(activeCard) {
        console.log("active card--------",activeCard);
       if(this.state.isQuestion){
         return (
           <div className="container ">
             <h1 className="text-center my-4">Review Cards</h1>
              <div className="bg-dark row">
               <button className="d-inline col-sm-1" onClick={this.lastCard}> Last </button>
               <h2 className=" d-inline text-center my-4 text-white col-sm-10" onClick={this.changeStatus}>Question: {activeCard ? activeCard.question : ''}</h2>
               <button className="d-inline col-sm-1" onClick={this.nextCard}> Next </button>

              </div>
           </div>

         );

      }else{
        return (
          <div className="container">
            <h1 className="text-center my-4">Review Cards</h1>
            <div className="bg-dark row">
              <button className="d-inline col-sm-1" onClick={this.lastCard}> Last </button>
              <h2 className="d-inline text-center my-4 text-white col-sm-10" onClick={this.changeStatus}>Answer: {activeCard ? activeCard.answer : ''}</h2>
              <button className="d-inline col-sm-1" onClick={this.nextCard}> Next </button>
            </div>
          </div>

        );
      }
    }


}

export default ReviewCards;
