'use client';

import Link from 'next/link';
import {
  NavbarItem,
  Button,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@nextui-org/react';

import * as actions from '@/actions';
import { useSession } from 'next-auth/react';

function HeaderAuth() {
  const session = useSession();

  let authContent: React.ReactNode;

  if (session?.data?.user) {
    authContent = (
      <Popover placement='left'>
        <PopoverTrigger>
          <Avatar src={session.data.user.image || ''} />
        </PopoverTrigger>
        <PopoverContent>
          <div className='p-4'>
            <form action={actions.signOut}>
              <Button type='submit' color='secondary' variant='bordered'>
                Sign Out
              </Button>
            </form>
          </div>
        </PopoverContent>
      </Popover>
    );
  } else {
    authContent = (
      <>
        <NavbarItem>
          <form action={actions.signIn}>
            <Button type='submit' color='secondary' variant='bordered'>
              Sign In
            </Button>
          </form>
        </NavbarItem>

        <NavbarItem>
          <form action={actions.signOut}>
            <Button type='submit' color='primary' variant='flat'>
              Sign Out
            </Button>
          </form>
        </NavbarItem>
      </>
    );
  }

  return authContent;
}

export default HeaderAuth;
