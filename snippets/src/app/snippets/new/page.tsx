import { db } from '@/db/index';
import { redirect } from 'next/navigation';

export default function SnippetCreatePage() {
  async function createSnippet(formData: FormData) {
    // This need to be a server action
    'use server';

    // check user input and make sure the're valid
    const title = formData.get('title') as string;
    const code = formData.get('code') as string;

    // Create new record in DB
    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });

    console.log(snippet); // this log will be logged on the server side

    // redirect back to home page
    redirect('/');
  }

  return (
    <form action={createSnippet}>
      <h3 className='font-bold m-3'>Create a Snippet</h3>
      <div className='flex flex-col gap-4'>
        <div className='flex gap-4'>
          <label htmlFor='title' className='w-12'>
            Title
          </label>
          <input
            type='text'
            name='title'
            id='title'
            className='border rounded p-2 w-full'
          />
        </div>
        <div className='flex gap-4'>
          <label htmlFor='code' className='w-12'>
            Code
          </label>
          <textarea
            name='code'
            id='code'
            className='border rounded p-2 w-full'
          />
        </div>

        <button type='submit' className='rounded p-2 bg-blue-200'>
          Create snippet
        </button>
      </div>
    </form>
  );
}
