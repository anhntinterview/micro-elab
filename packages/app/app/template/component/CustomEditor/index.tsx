'use client';

import * as React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import { StarterKit } from '@tiptap/starter-kit';
import useDebounce from '@app/app/util/useDebounce';
import CustomEditorMenu from './CustomEditorMenu';
import { PostBodyDataValidation } from '@app/app/template/entity/post.entity';
import { TAG_NAME } from '../../entity/tag.entity';
import Container from 'typedi';
import CRUDService from '@app/app/core/service/crud/crud.service';
import { UseMutationResult } from '@tanstack/react-query';

interface IEditorProps {
  addRecordMutate: UseMutationResult<any, unknown, PostBodyDataValidation, unknown> | undefined
}

const CustomEditor: React.FunctionComponent<IEditorProps> = ({ addRecordMutate }) => {
  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');
  const bodyData: PostBodyDataValidation = {
    title: title,
    coverImage:
      'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg',
    content: content,
    ogImage: '',
    customerId: '80d5ef8f-9df1-4894-9952-83497b865022',
    tags: [{ name: TAG_NAME.POST }],
  };

  const handlePost = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addRecordMutate!.mutate(bodyData);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const editor = useEditor({
    autofocus: true,
    extensions: [StarterKit],
    content,
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
    },
  });
  const debouncedContent = useDebounce(content, 500);
  const debouncedTitle = useDebounce(title, 500);
  React.useEffect(() => {
    if (debouncedContent === '' || debouncedTitle === '') return;
  }, [debouncedContent, debouncedTitle]);

  return (
    <>
      <div className="flex">
        {editor && <CustomEditorMenu editor={editor} />}
        <button onClick={handlePost}>Save</button>
      </div>

      <div className="prose prose-sm w-full mt-4">
        <input type="text" value={title} onChange={handleTitleChange} />
        <EditorContent editor={editor} />
      </div>
      <div className="h-4"></div>
      <span className="text-sm">
        Tip: Press{' '}
        <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg">
          Shift + A
        </kbd>{' '}
        for AI autocomplete
      </span>
    </>
  );
};

export default CustomEditor;
