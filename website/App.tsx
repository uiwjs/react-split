import React from 'react';
import GitHubCorners from '@uiw/react-github-corners';
import '@uiw/reset.css';
import "@wcj/dark-mode"
import { styled } from 'goober';
import Page from './components/Markdown';

const Wrapper = styled('div')`
  dark-mode {
    position: fixed;
    left: 10px;
    top: 10px;
  }
`;

const Title = styled('h1')`
  text-align: center;
  font-size: 2em;
  font-weight: 600;
`;

const Header = styled('header')`
  background-color: #282c34;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Anchor = styled('a')`
  color: #09d3ac;
`;

const Details = styled('p')`
  max-width: 702px;
  padding: 25px 0 27px;
`;

const Content= styled('div')`
  max-width: 980px;
  margin: 0 auto;
`;

const App: React.FC = () => {
  return (
    <Wrapper>
      <dark-mode permanent></dark-mode>
      <GitHubCorners zIndex={9999} fixed href="https://github.com/uiwjs/react-split" />
      <Header>
        <Title className="title">React Split</Title>
        <Anchor className="App-link" href="https://github.com/uiwjs/react-split" target="_blank" rel="noopener noreferrer">
          Fork on Github
        </Anchor>
        <Details>
          A piece of view can be divided into areas where the width or height can be adjusted by dragging.
        </Details>
      </Header>
      <Content>
        <Page />
      </Content>
    </Wrapper>
  );
}

export default App;
