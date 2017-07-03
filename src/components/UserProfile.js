import React, {Component} from 'react';
import {Grid, Segment, Container, Header, Image} from 'semantic-ui-react'
import MySelf from 'images/me.jpg';

class UserHeaderContainer extends Component {
    render() {
        return (
            <Container fluid>
                <Grid centered>
                    <Grid.Column mobile={12} tablet={12} computer={12}>
                        <Segment padded='very'>
                            <UserHeader />
                        </Segment>
                    </Grid.Column>
                </Grid>
            </Container>
        );
    }
}

class UserHeader extends Component {
    render() {
        return (
            <div>
                <Image centered src={MySelf} size='medium' shape='circular' />
                <Header as='h1' icon textAlign='center'>
                    <Header.Content>
                        Bill Hinostroza
                    </Header.Content>
                </Header>
            </div>
        );
    }
}

export default class UserProfile extends Component {
    render() {
        return (<UserHeaderContainer/>);
    }
}
