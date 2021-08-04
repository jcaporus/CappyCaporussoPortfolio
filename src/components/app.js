import React, { Component } from 'react';
import moment from 'moment';

import PortfolioContainer from "./Portfolio/portfolio-container";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Cappy Caporusso Portfolio</h1>
        <div>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
        <PortfolioContainer />
      </div>
    );
  }
}
