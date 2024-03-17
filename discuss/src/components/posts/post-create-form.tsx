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
  return (
    <Popover placement='left'>
      <PopoverTrigger>
        <Button color='primary'>Create a post</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={actions.createPost}>
          <div className='flex flex-col gap-4 p-4 w-80'>
            <h3 className='text-lg'>Create a post</h3>
            <Input
              name='title'
              label='Title'
              labelPlacement='outside'
              placeholder='Title'
            />

            <Input
              name='content'
              label='content'
              labelPlacement='outside'
              placeholder='Content'
            />

            <FormButton>Create</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}

export default PostCreateForm;
