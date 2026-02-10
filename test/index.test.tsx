/**
 * @jest-environment jsdom
 */
import { render, screen, act } from '@testing-library/react';
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
    <Split disable visible={true} data-testid="split">
      <div> Header </div>
      <div> Header </div>
    </Split>,
  );
  const element = screen.getByTestId('split');
  expect(element.className).toEqual('w-split w-split-horizontal');

  // 使用querySelector查找分割条，而不是依赖childNodes索引
  const splitBar = element.querySelector('.w-split-bar');
  expect(splitBar?.className).toEqual('w-split-bar w-split-large-bar disable');
  expect(element.childNodes.length).toEqual(3);
  expect(element).toBeInTheDocument();
});

test('custom renderBar props', () => {
  const CustomBar = (props: any) => (
    <div data-testid="custom-bar" {...props}>
      Custom Bar
    </div>
  );

  render(
    <Split visible={true} renderBar={CustomBar} data-testid="split">
      <div>Pane 1</div>
      <div>Pane 2</div>
    </Split>,
  );

  const element = screen.getByTestId('split');
  const customBar = screen.getByTestId('custom-bar');
  expect(customBar).toBeInTheDocument();
  expect(customBar.textContent).toBe('Custom Bar');
  expect(element).toBeInTheDocument();
});

test('visible props as array', () => {
  render(
    <Split visible={[2]} data-testid="split">
      <div>Pane 1</div>
      <div>Pane 2</div>
      <div>Pane 3</div>
    </Split>,
  );

  const element = screen.getByTestId('split');
  const splitBars = element.querySelectorAll('.w-split-bar');
  // visible=[2] 意味着第2个pane后面的bar（pane2和pane3之间）应该显示
  expect(splitBars.length).toBe(1);
  expect(element).toBeInTheDocument();
});

test('disable props as array', () => {
  render(
    <Split disable={[2]} visible={[2, 3]} data-testid="split">
      <div>Pane 1</div>
      <div>Pane 2</div>
      <div>Pane 3</div>
    </Split>,
  );

  const element = screen.getByTestId('split');
  const splitBars = element.querySelectorAll('.w-split-bar');
  // visible=[2,3] 显示两个分割条，disable=[2] 禁用第2个pane后面的bar
  expect(splitBars.length).toBe(2);
  expect(splitBars[0].className).toContain('disable'); // 这是第2个pane后面的bar
  expect(splitBars[1].className).not.toContain('disable'); // 这是第3个pane后面的bar
  expect(element).toBeInTheDocument();
});

test('horizontal mode with dragging', () => {
  const onDragging = jest.fn();
  const onDragEnd = jest.fn();

  render(
    <Split mode="horizontal" visible={true} onDragging={onDragging} onDragEnd={onDragEnd} data-testid="split">
      <div style={{ width: 200 }}>Pane 1</div>
      <div style={{ width: 300 }}>Pane 2</div>
    </Split>,
  );

  const element = screen.getByTestId('split');
  expect(element.className).toContain('w-split-horizontal');

  const splitBar = element.querySelector('.w-split-bar > div');
  expect(splitBar).toBeInTheDocument();

  // 模拟鼠标按下事件来测试拖拽开始
  if (splitBar) {
    act(() => {
      splitBar.dispatchEvent(
        new MouseEvent('mousedown', {
          bubbles: true,
          clientX: 100,
          clientY: 100,
        }),
      );
    });
  }

  // 检查类名中是否包含 dragging
  expect(element.className).toContain('dragging');
});

test('vertical mode with dragging', () => {
  const onDragging = jest.fn();
  const onDragEnd = jest.fn();

  render(
    <Split mode="vertical" visible={true} onDragging={onDragging} onDragEnd={onDragEnd} data-testid="split">
      <div style={{ height: 200 }}>Pane 1</div>
      <div style={{ height: 300 }}>Pane 2</div>
    </Split>,
  );

  const element = screen.getByTestId('split');
  expect(element.className).toContain('w-split-vertical');

  const splitBar = element.querySelector('.w-split-bar > div');
  expect(splitBar).toBeInTheDocument();
});

