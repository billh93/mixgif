import React, {Component} from 'react';
import {Grid, Card, Icon, Header, Image} from 'semantic-ui-react';
import ReactDisqusComments from 'react-disqus-comments';
import MySelf from 'images/me.jpg';
import exampleImage from 'images/react-share-pin-example.png';
import {
  ShareButtons,
  ShareCounts,
  generateShareIcon,
} from 'react-share';

const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  PinterestShareButton,
  RedditShareButton,
} = ShareButtons;

const {
  FacebookShareCount,
  GooglePlusShareCount,
  LinkedinShareCount,
  PinterestShareCount,
  RedditShareCount,
} = ShareCounts;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');
const PinterestIcon = generateShareIcon('pinterest');
const RedditIcon = generateShareIcon('reddit');

const shareUrl = 'http://github.com';
const title = 'GitHub';

const SocialButtons = (
    <Grid centered>
        <Grid.Row>
        <Grid.Column width={2}>
            <FacebookShareButton
              url={shareUrl}
              title={title}>
              <FacebookIcon
                size={32}
                round />
            </FacebookShareButton>
            <FacebookShareCount
              url={shareUrl}>
              {count => count}
            </FacebookShareCount>
        </Grid.Column>
        <Grid.Column width={2}>
            <TwitterShareButton
              url={shareUrl}
              title={title}>
              <TwitterIcon
                size={32}
                round />
            </TwitterShareButton>
        </Grid.Column>
        <Grid.Column width={2}>
            <RedditShareButton
              url={shareUrl}
              title={title}
              windowWidth={660}
              windowHeight={460}
              c>
              <RedditIcon
                size={32}
                round />
            </RedditShareButton>

            <RedditShareCount url={shareUrl}
               />
        </Grid.Column>
        <Grid.Column width={2}>
            <LinkedinShareButton
              url={shareUrl}
              title={title}
              windowWidth={750}
              windowHeight={600}
              >
              <LinkedinIcon
                size={32}
                round />
            </LinkedinShareButton>

            <LinkedinShareCount
              url={shareUrl}
              >
              {count => count}
            </LinkedinShareCount>
        </Grid.Column>
        <Grid.Column width={2}>
            <PinterestShareButton
              url={String(window.location)}
              media={`${String(window.location)}/${exampleImage}`}
              windowWidth={1000}
              windowHeight={730}
              >
              <PinterestIcon size={32} round />
            </PinterestShareButton>

            <PinterestShareCount url={shareUrl}
               />
        </Grid.Column>
        <Grid.Column width={2}>
            <GooglePlusShareButton
              url={shareUrl}
              >
              <GooglePlusIcon
                size={32}
                round />
            </GooglePlusShareButton>

            <GooglePlusShareCount
              url={shareUrl}
              >
              {count => count}
            </GooglePlusShareCount>
        </Grid.Column>
        <Grid.Column width={4}>
            <span>
                <Icon name='eye' />
                600 views
            </span>
        </Grid.Column>
        </Grid.Row>
    </Grid>
)

export default class Gif extends Component {
    handleNewComment(comment) {
        console.log(comment.text);
    }

    render(props) {
        let gifId = this.props.match.params.id;
        return(
            <Grid centered>
                <Grid.Column mobile={12} tablet={10} computer={7} largeScreen={7}>
                    <Image centered size="small" shape='circular' src={MySelf} />
                    <Header as='h2' icon textAlign='center'>
                      <Header.Content>
                        Bill Hinostroza
                        {gifId}
                      </Header.Content>
                    </Header>
                    <Card
                        fluid
                        image='http://via.placeholder.com/300x500'
                        header='Cat In The Hat'
                        meta='Friend'
                        description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                        extra={SocialButtons}
                      />
                      <ReactDisqusComments
                        shortname="mixgif"
                        onNewComment={this.handleNewComment}/>
                </Grid.Column>
                <Grid.Column mobile={12} tablet={14} computer={7} largeScreen={7}>
                    <Header as='h2' icon textAlign='center'>
                      <Icon name='users' circular />
                      <Header.Content>
                        Recently Added
                      </Header.Content>
                    </Header>
                    <Card.Group>
                        <Card centered image='http://via.placeholder.com/250x250' header='Animals' meta='Animals'/>
                        <Card centered image='http://via.placeholder.com/250x250' header='Animals' meta='Animals'/>
                        <Card centered image='http://via.placeholder.com/250x250' header='Animals' meta='Animals'/>
                        <Card centered image='http://via.placeholder.com/250x250' header='Animals' meta='Animals'/>
                        <Card centered image='http://via.placeholder.com/250x250' header='Animals' meta='Animals'/>
                        <Card centered image='http://via.placeholder.com/250x250' header='Animals' meta='Animals'/>
                        <Card centered image='http://via.placeholder.com/250x250' header='Animals' meta='Animals'/>
                        <Card centered image='http://via.placeholder.com/250x250' header='Animals' meta='Animals'/>
                    </Card.Group>
                </Grid.Column>
            </Grid>
        );
    }
}
