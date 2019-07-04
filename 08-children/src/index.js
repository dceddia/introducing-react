import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const IconButton = ({ children }) => (
  <button>
    <i className="fa fa-cloud" /> {children}
  </button>
);

const TextOnlyAlert = ({ children }) => (
  <div className="alert">
    <i className="fa fa-exclamation-triangle" />
    {children}
  </div>
);

const Alert = ({ title, children }) => (
  <div className="alert">
    <i className="fa fa-exclamation-triangle" />
    <h3>{title}</h3>
    {children}
  </div>
);

const App = () => (
  <>
    <IconButton>yay</IconButton>
    <Alert
      title={
        <>
          Very <em>Important</em> Alert
        </>
      }
    >
      Sky is falling!
    </Alert>
  </>
);

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
