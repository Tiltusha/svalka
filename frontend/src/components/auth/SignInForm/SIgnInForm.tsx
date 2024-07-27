'use client'

import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import type { FormEventHandler } from "react";
import styles from './signinform.module.sass';

const SignInForm = () => {
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
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Sign in</button>
        </form>
    )
}

export { SignInForm };