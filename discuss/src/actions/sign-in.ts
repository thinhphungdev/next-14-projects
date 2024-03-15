'use server'
import { auth } from '@/auth';

export async function signIn() {
    return auth.signIn('github')
}