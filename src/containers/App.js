import React, {Component} from 'react';
import NavBar from 'components/NavBar';
import Footer from 'components/Footer';
import HomePage from 'components/HomePage';
import UserProfile from 'components/UserProfile';

class App extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <UserProfile/>
                <Footer/>
            </div>
        );
    }
}

export default App;
