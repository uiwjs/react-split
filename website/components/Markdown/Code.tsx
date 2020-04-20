import React from 'react';
import CodePreview, { ICodePreviewProps } from '@uiw/react-code-preview';
import classnames from 'classnames';

const regxOpts = /^;\{\{\/\*\*(.+?)\*\*\/\}\};/g;

export interface CodeProps {
  language: string;
  value: string;
  dependencies: any;
}

export default function Code({ language, value, dependencies, ...other }: CodeProps) {
  const props: ICodePreviewProps = {};
  let onlyPreview: boolean = false;
  if(/\^(js|jsx)/.test(language) || !regxOpts.test(value)) {
    onlyPreview = true;
  }
  props.code = value.replace(regxOpts, '');
  const propsStr = value.match(regxOpts);
  if (propsStr && propsStr[0] && RegExp.$1) {
    try {
      const propsArr: ICodePreviewProps[] = JSON.parse(RegExp.$1);
      propsArr.forEach((item) => {
        Object.keys(item).forEach((keyName) => {
          if (keyName === 'codePen') {
            return;
          }
          props[keyName as keyof ICodePreviewProps] = item[keyName as keyof ICodePreviewProps];
        })
      });
    } catch (error) {}
  }
  if (onlyPreview) {
    const className = classnames({ [`language-${language}`]: language})
    return (
      <pre className={className}>
        {props.code && <code className={className}>{props.code}</code>}
      </pre>
    );
  }
  return (
    <CodePreview {...props} language={language} dependencies={dependencies} />
  );
}
