import React, {Component} from 'react';
import {Container, Message, Form, Button, Grid} from 'semantic-ui-react';

const categoryOptions = [
    {
        text: "Animals",
        value: "Animals"
    }, {
        text: "Test",
        value: "Test"
    }
]

export default class CreateGif extends Component {
    render() {
        return (
            <Container fluid>
                <Grid centered>
                    <Grid.Column mobile={14} tablet={13} computer={8} largeScreen={6}>
                        <Message attached header='Create Your Gif' content='Earn some snazzy rep with the MixGif Community!'/>
                        <Form className='attached fluid segment'>
                            <Form.Input label="Title" placeholder='Title' type='text'/>
                            <Form.TextArea label="Description" placeholder='Please Describe Your Gif'/>
                            <Form.Dropdown label="Category" placeholder='Select Your Category' fluid selection options={categoryOptions}/>
                            <Form.Input label="Upload Gif" type='file'/>
                            <Form.Input label="Upload Sound" type='file'/>
                            <Message header="Gif & Sound Requirements" list={['Gif must only be in .gif file format', 'Sound should only be 30 seconds long', 'Sound must be in .mp3 file audio format']}/>
                            <Button color="blue">Create</Button>
                        </Form>
                    </Grid.Column>
                </Grid>
            </Container>
        );
    }
}
