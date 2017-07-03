import React, { Component } from 'react';
import NavBar from 'components/NavBar';
import Footer from 'components/Footer';
import HomePage from 'components/HomePage';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
            <HomePage />
        <Footer />
      </div>
    );
  }
}

export default App;
