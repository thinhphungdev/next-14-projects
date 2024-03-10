'use client';

import type { Snippet } from '@prisma/client';
import { Editor } from '@monaco-editor/react';
import { useState } from 'react';
import { editSnippet } from '@/actions';

type SnippetEditFormProps = {
  snippet: Snippet;
};

function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  const [code, setCode] = useState<string>('');

  const handleEditorChange = (value: string = '') => {
    setCode(value);
  };

  return (
    <div>
      <Editor
        height={'40vh'}
        theme='vs-dark'
        language='javascript'
        defaultValue={snippet.code}
        options={{ minimap: { enabled: false } }}
        onChange={handleEditorChange}
      />
    </div>
  );
}

export default SnippetEditForm;
