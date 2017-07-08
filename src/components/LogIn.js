import React, {Component} from 'react';
import {Container, Message, Form, Button, Grid, Icon} from 'semantic-ui-react';

export default class LogInContainer extends Component {
    render() {
        return(
            <Container fluid>
                <Grid centered>
                    <LogIn/>
                </Grid>
            </Container>
        );
    }
}

class LogIn extends Component {
    render() {
        return (
            <Grid.Column mobile={14} tablet={13} computer={8} largeScreen={6}>
                <Message
                  attached
                  header='Welcome to our site!'
                  content='Fill out the form below to log in'
                />
                <Form className='attached fluid segment'>
                  <Form.Input label='Email Address' placeholder='Email Address' type='text' />
                  <Form.Input label='Password' type='password' />
                  <Button color='blue'>Log In</Button>
                </Form>
                <Message attached='bottom' warning>
                  <Icon name='help' />
                  Forgot Your Password ?&nbsp;<a href='#'>Recover here</a>
                </Message>
            </Grid.Column>
        );
    }
}