test('lineBar style', () => {
  render(
    <Split lineBar visible={true} data-testid="split">
      <div>Pane 1</div>
      <div>Pane 2</div>
    </Split>,
  );

  const element = screen.getByTestId('split');
  const splitBar = element.querySelector('.w-split-bar');
  expect(splitBar?.className).toContain('w-split-line-bar');
  expect(splitBar?.className).not.toContain('w-split-large-bar');
});

test('large bar style (default)', () => {
  render(
    <Split visible={true} data-testid="split">
      <div>Pane 1</div>
      <div>Pane 2</div>
    </Split>,
  );

  const element = screen.getByTestId('split');
  const splitBar = element.querySelector('.w-split-bar');
  expect(splitBar?.className).toContain('w-split-large-bar');
  expect(splitBar?.className).not.toContain('w-split-line-bar');
});

test('prefixCls custom class', () => {
  render(
    <Split prefixCls="custom-split" mode="vertical" data-testid="split">
      <div>Pane 1</div>
    </Split>,
  );

  const element = screen.getByTestId('split');
  expect(element.className).toContain('custom-split');
  expect(element.className).toContain('custom-split-vertical');
});

test('invisible split bars', () => {
  render(
    <Split visible={false} data-testid="split">
      <div>Pane 1</div>
      <div>Pane 2</div>
      <div>Pane 3</div>
    </Split>,
  );

  const element = screen.getByTestId('split');
  const splitBars = element.querySelectorAll('.w-split-bar');
  expect(splitBars.length).toBe(0);
});

test('visiable prop (deprecated)', () => {
  render(
    <Split visiable={true} data-testid="split">
      <div>Pane 1</div>
      <div>Pane 2</div>
    </Split>,
  );

  const element = screen.getByTestId('split');
  const splitBar = element.querySelector('.w-split-bar');
  expect(splitBar).toBeInTheDocument();
});

test('visible prop overrides visiable', () => {
  render(
    <Split visible={true} visiable={false} data-testid="split">
      <div>Pane 1</div>
      <div>Pane 2</div>
    </Split>,
  );

  const element = screen.getByTestId('split');
  const splitBar = element.querySelector('.w-split-bar');
  expect(splitBar).toBeInTheDocument();
});

test('single child does not render split bar', () => {
  render(
    <Split visible={true} data-testid="split">
      <div>Only Child</div>
    </Split>,
  );

  const element = screen.getByTestId('split');
  const splitBars = element.querySelectorAll('.w-split-bar');
  expect(splitBars.length).toBe(0);
  expect(element.childNodes.length).toBe(1);
});

test('pane styling', () => {
  render(
    <Split visible={false} data-testid="split">
      <div className="custom-pane" data-testid="pane1">
        Pane 1
      </div>
      <div data-testid="pane2">Pane 2</div>
    </Split>,
  );

  const pane1 = screen.getByTestId('pane1');
  const pane2 = screen.getByTestId('pane2');

  expect(pane1.className).toContain('w-split-pane');
  expect(pane1.className).toContain('custom-pane');
  expect(pane2.className).toContain('w-split-pane');
});

test('drag end event cleanup', () => {
  const onDragEnd = jest.fn();

  render(
    <Split visible={true} onDragEnd={onDragEnd} data-testid="split">
      <div>Pane 1</div>
      <div>Pane 2</div>
    </Split>,
  );

  const element = screen.getByTestId('split');
  const splitBar = element.querySelector('.w-split-bar > div');

  if (splitBar) {
    // 模拟鼠标按下
    act(() => {
      splitBar.dispatchEvent(
        new MouseEvent('mousedown', {
          bubbles: true,
          clientX: 100,
          clientY: 100,
        }),
      );
    });

    expect(element.className).toContain('dragging');

    // 模拟鼠标抬起 - 这会触发 onDragEnd
    act(() => {
      window.dispatchEvent(
        new MouseEvent('mouseup', {
          bubbles: true,
          clientX: 150,
          clientY: 100,
        }),
      );
    });

    expect(onDragEnd).toHaveBeenCalled();
  }
});

