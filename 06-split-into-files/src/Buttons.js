import React from 'react';

const ReplyButton = () => (
  <i className="fa fa-reply reply-button" />
);

function getRetweetCount(count) {
  if (count > 0) {
    return (
      <span className="retweet-count">{count}</span>
    );
  } else {
    return null;
  }
}

const RetweetButton = ({ count }) => (
  <span className="retweet-button">
    <i className="fa fa-retweet" />
    {getRetweetCount(count)}
  </span>
);

const LikeButton = ({ count }) => (
  <span className="like-button">
    <i className="fa fa-heart" />
    {count > 0 && (
      <span className="like-count">{count}</span>
    )}
  </span>
);

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button" />
);

export {
  ReplyButton,
  RetweetButton,
  LikeButton,
  MoreOptionsButton
};
