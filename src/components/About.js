import React, {Component} from 'react';
import {
    Grid,
    Segment,
    Image,
    Message,
    Divider,
    Card,
    Icon
} from 'semantic-ui-react';

export default class About extends Component {
    render() {
        const style = {
            borderColor: "black",
            borderSize: "1px",
            borderStyle: "solid"
        }
        const extra = (
            <a>
                <Icon name='user'/>
                16 Friends
            </a>
        )
        return (
            <Grid centered>
                <Grid.Column mobile={14} tablet={13} computer={14} largeScreen={12}>
                    <Segment raised>
                        <Message>
                            <Message.Header>
                                About Us
                            </Message.Header>
                        </Message>
                        <Image centered src="http://via.placeholder.com/1000x250" size="huge"/>
                        <Divider />
                        <p>
                            Reddit bridges communities and individuals with ideas, the latest digital trends, and breaking news (...okay, and maybe cats). Our mission is to help people discover places where they can be their true selves, and empower our community to flourish.
                        </p>
                        <Divider/>
                        <Card.Group>
                            <Card centered image='http://via.placeholder.com/250x250' header='Elliot Baker' meta='Friend' description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.' extra={extra}/>
                            <Card centered image='http://via.placeholder.com/250x250' header='Elliot Baker' meta='Friend' description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.' extra={extra}/>
                            <Card centered image='http://via.placeholder.com/250x250' header='Elliot Baker' meta='Friend' description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.' extra={extra}/>
                        </Card.Group>
                        <Divider/>
                        <Grid>
                        <Grid.Row>
                            <Grid.Column mobile={16} tablet={8} computer={8} style={style}>
                                <Image centered src="http://via.placeholder.com/250x500" size="medium"/>
                            </Grid.Column>
                            <Grid.Column mobile={16} tablet={8} computer={8}>
                                <div className="section-content">
                                    <h2 className="section-title">At Reddit, we have a few simple values that help us stay true to our mission.</h2>

                                    <ul className="list-directions">
                                        <li>
                                            <h2>Remember the human</h2>

                                            <p>Our actions affect real people and communities, so do the right thing—even when it’s difficult.</p>
                                        </li>

                                        <li>
                                            <h2>Evolve</h2>

                                            <p>Move forward and grow together. Be optimistic about our future. Know that change is necessary for us to progress.</p>
                                        </li>

                                        <li>
                                            <h2>What would Snoo do?</h2>

                                            <p>Snoo isn’t an asshole. Snoo likes to enjoy a good time. Snoo is humble. Snoo is kind. Snoo has high integrity. Snoo delivers.</p>
                                        </li>
                                    </ul>
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                        </Grid>
                    </Segment>
                </Grid.Column>
            </Grid>
        )
    }
}
