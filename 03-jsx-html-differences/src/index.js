import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function HelloWorld() {
  const name = 'Dave';

  return (
    <div className="dark">
      <h1 onClick={() => console.log('clicked')}>This is a Hello</h1>
      <label htmlFor="myinput">Type something:</label>
      <input id="myinput" />
      hello <strong>{name}</strong>
      <div />
      {/* this is a comment! don't use the // double-slash style */}
    </div>
  );
}

ReactDOM.render(<HelloWorld />, document.querySelector('#root'));