test('mouse move during drag', () => {
  const onDragging = jest.fn();

  render(
    <Split visible={true} onDragging={onDragging} data-testid="split">
      <div>Pane 1</div>
      <div>Pane 2</div>
    </Split>,
  );

  const element = screen.getByTestId('split');
  const splitBar = element.querySelector('.w-split-bar > div');

  if (splitBar) {
    // 模拟鼠标按下
    act(() => {
      splitBar.dispatchEvent(
        new MouseEvent('mousedown', {
          bubbles: true,
          clientX: 100,
          clientY: 100,
        }),
      );
    });

    // 模拟鼠标移动
    act(() => {
      window.dispatchEvent(
        new MouseEvent('mousemove', {
          bubbles: true,
          clientX: 150,
          clientY: 100,
        }),
      );
    });

    // 清理
    act(() => {
      window.dispatchEvent(
        new MouseEvent('mouseup', {
          bubbles: true,
        }),
      );
    });
  }
});

test('component cleanup on unmount', () => {
  const { unmount } = render(
    <Split visible={true} data-testid="split">
      <div>Pane 1</div>
      <div>Pane 2</div>
    </Split>,
  );

  // 测试组件卸载时的清理
  expect(() => {
    unmount();
  }).not.toThrow();
});

test('multiple visible bars', () => {
  render(
    <Split visible={[2, 3]} data-testid="split">
      <div>Pane 1</div>
      <div>Pane 2</div>
      <div>Pane 3</div>
      <div>Pane 4</div>
    </Split>,
  );

  const element = screen.getByTestId('split');
  const splitBars = element.querySelectorAll('.w-split-bar');
  // visible=[2,3] 应该显示2个分割条
  expect(splitBars.length).toBe(2);
});

test('all bars disabled', () => {
  render(
    <Split disable={true} visible={true} data-testid="split">
      <div>Pane 1</div>
      <div>Pane 2</div>
      <div>Pane 3</div>
    </Split>,
  );

  const element = screen.getByTestId('split');
  const splitBars = element.querySelectorAll('.w-split-bar');

  // 所有分割条都应该被禁用
  splitBars.forEach((bar) => {
    expect(bar.className).toContain('disable');
  });
});

test('custom style props', () => {
  const customStyle = { backgroundColor: 'red' };

  render(
    <Split style={customStyle} data-testid="split">
      <div>Pane 1</div>
    </Split>,
  );

  const element = screen.getByTestId('split');
  expect(element.style.backgroundColor).toBe('red');
});

test('other HTML props passed through', () => {
  render(
    <Split id="custom-split" title="Split Component" data-testid="split">
      <div>Pane 1</div>
    </Split>,
  );

  const element = screen.getByTestId('split');
  expect(element.id).toBe('custom-split');
  expect(element.title).toBe('Split Component');
});

test('drag with invalid target should not crash', () => {
  const onDragging = jest.fn();

  render(
    <Split visible={true} onDragging={onDragging} data-testid="split">
      <div>Pane 1</div>
      <div>Pane 2</div>
    </Split>,
  );

  const element = screen.getByTestId('split');
  const splitBar = element.querySelector('.w-split-bar > div');

  if (splitBar) {
    // 模拟没有正确父节点的情况
    const mockEvent = {
      target: null,
      clientX: 100,
      clientY: 100,
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
    } as any;

    // 直接调用 onMouseDown 不应该崩溃
    expect(() => {
      splitBar.dispatchEvent(new MouseEvent('mousedown', mockEvent));
    }).not.toThrow();
  }
});

