import React from 'react';
import GitHubCorners from '@uiw/react-github-corners';
import './App.css';
import MDStr from '../README.md';

const App: React.FC = () => {
  return (
    <div className="App">
      <GitHubCorners href="https://github.com/uiwjs/react-split"/>
      <header className="App-header">
        <h1>React Split</h1>
        <a className="App-link" href="https://github.com/uiwjs/react-split" target="_blank" rel="noopener noreferrer">
          Fork on Github
        </a>
        <div>
        </div>
        <pre className="info">
          {MDStr}
        </pre>
      </header>
    </div>
  );
}

export default App;
