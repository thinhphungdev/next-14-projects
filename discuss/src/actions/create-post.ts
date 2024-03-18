'use server'

import type { Post } from "@prisma/client"
import { revalidatePath } from "next/cache"
import { z } from 'zod';
import { redirect } from "next/navigation";
import { db } from "@/db";
import { auth } from "@/auth"
import paths from "@/paths";

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

export async function createPost(slug: string, formState: CreatePostFormState, formData: FormData): Promise<CreatePostFormState> {
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

    // authentication stuff
    const session = await auth();

    if (!session || !session.user) {
        return {
            errors: {
                _form: ['You must be logged in to do this.']
            }
        }
    }

    // DB related stuffs
    const topic = await db.topic.findFirst({
        where: { slug }
    })

    if (!topic) {
        return {
            errors: {
                _form: ['Cannot find topic']
            }
        }
    }


    let post: Post;

    try {
        post = await db.post.create({
            data: {
                title: result.data.title,
                content: result.data.content,
                topicId: topic.id,
                userId: session.user.id
            }
        })
    } catch (err) {
        if (err instanceof Error) {
            return {
                errors: {
                    _form: [err.message]
                }
            }
        } else {
            return {
                errors: {
                    _form: ['Something went wrong, failed to create post']
                }
            }
        }
    }

    // revalidate the topic show page
    revalidatePath(paths.topicShowPath(slug))
    redirect(paths.postShowPath(slug, post.id));
}