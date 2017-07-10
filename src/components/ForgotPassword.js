import React, {Component} from 'react';
import {
    Container,
    Message,
    Form,
    Button,
    Grid,
    Icon
} from 'semantic-ui-react';

export default class ForgotPassword extends Component {
    render() {
        return (
            <Container fluid>
                <Grid centered>
                    <Grid.Column mobile={14} tablet={13} computer={8} largeScreen={6}>
                        <Message attached header='Recover your password'/>
                        <Form className='attached fluid segment'>
                            <Form.Input label='Email Address' placeholder='Email Address' type='text'/>
                            <Button color='blue'>Recover</Button>
                        </Form>
                    </Grid.Column>
                </Grid>
            </Container>
        );
    }
}
