'use server'

import { z } from 'zod';
import { auth } from '@/auth';

const createTopicSchema = z.object({
    name: z.string().min(3).regex(/^[a-z-]+$/, { message: "Must be lowercase lettersor dashes without spaces" }),
    description: z.string().min(10),
});

type CreateTopicFormState = {
    errors: {
        name?: string[],
        description?: string[],
        _form?: string[]
    }
}

export async function createTopic(formState: CreateTopicFormState, formData: FormData): Promise<CreateTopicFormState> {
    // Todo: revalidate homepage
    const result = createTopicSchema.safeParse({
        name: formData.get('name'),
        description: formData.get('description'),
    });

    if (!result.success) {
        return {
            errors: result.error.flatten().fieldErrors
        }
    }

    const session = await auth();
    
    if (!session || !session.user) {
        return {
            errors: {
                _form: ['You must be logged in.']
            }
        }
    }

    return {
        errors: {}
    }
}