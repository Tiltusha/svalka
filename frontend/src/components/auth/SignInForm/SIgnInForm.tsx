'use client'

import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import type { FormEventHandler } from "react";
import styles from './signinform.module.sass';

import { GithubButton } from "../GithubButton"

const SignInForm = ({ children }: React.PropsWithChildren<unknown>) => {
    const router = useRouter();

    const HandleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const res = await signIn('credentials', {
            email: formData.get('email'),
            password: formData.get('password'),
            redirect: false,
        })

        if (res && !res.error) {
            router.push('/profile');
        } else {
            console.log(res);
        }
    }

    return (
        <form className={styles.login}>
            <input className={styles.input} type="text" placeholder="Username" autoFocus required autoComplete="username" autoCorrect="off"  />
            <input className={styles.input} type="password" placeholder="Password" required autoComplete="current-password" />
            <button className={styles.button} onClick={HandleSubmit}>Sign in</button>
            <p className={styles.or}>or</p>
        </form>
    )
}

export { SignInForm };