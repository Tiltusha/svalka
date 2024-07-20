'use client'

import { signIn } from "next-auth/react"
import { useSearchParams } from "next/navigation"

const GithubButton = () => {
    const searchParams = useSearchParams()
    const callbackUrl = searchParams.get('callbackUrl') || '/profile'

    return (
        <button onClick={() => signIn("github", {callbackUrl})}>
            Sign in with Github
        </button>
    )
}

export { GithubButton };