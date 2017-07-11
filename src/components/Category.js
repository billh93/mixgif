import React, {Component} from 'react';
import {Grid, Card, Header, Icon} from 'semantic-ui-react';

export default class Category extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render(props) {
        let category = this.props.match.params.category;
        return (
                <Grid centered>
                    <Grid.Column mobile={12} tablet={16} computer={14} largeScreen={14}>
                    <Header as='h2' icon textAlign='center'>
                      <Icon name='users' circular />
                      <Header.Content>
                        {category}
                      </Header.Content>
                    </Header>
                        <Card.Group>
                            <Card centered image='http://via.placeholder.com/250x250' header='Animals' meta="Animals"/>
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
