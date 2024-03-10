'use client';

import type { Snippet } from '@prisma/client';
import { Editor } from '@monaco-editor/react';

type SnippetEditFormProps = {
  snippet: Snippet;
};

function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  return (
    <div>
      <Editor
        height={'40vh'}
        theme='vs-dark'
        language='javascript'
        defaultValue={snippet.code}
        options={{ minimap: { enabled: false } }}
      />
    </div>
  );
}

export default SnippetEditForm;
