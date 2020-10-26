import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import React,{ Component } from 'react';

import { DISHES } from './shared/dishes';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Main />
      </div>
      </BrowserRouter>
    );
  }
}