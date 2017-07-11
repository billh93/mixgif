import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// App Components
import NavBar from 'components/NavBar';
import Home from 'components/Home';
import Categories from 'components/Categories';
import CreateGif from 'components/CreateGif';
import Gif from 'components/Gif';
import ChangePassword from 'components/ChangePassword';
import ForgotPassword from 'components/ForgotPassword';
import LogIn from 'components/LogIn';
import SignUp from 'components/SignUp';
import Settings from 'components/Settings';
import UserProfile from 'components/UserProfile';
import Category from 'components/Category';
import Advertise from 'components/Advertise';
import Privacy from 'components/Privacy';
import Terms from 'components/Terms';
import About from 'components/About';
import NotFound from 'components/NotFound';


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <NavBar/>
                    <Switch>
                        <Route exact path="/" render={() => <Home/>}/>
                        <Route exact path="/categories" render={() => <Categories/>}/>
                        <Route path="/category/:category" render={(props) => <Category {...props} />}/>
                        <Route exact path="/change-password" render={() => <ChangePassword/>}/>
                        <Route exact path="/forgot-password" render={() => <ForgotPassword/>}/>
                        <Route exact path="/create" render={() => <CreateGif/>}/>
                        <Route exact path="/gif/:id" render={(props) => <Gif {...props} />}/>
                        <Route exact path="/login" render={() => <LogIn/>}/>
                        <Route exact path="/signup" render={() => <SignUp/>}/>
                        <Route exact path="/user/:username" render={(props) => <UserProfile {...props} />}/>
                        <Route exact path="/settings" render={() => <Settings/>}/>
                        <Route exact path="/about" render={() => <About/>}/>
                        <Route exact path='/blog' component={() => window.location = 'https://mixgif.wordpress.com'}/>
                        <Route exact path="/advertise" render={() => <Advertise/>}/>
                        <Route exact path="/privacy" render={() => <Privacy/>}/>
                        <Route exact path="/terms" render={() => <Terms/>}/>
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
