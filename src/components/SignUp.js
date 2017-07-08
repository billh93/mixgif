import React, {Component} from 'react';
import {Container, Message, Form, Button, Grid, Icon} from 'semantic-ui-react';

export default class SignUpContainer extends Component {
    render() {
        return(
            <Container fluid>
                <Grid centered>
                    <SignUp/>
                </Grid>
            </Container>
        );
    }
}

class SignUp extends Component {
    render() {
        return (
            <Grid.Column mobile={14} tablet={13} computer={8} largeScreen={6}>
                <Message
                  attached
                  header='Welcome to our site!'
                  content='Fill out the form below to sign-up for a new account'
                />
                <Form className='attached fluid segment'>
                  <Form.Input label='Email Address' placeholder='Email Address' type='text' />
                  <Form.Input label='Username' placeholder='Username' type='text' />
                  <Form.Input label='Password' type='password' />
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
