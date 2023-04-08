import React, { Component } from 'react';
import logo from '.././logo.svg';
import Typef from ".././components/typef";
import '.././App.css';


class Home extends Component {

  componentDidMount(){
    document.title = "Telepath"
  }

  render() {
    return (

      <div className="App">
        <header className="App-header" style={{ height: '1px' }}>
        <Typef />
        </header>
      </div>

    );
  }
}

export default Home;
