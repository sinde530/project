import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

import { useRef } from 'react';
import './App.css';

function ToastEditor() {
  const editorRef = useRef<Editor | null>(null);
  return (
    <Editor
      placeholder="내용을 입력해주세요."
      previewStyle="vertical"
      // previewStyle={window.innerWidth > 1000 ? 'vertical' : 'tab'}
      // height="300px"
      height="80vh"
      // height="calc(100% - 10rem)"
      // hideModeSwitch
      // initialEditType="wysiwyg" // 초기 입력모드 설정(디폴트 markdown)
      initialEditType="markdown"
      initialValue=""
      // usageStatistics={false}
      toolbarItems={[
        ['heading', 'bold', 'italic', 'strike'],
        ['hr', 'quote'],
        ['ul', 'ol', 'task', 'indent', 'outdent'],
        ['table', 'image', 'link'],
        ['code', 'codeblock'],
      ]}
      // useCommandShortcut
      ref={editorRef}
      plugins={[colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]]}
    />
  );
}

export default function App() {
  return (
    <>
      <ToastEditor />
    </>
  );
}
