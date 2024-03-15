'use server'
import { auth } from '@/auth';

export async function signOut() {
    return auth.signOut();
}