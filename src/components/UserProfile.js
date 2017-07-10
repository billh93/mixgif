import React, {Component} from 'react';
import {
    Grid,
    Segment,
    Container,
    Header,
    Image,
    Icon,
    List
} from 'semantic-ui-react'
import MySelf from 'images/me.jpg';
import {Images} from 'components/Home';
import 'containers/App.css';

export default class UserProfileContainer extends Component {
    render() {
        return (
            <Container fluid>
                <Grid centered>
                    <UserInfo/>
                    <UserGifs/>
                </Grid>
            </Container>
        );
    }
}

class UserInfo extends Component {
    render() {
        return (
            <Grid.Column mobile={14} tablet={13} computer={4} largeScreen={6}>
                <Segment textAlign='center'>
                    <Image centered src={MySelf} size='medium' shape='circular'/>
                    <Header as='h1' icon textAlign='center'>
                        <Header.Content>
                            Bill Hinostroza
                        </Header.Content>
                    </Header>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <List horizontal>
                        <List.Item>
                            <Icon link="http://fb.com/djhiphop23" name="facebook" size="huge"/>
                        </List.Item>
                        <List.Item>
                            <Icon link="#" name="instagram" size="huge"/>
                        </List.Item>
                        <List.Item>
                            <Icon link="#" name="twitter square" size="huge"/>
                        </List.Item>
                        <List.Item>
                            <Icon link="#" name="reddit square" size="huge"/>
                        </List.Item>
                    </List>
                </Segment>
            </Grid.Column>
        );
    }
}

class UserGifs extends Component {
    render() {
        return (
            <Grid.Column mobile={14} tablet={15} computer={11} largeScreen={9}>
                <Segment padded="very" textAlign="center">
                    <Header size='huge'>My Gifs</Header>
                    <Grid.Row>
                        <Image.Group size='medium'>
                            <Images/>
                            <Images/>
                            <Images/>
                            <Images/>
                        </Image.Group>
                    </Grid.Row>
                </Segment>
            </Grid.Column>
        );
    }
}
