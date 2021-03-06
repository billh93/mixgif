import React, {Component} from 'react';
import {
    Container,
    Message,
    Form,
    Button,
    Grid,
    Icon
} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

export default class LogIn extends Component {
    render() {
        return (
            <Container fluid>
                <Grid centered>
                    <Grid.Column mobile={14} tablet={13} computer={8} largeScreen={6}>
                        <Message attached header='Welcome to our site!' content='Fill out the form below to log in'/>
                        <Form className='attached fluid segment'>
                            <Form.Input label='Email Address' placeholder='Email Address' type='text'/>
                            <Form.Input label='Password' type='password'/>
                            <Button color='blue'>Log In</Button>
                        </Form>
                        <Message attached='bottom' warning>
                            <Icon name='help'/>
                            Forgot Your Password ?&nbsp;<Link to="/forgot-password">Recover here</Link>
                        </Message>
                    </Grid.Column>
                </Grid>
            </Container>
        );
    }
}
