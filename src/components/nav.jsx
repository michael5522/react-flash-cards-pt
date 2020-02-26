import React from 'react';


class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-light justify-content-end">
  <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" href="">View Cards</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">Review Cards</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">Create Cards</a>
          </li>
        </ul>

      </nav>
    )
  }
}

export default Nav;