test('vertical mode boundary size calculations', () => {
  const onDragging = jest.fn();

  render(
    <Split mode="vertical" visible={true} onDragging={onDragging} data-testid="split">
      <div style={{ height: 100 }}>Pane 1</div>
      <div style={{ height: 100 }}>Pane 2</div>
    </Split>,
  );

  const element = screen.getByTestId('split');
  const splitBar = element.querySelector('.w-split-bar > div');

  if (splitBar) {
    // 开始拖拽
    act(() => {
      splitBar.dispatchEvent(
        new MouseEvent('mousedown', {
          bubbles: true,
          clientX: 100,
          clientY: 100,
        }),
      );
    });

    // 模拟极大的Y轴移动来测试边界条件
    act(() => {
      window.dispatchEvent(
        new MouseEvent('mousemove', {
          bubbles: true,
          clientX: 100,
          clientY: 1000, // 极大的Y值
        }),
      );
    });

    act(() => {
      window.dispatchEvent(
        new MouseEvent('mousemove', {
          bubbles: true,
          clientX: 100,
          clientY: -1000, // 极小的Y值
        }),
      );
    });

    // 清理
    act(() => {
      window.dispatchEvent(new MouseEvent('mouseup'));
    });
  }
});

test('horizontal mode boundary size calculations', () => {
  const onDragging = jest.fn();

  render(
    <Split mode="horizontal" visible={true} onDragging={onDragging} data-testid="split">
      <div style={{ width: 100 }}>Pane 1</div>
      <div style={{ width: 100 }}>Pane 2</div>
    </Split>,
  );

  const element = screen.getByTestId('split');
  const splitBar = element.querySelector('.w-split-bar > div');

  if (splitBar) {
    // 开始拖拽
    act(() => {
      splitBar.dispatchEvent(
        new MouseEvent('mousedown', {
          bubbles: true,
          clientX: 100,
          clientY: 100,
        }),
      );
    });

    // 模拟极大的X轴移动来测试边界条件
    act(() => {
      window.dispatchEvent(
        new MouseEvent('mousemove', {
          bubbles: true,
          clientX: 1000, // 极大的X值
          clientY: 100,
        }),
      );
    });

    act(() => {
      window.dispatchEvent(
        new MouseEvent('mousemove', {
          bubbles: true,
          clientX: -1000, // 极小的X值
          clientY: 100,
        }),
      );
    });

    // 清理
    act(() => {
      window.dispatchEvent(new MouseEvent('mouseup'));
    });
  }
});

test('dragging state false initially', () => {
  render(
    <Split visible={true} data-testid="split">
      <div>Pane 1</div>
      <div>Pane 2</div>
    </Split>,
  );

  const element = screen.getByTestId('split');
  // 初始状态不应该有 dragging class
  expect(element.className).not.toContain('dragging');
});

test('mouse move without initial mousedown should not trigger drag', () => {
  const onDragging = jest.fn();

  render(
    <Split visible={true} onDragging={onDragging} data-testid="split">
      <div>Pane 1</div>
      <div>Pane 2</div>
    </Split>,
  );

  // 直接触发 mousemove 事件，不先触发 mousedown
  act(() => {
    window.dispatchEvent(
      new MouseEvent('mousemove', {
        bubbles: true,
        clientX: 150,
        clientY: 100,
      }),
    );
  });

  // onDragging 不应该被调用，因为 moveRef.current 应该是 false
  expect(onDragging).not.toHaveBeenCalled();
});

test('mixed disable and visible array configurations', () => {
  render(
    <Split disable={[2, 3]} visible={[2, 3]} data-testid="split">
      <div>Pane 1</div>
      <div>Pane 2</div>
      <div>Pane 3</div>
      <div>Pane 4</div>
    </Split>,
  );

  const element = screen.getByTestId('split');
  const splitBars = element.querySelectorAll('.w-split-bar');

  // visible=[2,3] 应该显示2个分割条
  expect(splitBars.length).toBe(2);

  // disable=[2,3] 应该禁用这两个分割条
  expect(splitBars[0].className).toContain('disable');
  expect(splitBars[1].className).toContain('disable');
});

