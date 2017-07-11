import React, {Component} from 'react';
import {Button, Dropdown, Menu, Input} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        return (
            <Menu inverted stackable size='large'>
                <Menu.Item as={Link} to='/' name="MixGif" />
                <Dropdown item>
                    <Dropdown.Menu>
                        <Dropdown.Item as={Link} to='/about' text="About" />
                        <Dropdown.Item as={Link} to='/blog' text="Blog"/>
                        <Dropdown.Item as={Link} to='/advertise' text="Advertise"/>
                        <Dropdown.Item as={Link} to='/privacy' text="Privacy Policy"/>
                        <Dropdown.Item as={Link} to='/terms' text="Terms Of Service"/>
                        <Dropdown.Item>
                            <a target="_blank" rel="noopener noreferrer" href="http://fb.com/djhiphop23"><Button circular color='facebook' icon='facebook' /></a>
                            <a target="_blank" rel="noopener noreferrer" href="http://twitter.com/djhiphop23"><Button circular color='twitter' icon='twitter' /></a>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Menu.Item as={Link} to='/categories' name="Categories" />
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Input className='icon' icon='search' placeholder='Search...'/>
                    </Menu.Item>
                </Menu.Menu>
                <Dropdown item text='Bill'>
                    <Dropdown.Menu>
                        <Dropdown.Item as={Link} to='/user' text="Profile" />
                        <Dropdown.Item as={Link} to='/settings' text="Settings" />
                        <Dropdown.Item as={Link} to='/logout' text="Log Out" />
                    </Dropdown.Menu>
                </Dropdown>
                <Menu.Item>
                    <Button.Group>
                        <Button as={Link} to="/login" color="green" content="Log In" />
                        <Button as={Link} to="/signup" color="blue" content="Sign Up" />
                    </Button.Group>
                </Menu.Item>
            </Menu>
        )
    }
}
