'use server';

import { db } from "@/db";
import { redirect } from "next/navigation";

export async function editSnippet(id: number, code: string) {
    await db.snippet.update({
        where: { id },
        data: { code }
    })

    redirect(`/snippets/${id}`)
}

export async function deleteSnippet(id: number) {
    await db.snippet.delete({
        where: { id },
    })

    redirect(`/`)
}

export async function createSnippet(formState: { message: string }, formData: FormData) {
    // This need to be a server action


    // check user input and make sure the're valid
    const title = formData.get('title');
    const code = formData.get('code');

    if (typeof title !== 'string' || title.length < 3) {
        return {
            message: 'Title must be a string and longer'
        }
    }

    if (typeof code !== 'string' || code.length < 5) {
        return {
            message: 'Code must be a string and longer'
        }
    }

    // Create new record in DB
    try {
        const snippet = await db.snippet.create({
            data: {
                title,
                code,
            },
        });

        console.log(snippet); // this log will be logged on the server side

    } catch (error) {
        if (error instanceof Error) {
            return {
                message: error.message
            }
        } else {
            return {
                message: 'Something went wrong'
            }
        }
    }

    // redirect back to home page
    redirect('/');
}