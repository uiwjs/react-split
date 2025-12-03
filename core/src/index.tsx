import React, { useState, useRef, useEffect, useCallback } from 'react';
import './style/index.less';

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
  renderBar?: (props: React.HTMLAttributes<HTMLDivElement>) => React.ReactElement;
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

const Split: React.FC<SplitProps> = (props: SplitProps) => {
  const {
    prefixCls = 'w-split',
    visiable = true,
    mode = 'horizontal',
    className,
    children,
    visible = props.visible ?? props.visiable,
    renderBar,
    lineBar,
    disable,
    onDragEnd,
    onDragging,
    ...other
  } = props;
  const [dragging, setDragging] = useState(false);

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const paneNumberRef = useRef<number>(0);
  const startXRef = useRef<number>(0);
  const startYRef = useRef<number>(0);
  const moveRef = useRef<boolean>(false);
  const targetRef = useRef<HTMLDivElement | null>(null);

  const boxWidthRef = useRef<number>(0);
  const boxHeightRef = useRef<number>(0);
  const preWidthRef = useRef<number>(0);
  const nextWidthRef = useRef<number>(0);
  const preHeightRef = useRef<number>(0);
  const nextHeightRef = useRef<number>(0);

  const preSizeRef = useRef<number>(0);
  const nextSizeRef = useRef<number>(0);

  const removeEvent = useCallback(() => {
    window.removeEventListener('mousemove', onDraggingHandler, false);
    window.removeEventListener('mouseup', onDragEndHandler, false);
  }, []);

  const onDraggingHandler = useCallback(
    (env: Event) => {
      if (!moveRef.current) {
        return;
      }
      if (!dragging) {
        setDragging(true);
      }
      const nextTarget = targetRef.current?.nextElementSibling as HTMLDivElement;
      const prevTarget = targetRef.current?.previousElementSibling as HTMLDivElement;
      const x = (env as MouseEvent).clientX - startXRef.current;
      const y = (env as MouseEvent).clientY - startYRef.current;
      preSizeRef.current = 0;
      nextSizeRef.current = 0;
      if (mode === 'horizontal') {
        preSizeRef.current = preWidthRef.current + x > -1 ? preWidthRef.current + x : 0;
        nextSizeRef.current = nextWidthRef.current - x > -1 ? nextWidthRef.current - x : 0;
        if (preSizeRef.current === 0 || nextSizeRef.current === 0) {
          return;
        }
        preSizeRef.current =
          (preSizeRef.current / boxWidthRef.current >= 1 ? 1 : preSizeRef.current / boxWidthRef.current) * 100;
        nextSizeRef.current =
          (nextSizeRef.current / boxWidthRef.current >= 1 ? 1 : nextSizeRef.current / boxWidthRef.current) * 100;
        if (prevTarget && nextTarget) {
          prevTarget.style.width = `${preSizeRef.current}%`;
          nextTarget.style.width = `${nextSizeRef.current}%`;
        }
      }
      if (mode === 'vertical' && preHeightRef.current + y > -1 && nextHeightRef.current - y > -1) {
        preSizeRef.current = preHeightRef.current + y > -1 ? preHeightRef.current + y : 0;
        nextSizeRef.current = nextHeightRef.current - y > -1 ? nextHeightRef.current - y : 0;
        preSizeRef.current =
          (preSizeRef.current / boxHeightRef.current >= 1 ? 1 : preSizeRef.current / boxHeightRef.current) * 100;
        nextSizeRef.current =
          (nextSizeRef.current / boxHeightRef.current >= 1 ? 1 : nextSizeRef.current / boxHeightRef.current) * 100;
        if (preSizeRef.current === 0 || nextSizeRef.current === 0) {
          return;
        }
        if (prevTarget && nextTarget) {
          prevTarget.style.height = `${preSizeRef.current}%`;
          nextTarget.style.height = `${nextSizeRef.current}%`;
        }
      }
      onDragging && onDragging(preSizeRef.current, nextSizeRef.current, paneNumberRef.current);
    },
    [mode, onDragging, dragging],
  );

  const onDragEndHandler = useCallback(() => {
    moveRef.current = false;
    onDragEnd && onDragEnd(preSizeRef.current, nextSizeRef.current, paneNumberRef.current);
    removeEvent();
    setDragging(false);
  }, [onDragEnd, removeEvent]);

  const onMouseDown = useCallback(
    (paneNumber: number, env: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (!env.target || !wrapperRef.current) {
        return;
      }
      paneNumberRef.current = paneNumber;
      startXRef.current = env.clientX;
      startYRef.current = env.clientY;
      moveRef.current = true;
      targetRef.current = (env.target as HTMLDivElement).parentNode as HTMLDivElement;
      const prevTarget = targetRef.current.previousElementSibling;
      const nextTarget = targetRef.current.nextElementSibling;
      boxWidthRef.current = wrapperRef.current.clientWidth;
      boxHeightRef.current = wrapperRef.current.clientHeight;
      if (prevTarget) {
        preWidthRef.current = prevTarget.clientWidth;
        preHeightRef.current = prevTarget.clientHeight;
      }
      if (nextTarget) {
        nextWidthRef.current = nextTarget.clientWidth;
        nextHeightRef.current = nextTarget.clientHeight;
      }
      window.addEventListener('mousemove', onDraggingHandler);
      window.addEventListener('mouseup', onDragEndHandler, false);
      setDragging(true);
    },
    [onDraggingHandler, onDragEndHandler],
  );

  useEffect(() => {
    return () => {
      removeEvent();
    };
  }, [removeEvent]);

  const cls = [prefixCls, className, `${prefixCls}-${mode}`, dragging ? 'dragging' : null]
    .filter(Boolean)
    .join(' ')
    .trim();
  const child = React.Children.toArray(children);

  return (
    <div className={cls} {...other} ref={wrapperRef}>
      {React.Children.map(child, (element: any, idx: number) => {
        const props = Object.assign({}, element.props, {
          className: [`${prefixCls}-pane`, element.props.className].filter(Boolean).join(' ').trim(),
          style: { ...element.props.style },
        });
        const visibleBar = visible === true || (visible && visible.includes((idx + 1) as never)) || false;
        const barProps = {
          className: [
            `${prefixCls}-bar`,
            lineBar ? `${prefixCls}-line-bar` : null,
            !lineBar ? `${prefixCls}-large-bar` : null,
          ]
            .filter(Boolean)
            .join(' ')
            .trim(),
        };
        if (disable === true || (disable && disable.includes((idx + 1) as never))) {
          barProps.className = [barProps.className, disable ? 'disable' : null].filter(Boolean).join(' ').trim();
        }
        let BarCom = null;
        if (idx !== 0 && visibleBar && renderBar) {
          BarCom = renderBar({
            ...barProps,
            onMouseDown: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => onMouseDown(idx + 1, e),
          });
        } else if (idx !== 0 && visibleBar) {
          BarCom = React.createElement(
            'div',
            { ...barProps },
            <div onMouseDown={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => onMouseDown(idx + 1, e)} />,
          );
        }
        return (
          <React.Fragment key={idx}>
            {BarCom}
            {React.cloneElement(element, { ...props })}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Split;
