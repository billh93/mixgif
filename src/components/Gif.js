import React, {Component} from 'react';
import {Grid, Card, Icon, Header, Image, Button} from 'semantic-ui-react';
import ReactDisqusComments from 'react-disqus-comments';
import MySelf from 'images/me.jpg';

const moreInfo = (
    <Grid centered>
        <Grid.Column width={11}>
            <Button.Group>
                <Button color="blue">Sign Up</Button>
                <Button color="green">Log In</Button>
            </Button.Group>
        </Grid.Column>
        <Grid.Column width={3}>
            <a>
                <Icon name='eye' />
                600 views
            </a>
        </Grid.Column>
    </Grid>
)

export default class GifContainer extends Component {
    handleNewComment(comment) {
        console.log(comment.text);
    }

    render() {
        return(
            <Grid centered>
                <Grid.Column mobile={12} tablet={10} computer={7} largeScreen={7}>
                    <Image centered size="small" shape='circular' src={MySelf} />
                    <Header as='h2' icon textAlign='center'>
                      <Header.Content>
                        Bill Hinostroza
                      </Header.Content>
                    </Header>
                    <Card
                        fluid
                        image='http://via.placeholder.com/300x500'
                        header='Cat In The Hat'
                        meta='Friend'
                        description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                        extra={moreInfo}
                      />
                      <ReactDisqusComments
                        shortname="mixgif"
                        onNewComment={this.handleNewComment}/>
                </Grid.Column>
                <Grid.Column mobile={12} tablet={14} computer={7} largeScreen={7}>
                    <Header as='h2' icon textAlign='center'>
                      <Icon name='users' circular />
                      <Header.Content>
                        Recently Added
                      </Header.Content>
                    </Header>
                    <Card.Group>
                        <Card centered image='http://via.placeholder.com/250x250' header='Animals' meta='Animals'/>
                        <Card centered image='http://via.placeholder.com/250x250' header='Animals' meta='Animals'/>
                        <Card centered image='http://via.placeholder.com/250x250' header='Animals' meta='Animals'/>
                        <Card centered image='http://via.placeholder.com/250x250' header='Animals' meta='Animals'/>
                        <Card centered image='http://via.placeholder.com/250x250' header='Animals' meta='Animals'/>
                        <Card centered image='http://via.placeholder.com/250x250' header='Animals' meta='Animals'/>
                        <Card centered image='http://via.placeholder.com/250x250' header='Animals' meta='Animals'/>
                        <Card centered image='http://via.placeholder.com/250x250' header='Animals' meta='Animals'/>
                    </Card.Group>
                </Grid.Column>
            </Grid>
        );
    }
}
