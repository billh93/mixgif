import React, {Component} from 'react';
import NavBar from 'components/NavBar';
import Categories from 'components/Categories';

class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Categories />
            </div>
        );
    }
}

export default App;
