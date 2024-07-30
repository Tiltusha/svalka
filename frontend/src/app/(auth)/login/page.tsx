import { GithubButton } from "@/components/auth/GithubButton";
import { SignInForm } from "@/components/auth/SignInForm/SIgnInForm";
import styles from "./page.module.sass"

export default async function Page() {
    return (
    <section className={styles.section}>
        <h1 className={styles.title}>Sign in</h1>
        <SignInForm />
        <GithubButton />
        {/* <SignInForm /> */}
    </section>
    )
}