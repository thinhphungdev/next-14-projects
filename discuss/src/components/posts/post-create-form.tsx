'use client';

import { useFormState } from 'react-dom';

import {
  Input,
  Button,
  Textarea,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@nextui-org/react';

import FormButton from '../common/form-button';

import * as actions from '@/actions';

function PostCreateForm() {
  const [formState, action] = useFormState(actions.createPost, {
    errors: {},
  });

  return (
    <Popover placement='left'>
      <PopoverTrigger>
        <Button color='primary'>Create a post</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className='flex flex-col gap-4 p-4 w-80'>
            <h3 className='text-lg'>Create a post</h3>
            <Input
              name='title'
              label='Title'
              labelPlacement='outside'
              placeholder='Title'
              isInvalid={!!formState.errors.title}
              errorMessage={formState.errors.title?.join(', ')}
            />

            <Textarea
              name='content'
              label='content'
              labelPlacement='outside'
              placeholder='Content'
              isInvalid={!!formState.errors.content}
              errorMessage={formState.errors.content?.join(', ')}
            />

            {formState.errors?._form ? (
              <div className='p-2 bg-red-200 border border-red-400'>
                {formState.errors?._form?.join(', ')}
              </div>
            ) : null}

            <FormButton>Create</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}

export default PostCreateForm;
