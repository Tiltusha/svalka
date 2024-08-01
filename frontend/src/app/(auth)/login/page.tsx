'use client';

import { GithubButton } from "@/components/auth/GithubButton";
import { SignInForm } from "@/components/auth/SignInForm/SIgnInForm";
import styles from "./page.module.sass"

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (session && status === 'authenticated') {
            router.push('/profile');
        }
    }, [session, status, router]);

    if (session === undefined || status === undefined) {
        return null;
    }

    if (session && status === 'authenticated') {
        return null;
    }

    return (
        <section className={styles.section}>
            <h1 className={styles.title}>Sign in</h1>
            <SignInForm />
            <GithubButton />
        </section>
    )
}

