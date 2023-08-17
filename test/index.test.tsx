/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import Split from '../core/src/';

test('renders react-split', () => {
  render(
    <Split mode="vertical" data-testid="split" visiable={false}>
      <div style={{ minHeight: 45, background: '#dcdcdc' }}>Header</div>
      <Split visiable={false}>
        <div style={{ minWidth: 200, maxWidth: 200, minHeight: 120, background: '#b5b5b5' }}>Sider</div>
        <div style={{ width: '100%', background: '#ececec' }}>Content</div>
      </Split>
      <div style={{ minHeight: 45, background: '#dcdcdc' }}>Footer</div>
    </Split>,
  );
  const element = screen.getByTestId('split');
  expect(element.className).toEqual('w-split w-split-vertical');
  expect(element).toBeInTheDocument();
});

test('lineBar props', () => {
  render(
    <Split mode="vertical" lineBar data-testid="split" visiable={false}>
      <div style={{ minHeight: 45, background: '#dcdcdc' }}>Header</div>
    </Split>,
  );
  const element = screen.getByTestId('split');
  expect(element.className).toEqual('w-split w-split-vertical');
  expect(element.childNodes.length).toEqual(1);
  expect(element).toBeInTheDocument();
});

test('disable props', () => {
  render(
    <Split disable data-testid="split">
      <div> Header </div>
      <div> Header </div>
    </Split>,
  );
  const element = screen.getByTestId('split');
  expect(element.className).toEqual('w-split w-split-horizontal');
  expect((element.childNodes[1] as any).className).toEqual('w-split-bar w-split-large-bar disable');
  expect(element.childNodes.length).toEqual(3);
  expect(element).toBeInTheDocument();
});