test('large width/height ratios trigger boundary conditions', () => {
  const onDragging = jest.fn();
  // 为了触发 >= 1 的条件，创建一个非常小的容器
  Object.defineProperty(Element.prototype, 'clientWidth', {
    configurable: true,
    value: 10,
  });
  Object.defineProperty(Element.prototype, 'clientHeight', {
    configurable: true,
    value: 10,
  });

  render(
    <Split mode="horizontal" visible={true} onDragging={onDragging} data-testid="split">
      <div style={{ width: 100 }}>Pane 1</div>
      <div style={{ width: 100 }}>Pane 2</div>
    </Split>,
  );

  const element = screen.getByTestId('split');
  const splitBar = element.querySelector('.w-split-bar > div');

  if (splitBar) {
    act(() => {
      splitBar.dispatchEvent(
        new MouseEvent('mousedown', {
          bubbles: true,
          clientX: 100,
          clientY: 100,
        }),
      );
    });

    act(() => {
      window.dispatchEvent(
        new MouseEvent('mousemove', {
          bubbles: true,
          clientX: 105, // 小移动应该触发 >= 1 的条件
          clientY: 100,
        }),
      );
    });

    act(() => {
      window.dispatchEvent(new MouseEvent('mouseup'));
    });
  }
});

test('renderBar with custom onMouseDown', () => {
  const customOnMouseDown = jest.fn();
  const CustomBar = (props: any) => (
    <div
      data-testid="custom-bar"
      {...props}
      onMouseDown={(e: any) => {
        customOnMouseDown(e);
        props.onMouseDown && props.onMouseDown(e);
      }}
    >
      Custom Bar
    </div>
  );

  render(
    <Split visible={true} renderBar={CustomBar} data-testid="split">
      <div>Pane 1</div>
      <div>Pane 2</div>
    </Split>,
  );

  const customBar = screen.getByTestId('custom-bar');

  act(() => {
    customBar.dispatchEvent(
      new MouseEvent('mousedown', {
        bubbles: true,
        clientX: 100,
        clientY: 100,
      }),
    );
  });

  expect(customOnMouseDown).toHaveBeenCalled();
});

test('component with no children', () => {
  render(<Split visible={true} data-testid="split"></Split>);

  const element = screen.getByTestId('split');
  expect(element.children.length).toBe(0);
});

test('onDragEnd callback with actual values', () => {
  const onDragEnd = jest.fn();

  // Mock 元素尺寸
  Object.defineProperty(Element.prototype, 'clientWidth', {
    configurable: true,
    value: 200,
  });
  Object.defineProperty(Element.prototype, 'clientHeight', {
    configurable: true,
    value: 200,
  });

  render(
    <Split mode="horizontal" visible={true} onDragEnd={onDragEnd} data-testid="split">
      <div>Pane 1</div>
      <div>Pane 2</div>
    </Split>,
  );

  const element = screen.getByTestId('split');
  const splitBar = element.querySelector('.w-split-bar > div');

  if (splitBar) {
    // 完整的拖拽流程
    act(() => {
      splitBar.dispatchEvent(
        new MouseEvent('mousedown', {
          bubbles: true,
          clientX: 100,
          clientY: 100,
        }),
      );
    });

    act(() => {
      window.dispatchEvent(
        new MouseEvent('mousemove', {
          bubbles: true,
          clientX: 120,
          clientY: 100,
        }),
      );
    });

    act(() => {
      window.dispatchEvent(new MouseEvent('mouseup'));
    });

    expect(onDragEnd).toHaveBeenCalledWith(expect.any(Number), expect.any(Number), expect.any(Number));
  }
});
