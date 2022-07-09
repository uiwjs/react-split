import MarkdownPreview from '@uiw/react-markdown-preview';
import styles from './index.module.less';
import data from "../../../README.md"
import { useEffect, useRef } from "react"
import CodeLayout from 'react-code-preview-layout';
import { getMetaId, isMeta, getURLParameters } from 'markdown-react-code-preview-loader';
import { CodeComponent, ReactMarkdownNames } from 'react-markdown/lib/ast-to-react';
import { getToolbarExtra } from "./Code"
const CodePreview: CodeComponent | ReactMarkdownNames = ({ inline, node, ...props }) => {
  const $dom = useRef<HTMLDivElement>(null);
  const { 'data-meta': meta, ...rest } = props as any;

  useEffect(() => {
    if ($dom.current) {
      const parentElement = $dom.current.parentElement;
      if (parentElement && parentElement.parentElement) {
        parentElement.parentElement.replaceChild($dom.current, parentElement);
      }
    }
  }, [$dom]);

  if (inline || !isMeta(meta)) {
    return <code {...props} />;
  }

  const line = node.position?.start.line;
  const metaId = getMetaId(meta) || String(line);
  const Child = data.components[`${metaId}`];
  if (metaId && typeof Child === 'function') {
    const code = data.data[metaId].value || '';
    const param = getURLParameters(meta);
    return (
      <CodeLayout
        ref={$dom}
        toolbarExtra={getToolbarExtra(code, param.codePen === "true", param.codeSandbox === "true")}
        toolbar={param.title || 'Example'} background={"transparent"} code={<pre {...rest} />} text={code}>
        <Child />
      </CodeLayout>
    );
  }
  return <code {...rest} />;
};

export default function Markdown() {
  return (
    <MarkdownPreview
      style={{ padding: '20px 26px' }}
      source={data.source}
      className={styles.markdown}
      components={{
        code: CodePreview
      }}
    />
  );
}
