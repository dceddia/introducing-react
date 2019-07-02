import React from 'react';
import ReactDOM from 'react-dom';

function HelloWorld() {
  const name = 'Dave';

  return React.createElement(
    'div',
    {},
    React.createElement('h1', {}, 'This is a Hello'),
    'hello ',
    React.createElement('strong', {}, name)
  );
}

ReactDOM.render(
  React.createElement(HelloWorld),
  document.querySelector('#root')
);
