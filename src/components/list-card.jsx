import React from 'react';


function listCard(props){
  return(
    <div className="card" >
      <div className="card-body">
        <h5 className="card-title card-header">Question</h5>
        <p className="card-text">{props.question}</p>
      </div>
      <div className="card-body ">
        <h5 className="card-title card-header">Answer</h5>
        <p className="card-text">{props.answer}</p>
      </div>
    </div>
  )
}

export default listCard;
