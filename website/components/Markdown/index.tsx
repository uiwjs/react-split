import MarkdownPreview from '@uiw/react-markdown-preview';
import { Root, Element, RootContent } from 'hast';
import CodeLayout from 'react-code-preview-layout';
import { getMetaId, isMeta, getURLParameters } from 'markdown-react-code-preview-loader';
import { styled } from 'goober';
import data from "../../../README.md"
import { getToolbarExtra } from "./Code"

const Preview = CodeLayout.Preview;
const Code = CodeLayout.Code;
const Toolbar = CodeLayout.Toolbar;

const MarkdownWrp = styled(MarkdownPreview)`
  padding: 20px 26px;
  pre[data-type='rehyp'] {
    overflow: initial;
    font-size: initial;
    line-height: initial;

    white-space: initial;
    word-spacing: initial;
    word-break: initial;
    word-wrap: initial;
  }
`;

export default function Markdown() {
  return (
    <MarkdownWrp
      style={{ padding: '20px 26px' }}
      source={data.source}
      rehypeRewrite={(
        node: Root | RootContent,
        index: number,
        parent: Root | Element,
      ) => {
        if (node.type === 'element' && parent && parent.type === 'root') {
          const menu = parent.children[1] as Element | undefined;
          let childLength = [...parent.children].filter(
            (item) => item.type !== 'raw',
          ).length;
          const lastChild = parent.children[parent.children.length - 1];
          if (lastChild?.type === 'raw') {
            childLength = parent.children.length - 2;
          }
          if (
            (index + 1 === childLength ||
              index - 1 === childLength ||
              index === childLength) &&
            menu?.properties?.class !== 'menu-toc'
          ) {
            const child = [...parent.children].map((item) => {
              if (item.type === 'element' && item.tagName === 'pre') {
                const meta = item.children[0]?.data?.meta as string;
                if (isMeta(meta)) {
                  item.tagName = 'div';
                  item.properties = {
                    ...item.properties,
                    'data-md': meta,
                    'data-meta': 'preview',
                  };
                  return { ...item };
                }
              }
              return item;
            });
            parent.children = [
              {
                type: 'element',
                tagName: 'div',
                children: child as Element[],
              },
            ];
          }
        }

      }}
      components={{
        div: ({ node, ...props }) => {
          const { 'data-meta': meta, 'data-md': metaData, ...rest } = props as any;
          const line = node.position?.start.line;
          const metaId = getMetaId(metaData) || String(line);
          const Child = data.components[metaId];
          if (meta !== 'preview' || !metaId || typeof Child !== 'function')
            return <div {...props} />;
          const code = data.data[metaId].value || '';
          const param = getURLParameters(meta);
          const extra = getToolbarExtra(code, param.codePen === "true", param.codeSandbox === "true");
          return (
            <CodeLayout disableCheckered style={{ marginBottom: 18 }}>
              <Preview>
                <Child />
              </Preview>
              <Toolbar extra={extra} text={code}>{param.title || 'Example'}</Toolbar>
              <Code style={{ padding: 0 }}>
                <pre {...rest} />
              </Code>
            </CodeLayout>
          );
        },
      }}
    />
  );
}
