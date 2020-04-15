import { useRef, useEffect, useState } from 'react';
import { Menu, Button } from 'uiw';
import Markdown from './components/Markdown';
import Split from '../'; 

export default class Page extends Markdown {
  dependencies = { Split, Menu, Button, useRef, useEffect, useState };
  getMdStr = () => import('../README.md');
}
