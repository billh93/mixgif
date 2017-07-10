import React, {Component} from 'react';
import {
    Container,
    Message,
    Form,
    Button,
    Grid,
    Icon
} from 'semantic-ui-react';

export default class ChangePassword extends Component {
    render() {
        return (
            <Container fluid>
                <Grid centered>
                    <Grid.Column mobile={14} tablet={13} computer={8} largeScreen={6}>
                        <Message attached header='Change Password'/>
                        <Form className='attached fluid segment'>
                            <Form.Input label='Enter Old Password' type='password'/>
                            <Form.Input label='Enter New Password' type='password'/>
                            <Form.Input label='Confirm New Password' type='password'/>
                            <Button color='blue'>Change Password</Button>
                        </Form>
                    </Grid.Column>
                </Grid>
            </Container>
        );
    }
}
