import React from 'react';
import ReactDOM from 'react-dom';
import Avatar from './Avatar';
import Message from './Message';
import Author from './Author';
import Time from './Time';
import {
  ReplyButton,
  RetweetButton,
  LikeButton,
  MoreOptionsButton
} from './Buttons';
import './index.css';

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar} />
      <div className="content">
        <Author author={tweet.author} />
        <Time time={tweet.timestamp} />
        <Message text={tweet.message} />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton count={tweet.retweets} />
          <LikeButton count={tweet.likes} />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}

var testTweet = {
  message: 'Something about cats.',
  gravatar: 'xyz',
  author: {
    handle: 'catperson',
    name: 'IAMA Cat Person'
  },
  likes: 2,
  retweets: 17,
  timestamp: '2019-07-01 21:24:37'
};

ReactDOM.render(
  <Tweet tweet={testTweet} />,
  document.querySelector('#root')
);

export { Tweet, testTweet }; // for testing
