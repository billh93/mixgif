import React, {Component} from 'react';
import {
    Container,
    Message,
    Form,
    Button,
    Grid,
    Image
} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import MySelf from 'images/me.jpg';

export default class Settings extends Component {
    state = {}

    handleChange = (e, {value}) => this.setState({value})
    render() {
        const {value} = this.state
        return (
            <Container fluid>
                <Grid centered>
                    <Grid.Column mobile={14} tablet={13} computer={8} largeScreen={6}>
                        <Message attached header='Settings'/>
                        <Form className='attached fluid segment'>
                            <Image centered src={MySelf} size='small' shape='circular'/>
                            <Form.Input label="Upload Avatar" type='file'/>
                            <Form.Input label='Email Address' placeholder='Email Address' type='text'/>
                            <Form.Input label='Username' placeholder='Username' type='text'/>
                            <Form.Input label='Your Website' placeholder='http://example.com' type='text'/>
                            <Form.TextArea label="About Me" placeholder='Tell Us About Yourself'/>
                            <Form.Group inline>
                                <label>Gender</label>
                                <Form.Radio label='Male' value='m' checked={value === 'm'} onChange={this.handleChange}/>
                                <Form.Radio label='Female' value='f' checked={value === 'f'} onChange={this.handleChange}/>
                            </Form.Group>
                            <Button as={Link} to="/change-password" content="Change Password"/>
                            <br/>
                            <br/>
                            <Form.Group grouped>
                                <h3>Social Networks</h3>
                                <Form.Input label='Facebook' placeholder='https://fb.com/example' type='text'/>
                                <Form.Input label='Twitter' placeholder='Twitter Username' type='text'/>
                                <Form.Input label='Instagram' placeholder='Instagram Username' type='text'/>
                                <Form.Input label='Reddit' placeholder='Reddit Username' type='text'/>
                            </Form.Group>
                            <Button color='blue'>Save</Button>
                        </Form>
                    </Grid.Column>
                </Grid>
            </Container>
        );
    }
}
