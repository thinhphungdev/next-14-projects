'use server'

import type { Post } from "@prisma/client"
import { revalidatePath } from "next/cache"
import { z } from 'zod';
import { redirect } from "next/navigation";
import { db } from "@/db";
import { auth } from "@/auth"

const createPostSchema = z.object({
    title: z.string().min(3),
    content: z.string().min(10)
})

type CreatePostFormState = {
    errors: {
        title?: string[],
        content?: string[],
        _form?: string[]
    }
}

export async function createPost(formState: CreatePostFormState, formData: FormData): Promise<CreatePostFormState> {
    // Form fields validation stuffs
    const result = createPostSchema.safeParse({
        title: formData.get('title'),
        content: formData.get('content'),
    })

    if (result && !result.success) {
        return {
            errors: result.error.flatten().fieldErrors,
        }
    }


    const session = await auth();

    if (!session || !session.user) {
        return {
            errors: {
                _form: ['You must be logged in to do this.']
            }
        }
    }

    let post: Post;

    try {
        post = await db.post.create({
            data: {
                title: result.data.title,
                content: result.data.content,
            }
        })
    } catch (err) {
        if (err instanceof Error) {
            return {
                errors: {
                    _form: [err.message]
                }
            }
        }
    }

    // revalidate the topic show page
    return {
        errors: {}
    }
}