import React from 'react';
import styles from './IndexPage.css';
import { Router, Route, hashHistory, Link } from 'react-router';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className='header' >
        <header className='header_title'>
          <h1>Yay! Welcome to <strong>ant design!</strong></h1>
        </header>
        <div className='practiceItem'>
          <ul>
              <li><Link to="/button">Buttons</Link></li>
              <li><Link to="/icon">Icons</Link></li>
              <li><Link to="/grid">Grids</Link></li>
              <li><Link to="/layout">Layouts</Link></li>
              <li><Link to="/navigation">Navigations</Link></li>
          </ul>
          </div>
      </div>
    )
  }
}

