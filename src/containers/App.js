import React, {Component} from 'react';
import NavBar from 'components/NavBar';
import UserProfileContainer from 'components/UserProfile';

class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <UserProfileContainer />
            </div>
        );
    }
}

export default App;
