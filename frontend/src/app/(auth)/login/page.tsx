import { GithubButton } from "@/components/auth/GithubButton";
import { SignInForm } from "@/components/auth/SIgnInForm";


export default async function Page() {
    return (
    <>
        <h1>Sign in</h1>
        <GithubButton />
        {/* <SignInForm /> */}
    </>
    )
}