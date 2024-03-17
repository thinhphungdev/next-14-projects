'use client';

import { Button } from '@nextui-org/react';
import { useFormStatus } from 'react-dom';

type FormButtonType = {
  children: React.ReactNode;
};

function FormButton({ children }: FormButtonType) {
  const { pending } = useFormStatus();

  return (
    <Button isLoading={pending} type='submit'>
      {children}
    </Button>
  );
}

export default FormButton;
