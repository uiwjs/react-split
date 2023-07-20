import { createRoot } from 'react-dom/client';
import MarkdownPreviewExample from '@uiw/react-markdown-preview-example';
import data from '@uiw/react-split/README.md';

const Github = MarkdownPreviewExample.Github;

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <MarkdownPreviewExample
    source={data.source}
    components={data.components}
    data={data.data}
    title="React Split"
    description="A piece of view can be divided into areas where the width or height can be adjusted by dragging."
    version={`v${VERSION}`}
  >
    <Github href="https://github.com/uiwjs/react-split" />
  </MarkdownPreviewExample>,
);
