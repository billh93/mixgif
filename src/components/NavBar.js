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
                        <Dropdown.Item>Advertise</Dropdown.Item>
                        <Dropdown.Item>Contact Us</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Input className='icon' icon='search' placeholder='Search...'/>
                    </Menu.Item>
                </Menu.Menu>
                <Dropdown item text='Languages'>
                    <Dropdown.Menu>
                        <Dropdown.Item>English</Dropdown.Item>
                        <Dropdown.Item>Russian</Dropdown.Item>
                        <Dropdown.Item>Spanish</Dropdown.Item>
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
