# Split

[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-split.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-split)
[![Build & Deploy](https://github.com/uiwjs/react-split/actions/workflows/ci.yml/badge.svg)](https://github.com/uiwjs/react-split/actions/workflows/ci.yml)
[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-split/file/README.md)
[![npm version](https://img.shields.io/npm/v/@uiw/react-split.svg)](https://www.npmjs.com/package/@uiw/react-split)
[![Coverage Status](https://uiwjs.github.io/react-split/badges.svg)](https://uiwjs.github.io/react-split/coverage/lcov-report/)
[![Open in Gitpod](https://shields.io/badge/Open%20in-Gitpod-green?logo=Gitpod)](https://gitpod.io/#https://github.com/uiwjs/react-split)
[![Repo Dependents](https://badgen.net/github/dependents-repo/uiwjs/react-split)](https://github.com/uiwjs/react-split/network/dependents)

A piece of content can be divided into areas that can be dragged to adjust the width or height.

```jsx
import { Split } from 'uiw';
```

`@uiw/react-split` extracted from the component library `uiw` can be used alone.

```jsx
import Split from '@uiw/react-split';
```

### Basic usage

> ~~By setting the `minWidth` style of the child node, you can set the minimum drag width value. By setting the child node style `flexBasis` style, you can set the proportion width of the default split content.~~

- Fixed initial width or height, which can be calculated by setting the child node, style `width: '80%'` to 100% width.
- Drag to the minimum width, you can achieve the effect by setting the child node style `minWidth: 30`.
- By default, the style `width` is not set, and a child node style needs to be set to `flex: 1` to adapt

```jsx mdx:preview&background=#fff&codeSandbox=true&codePen=true
import React from 'react';
import Split from '@uiw/react-split';

const Demo = () => (
  <div>
    <Split style={{ height: 100, border: '1px solid #d5d5d5', borderRadius: 3 }}>
      <div style={{ width: '20%', minWidth: 30 }}>
        <iframe
          srcDoc="<div>test</div>"
          style={{ width: '100%', height: '100%' }}
          title="Code Preview"
          sandbox="allow-forms allow-modals allow-pointer-lock allow-popups allow-presentation allow-same-origin allow-scripts"
        />
      </div>
      <div style={{ width: '80%', minWidth: 100 }}>Right Pane</div>
    </Split>
    <Split style={{ height: 100, border: '1px solid #d5d5d5', borderRadius: 3 }}>
      <div style={{ minWidth: 60 }}>test</div>
      <div style={{ minWidth: 80, flex: 1 }}>Right Pane</div>
    </Split>
  </div>
);
export default Demo;
```

### Available for layout

Setting `visible={false}` disables the drag bar, which can be used for layout.

```jsx mdx:preview&background=#fff&codeSandbox=true&codePen=true
import React from 'react';
import Split from '@uiw/react-split';

const Demo = () => (
  <div>
    <Split mode="vertical" visible={false}>
      <div style={{ minHeight: 45, background: '#dcdcdc' }}>Header</div>
      <Split visible={false}>
        <div style={{ minWidth: 200, maxWidth: 200, minHeight: 120, background: '#b5b5b5' }}>Sider</div>
        <div style={{ width: '100%', background: '#ececec' }}>Content</div>
      </Split>
      <div style={{ minHeight: 45, background: '#dcdcdc' }}>Footer</div>
    </Split>
    <div style={{ height: 20 }}></div>
    <Split visible={false}>
      <div style={{ minWidth: 200, maxWidth: 200, minHeight: 85, background: '#a9a9a9' }}>Sider</div>
      <Split mode="vertical" visible={false} style={{ width: '100%' }}>
        <div style={{ minHeight: 45, background: '#dcdcdc' }}>Header</div>
        <div style={{ minHeight: 85, background: '#b5b5b5' }}>Content</div>
        <div style={{ minHeight: 45, background: '#dcdcdc' }}>Footer</div>
      </Split>
    </Split>
  </div>
);
export default Demo;
```

### multi-column split

```jsx mdx:preview&background=#fff&codeSandbox=true&codePen=true
import React from 'react';
import Split from '@uiw/react-split';

const Demo = () => (
  <Split style={{ height: 100, border: '1px solid #d5d5d5', borderRadius: 3 }}>
    <div>Left Pane</div>
    <div>Center Pane</div>
    <div>Center Pane</div>
    <div style={{ flex: 1 }}>Right Pane</div>
  </Split>
);
export default Demo;
```

### line drag

```jsx mdx:preview&background=#fff&codeSandbox=true&codePen=true
import React from 'react';
import Split from '@uiw/react-split';

const Demo = () => (
  <div>
    <Split lineBar style={{ height: 100, border: '1px solid #d5d5d5', borderRadius: 3 }}>
      <div>Left Pane</div>
      <div>Center Pane</div>
      <div>Center Pane</div>
      <div style={{ flex: 1 }}>Right Pane</div>
    </Split>
    <Split mode="vertical" lineBar style={{ height: 210, border: '1px solid #d5d5d5', borderRadius: 3, marginTop: 10 }}>
      <div style={{ height: '33.3%' }}>Left Pane</div>
      <div style={{ height: '33.3%' }}>Center Pane</div>
      <div style={{ flex: 1 }}>Right Pane</div>
    </Split>
  </div>
);
export default Demo;
```

### vertical split

```jsx mdx:preview&background=#fff&codeSandbox=true&codePen=true
import React from 'react';
import Split from '@uiw/react-split';

const Demo = () => (
  <Split mode="vertical" style={{ height: 200, border: '1px solid #d5d5d5', borderRadius: 3 }}>
    <div style={{ height: '50%' }}>Top Pane</div>
    <div style={{ height: '50%' }}>Bottom Pane</div>
  </Split>
);
export default Demo;
```

### nested use

```jsx mdx:preview&background=#fff&codeSandbox=true&codePen=true
import React from 'react';
import Split from '@uiw/react-split';

const Demo = () => (
  <Split style={{ height: 200, border: '1px solid #d5d5d5', borderRadius: 3 }}>
    <Split mode="vertical">
      <div style={{ height: '50%' }}>Top Pane</div>
      <Split style={{ height: '50%' }}>
        <div>Left Pane</div>
        <div style={{ flex: 1 }}>Right Pane</div>
      </Split>
    </Split>
    <div style={{ flex: 1 }}>Right Pane</div>
  </Split>
);
export default Demo;
```

### Drag tool not showing

The following example sets whether the drag tool is visible by setting the value of `visiable`.

```jsx mdx:preview&background=#fff&codeSandbox=true&codePen=true
import React from 'react';
import Split from '@uiw/react-split';

const Demo = () => (
  <div>
    <Split visiable={false} style={{ height: 100, border: '1px solid #d5d5d5', borderRadius: 3 }}>
      <div style={{ maxWidth: 100, backgroundColor: '#eaeaea' }}>Left Pane</div>
      <div style={{ flex: 1 }}>Right Pane</div>
    </Split>
    <Split visiable={[4, 5]} style={{ height: 100, border: '1px solid #d5d5d5', borderRadius: 3, marginTop: 10 }}>
      <div style={{ maxWidth: 50, backgroundColor: '#eaeaea' }}>Pane 1</div>
      <div style={{ maxWidth: 60 }}>Pane 2</div>
      <div>Pane 3</div>
      <div>Pane 4</div>
      <div style={{ flex: 1 }}>Pane 5</div>
    </Split>
  </div>
);
export default Demo;
```

### Disable drag and drop

Disable drag tool dragging by setting the value of `disable`.

```jsx mdx:preview&background=#fff&codeSandbox=true&codePen=true
import React from 'react';
import Split from '@uiw/react-split';

const Demo = () => (
  <div>
    <Split disable style={{ height: 100, border: '1px solid #d5d5d5', borderRadius: 3 }}>
      <div style={{ maxWidth: 100, backgroundColor: '#eaeaea' }}>Left Pane</div>
      <Split disable mode="vertical">
        <div>Top Pane</div>
        <div>Bottom Pane</div>
      </Split>
      <div style={{ flex: 1 }}>Right Pane</div>
    </Split>
    <Split disable={[4, 5]} style={{ height: 100, border: '1px solid #d5d5d5', borderRadius: 3, marginTop: 10 }}>
      <div style={{ maxWidth: 50, backgroundColor: '#eaeaea' }}>Pane 1</div>
      <div style={{ maxWidth: 60 }}>Pane 2</div>
      <div>Pane 3</div>
      <div>Pane 4</div>
      <div style={{ flex: 1 }}>Pane 5</div>
    </Split>
  </div>
);
export default Demo;
```

### drawer

Draggable left column width.

```jsx mdx:preview&background=#fff&codeSandbox=true&codePen=true
import React from 'react';
import Split from '@uiw/react-split';
import { Menu, Button } from 'uiw';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 210,
    };
  }
  onClick() {
    this.setState({
      width: this.state.width === 0 ? 210 : 0,
    });
  }
  render() {
    const styl = { lineHeight: 0 };
    if (this.state.width === 0) {
      styl.width = `0%`;
    } else {
      styl.width = this.state.width;
    }
    return (
      <>
        <div style={{ marginBottom: 10 }}>
          <Button type="primary" onClick={this.onClick.bind(this)}>
            {this.state.width === 0 ? '隐藏菜单' : '展示菜单'}
          </Button>
        </div>
        <Split lineBar visiable={this.state.width !== 0} style={{ border: '1px solid #d5d5d5', borderRadius: 3 }}>
          <div style={{ ...styl, overflow: 'hidden' }}>
            <Menu>
              <Menu.Item icon="heart-on" text="另存为" active />
              <Menu.Item icon="appstore" text="应用商城" />
              <Menu.Item icon="bar-chart" text="月统计报表导出" />
              <Menu.Item icon="setting" text="偏好设置" />
              <Menu.Divider />
              <Menu.Item icon="map" text="谷歌地图" />
            </Menu>
          </div>
          <div style={{ flex: 1, minWidth: 30 }}>Right Pane</div>
        </Split>
      </>
    );
  }
}
export default Demo;
```

### Support custom drag and drop toolbar

```jsx mdx:preview&background=#fff&codeSandbox=true&codePen=true
import React from 'react';
import Split from '@uiw/react-split';

const Demo = () => (
  <div>
    <Split
      renderBar={({ onMouseDown, ...props }) => {
        return (
          <div {...props} style={{ boxShadow: 'none', background: 'transparent' }}>
            <div onMouseDown={onMouseDown} style={{ backgroundColor: '#ff000057', boxShadow: 'none' }} />
          </div>
        );
      }}
      style={{ height: 100, border: '1px solid #d5d5d5', borderRadius: 3 }}
    >
      <div style={{ minWidth: 60 }}>test</div>
      <div style={{ minWidth: 80, flex: 1 }}>Right Pane</div>
    </Split>
  </div>
);
export default Demo;
```

## Props

```ts
export interface SplitProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onDragEnd'> {
  style?: React.CSSProperties;
  className?: string;
  prefixCls?: string;
  /**
   * Drag width/height change callback function,
   * the width or height is determined according to the mode parameter
   */
  onDragging?: (preSize: number, nextSize: number, paneNumber: number) => void;
  /** Callback function for dragging end */
  onDragEnd?: (preSize: number, nextSize: number, paneNumber: number) => void;
  /** Support custom drag and drop toolbar */
  renderBar?: (props: React.HTMLAttributes<HTMLDivElement>) => JSX.Element;
  /** Set the drag and drop toolbar as a line style. */
  lineBar?: boolean;
  /** Set the dragged toolbar, whether it is visible or not */
  visible?: boolean | number[];
  /**
   * @deprecated Use `visible` instead
   */
  visiable?: boolean | number[];
  /**
   * Set the drag and drop toolbar, disable
   */
  disable?: boolean | number[];
  /**
   * type, optional `horizontal` or `vertical`
   */
  mode?: 'horizontal' | 'vertical';
}
```

## Development

Runs the project in development mode.

```bash
# Step 1, run first, listen to the component compile and output the .js file
npm run watch
npm run build
# Step 2, development mode, listen to compile preview website instance
npm run doc
```

**production**

Builds the app for production to the build folder.

```bash
npm run released
```

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

## Contributors

As always, thanks to our amazing contributors!

<a href="https://github.com/uiwjs/react-split/graphs/contributors">
  <img src="https://uiwjs.github.io/react-split/CONTRIBUTORS.svg" />
</a>

Made with [contributors](https://github.com/jaywcjlove/github-action-contributors).

### License

Licensed under the MIT License.
