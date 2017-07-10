import React, {Component} from 'react';
import {Button, Dropdown, Menu, Input} from 'semantic-ui-react';

export default class NavBar extends Component {
    state = {
        activeItem: 'MixGif'
    }

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state

        return (
            <Menu inverted stackable size='large'>
                <Dropdown item text='MixGif' name="MixGif" active={activeItem === 'MixGif'} onClick={this.handleItemClick}>
                    <Dropdown.Menu>
                        <Dropdown.Item>About</Dropdown.Item>
                        <Dropdown.Item>Blog</Dropdown.Item>
                        <Dropdown.Item>Advertise</Dropdown.Item>
                        <Dropdown.Item>Privacy Policy</Dropdown.Item>
                        <Dropdown.Item>Terms Of Service</Dropdown.Item>
                        <Dropdown.Item>Contact Us</Dropdown.Item>
                        <Dropdown.Item>
                            <a target="_blank" rel="noopener noreferrer" href="http://fb.com/djhiphop23"><Button circular color='facebook' icon='facebook' /></a>
                            <a target="_blank" rel="noopener noreferrer" href="http://twitter.com/djhiphop23"><Button circular color='twitter' icon='twitter' /></a>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown item text='Categories' name="Categories" active={activeItem === 'Categories'} onClick={this.handleItemClick}>
                    <Dropdown.Menu>
                        <Dropdown.Item>About</Dropdown.Item>
                        <Dropdown.Item>Advertise</Dropdown.Item>
                        <Dropdown.Item>Contact Us</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Input className='icon' icon='search' placeholder='Search...'/>
                    </Menu.Item>
                </Menu.Menu>
                <Dropdown item text='Bill'>
                    <Dropdown.Menu>
                        <Dropdown.Item>Profile</Dropdown.Item>
                        <Dropdown.Item>Settings</Dropdown.Item>
                        <Dropdown.Item>Log Out</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Menu.Item>
                    <Button.Group>
                        <Button color="blue">Sign Up</Button>
                        <Button color="green">Log In</Button>
                    </Button.Group>
                </Menu.Item>
            </Menu>
        )
    }
}
