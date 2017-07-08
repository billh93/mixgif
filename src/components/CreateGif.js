import React, {Component} from 'react';
import {Container, Message, Form, Button, Grid, Icon, Dropdown} from 'semantic-ui-react';

export default class CreateGifContainer extends Component {
    render() {
        return(
            <Container fluid>
                <Grid centered>
                    <CreateGif />
                </Grid>
            </Container>
        );
    }
}

const categoryOptions = [
    {text:"Animals", value:"Animals"},
    {text:"Test", value:"Test"}
]

class CreateGif extends Component {
    render() {
        return (
            <Grid.Column mobile={14} tablet={13} computer={8} largeScreen={6}>
                <Message
                  attached
                  header='Welcome to our site!'
                  content='Fill out the form below to sign-up for a new account'
                />
                <Form className='attached fluid segment'>
                  <Form.Input label='Title' placeholder='Title' type='text' />
                  <Form.TextArea label='Description' placeholder='Please describe your gif' />
                  <Form.Dropdown placeholder='Select you Category' fluid selection options={categoryOptions} />
                  <Button color='blue'>Sign Up</Button>
                </Form>
                <Message attached='bottom' warning>
                  <Icon name='help' />
                  Already signed up?&nbsp;<a href='#'>Login here</a>&nbsp;instead.
                </Message>
            </Grid.Column>
        );
    }
}
