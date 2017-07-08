import React, {Component} from 'react';
import NavBar from 'components/NavBar';
import CreateGifContainer from 'components/CreateGif';

class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <CreateGifContainer />
            </div>
        );
    }
}

export default App;
