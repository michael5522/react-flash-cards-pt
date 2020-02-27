import React from 'react';


class Nav extends React.Component {
  constructor(props){
    super(props);
    this.change = this.change.bind(this);

  }

  change(e){
  this.props.setView(e.target.id);
  console.log("wrokign or not", e.target.id);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-light justify-content-end">
  <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" onClick={this.change} id="view-cards" >View Card</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={this.change} id="review-cards" >Review Card</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={this.change} id="create-card" >Create Card</a>
          </li>
        </ul>

      </nav>
    )
  }
}

export default Nav;
//change the view depending on click;
// need to run
