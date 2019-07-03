import React from 'react';
import ReactDOM from 'react-dom';
import Tweet from './Tweet';
import './index.css';

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
