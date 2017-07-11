import React, {Component} from 'react';
import {
    Grid,
    Segment,
    Container,
    Header,
    Image,
    List,
    Button
} from 'semantic-ui-react'
import MySelf from 'images/me.jpg';
import {Images} from 'components/Home';
import 'containers/App.css';

export default class UserProfile extends Component {
    render(props) {
        let username = this.props.match.params.username;
        return (
            <Container fluid>
                <Grid centered>
                    <UserInfo username={username}/>
                    <UserGifs/>
                </Grid>
            </Container>
        );
    }
}

class UserInfo extends Component {
    render(props) {
        let username = this.props.username;
        return (
            <Grid.Column mobile={14} tablet={13} computer={4} largeScreen={6}>
                <Segment textAlign='center'>
                    <Image centered src={MySelf} size='medium' shape='circular'/>
                    <Header as='h1' icon textAlign='center'>
                        <Header.Content>
                            {username}
                        </Header.Content>
                    </Header>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <List horizontal>
                        <List.Item>
                            <Button onClick={() => window.location = 'https://fb.com/djhiphop23'} circular color='facebook' icon="facebook"/>
                        </List.Item>
                        <List.Item>
                            <Button onClick={() => window.location = 'https://twitter.com/djhiphop23'} circular color='twitter' icon="twitter"/>
                        </List.Item>
                        <List.Item>
                            <Button onClick={() => window.location = 'https://reddit.com/user/djhiphop23'} circular color='red' icon="reddit alien"/>
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
