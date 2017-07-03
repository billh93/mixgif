import React, {Component} from 'react';
import {Container, Grid, Image, Button, Dimmer, Header} from 'semantic-ui-react';

class Images extends Component {
  state = {}

  handleShow = () => this.setState({ active: true })
  handleHide = () => this.setState({ active: false })

  render() {
    const { active } = this.state
    const content = (
      <div>
        <Header as='h2' inverted>Title</Header>

        <Button primary>Add</Button>
        <Button>View</Button>
      </div>
    )

    return (
      <Dimmer.Dimmable
        as={Image}
        dimmed={active}
        dimmer={{ active, content }}
        onMouseEnter={this.handleShow}
        onMouseLeave={this.handleHide}
        size='medium'
        src='http://via.placeholder.com/250x250'
      />
    )
  }
}

export default class HomePage extends Component {
    render() {
        return (
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
        );
    }
}
