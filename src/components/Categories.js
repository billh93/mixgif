import React, {Component} from 'react';
import {Container, Grid, Card} from 'semantic-ui-react';
import 'containers/App.css';

export default class Categories extends Component {
    render() {
        return (
                <Grid centered>
                    <Grid.Column mobile={12} tablet={16} computer={16} largeScreen={14}>
                        <Card.Group>
                            <Card image='http://via.placeholder.com/250x250' header='Animals' meta='Animals'/>
                            <Card image='http://via.placeholder.com/250x250' header='Animals' meta='Animals'/>
                            <Card image='http://via.placeholder.com/250x250' header='Animals' meta='Animals'/>
                            <Card image='http://via.placeholder.com/250x250' header='Animals' meta='Animals'/>
                            <Card image='http://via.placeholder.com/250x250' header='Animals' meta='Animals'/>
                            <Card image='http://via.placeholder.com/250x250' header='Animals' meta='Animals'/>
                            <Card image='http://via.placeholder.com/250x250' header='Animals' meta='Animals'/>
                            <Card image='http://via.placeholder.com/250x250' header='Animals' meta='Animals'/>
                        </Card.Group>
                    </Grid.Column>
                </Grid>
        );
    }
}
