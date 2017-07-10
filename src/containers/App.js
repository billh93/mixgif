import React, {Component} from 'react';
import NavBar from 'components/NavBar';
import About from 'components/About';

class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <About />
            </div>
        );
    }
}

export default App;
