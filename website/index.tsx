import App from './App';
import { createRoot } from 'react-dom/client';
import { createElement } from 'react';
import { setup } from 'goober';

setup(createElement);

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);