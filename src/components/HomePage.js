import React, {Component} from 'react';
import {Container, Grid, Image} from 'semantic-ui-react';

const Images = () => (
  <Image
    src='http://via.placeholder.com/250x250'
    as='a'
    size='medium'
    href='#'
  />
)

export default class HomePage extends Component {
    render() {
        return (
            <div>
            <Container fluid>
                <Grid centered>
                    <Grid.Row column={5}>
                        <Image.Group size='medium'>
                          <Images />
                          <Images />
                          <Images />
                          <Images />
                        </Image.Group>
                    </Grid.Row>
                </Grid>
            </Container>
            </div>
        );
    }
}
