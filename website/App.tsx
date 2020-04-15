import React from 'react';
import GitHubCorners from '@uiw/react-github-corners';
import '@uiw/reset.css';
import './App.css';
import Page from './Page';

const App: React.FC = () => {
  return (
    <div className="App">
      <GitHubCorners href="https://github.com/uiwjs/react-split"/>
      <header className="App-header">
        <h1 className="title">React Split</h1>
        <a className="App-link" href="https://github.com/uiwjs/react-split" target="_blank" rel="noopener noreferrer">
          Fork on Github
        </a>
        <p>
          A piece of view can be divided into areas where the width or height can be adjusted by dragging.
        </p>
      </header>
      <Page />
    </div>
  );
}

export default App;
