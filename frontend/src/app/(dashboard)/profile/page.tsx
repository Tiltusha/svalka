import { authConfig } from "@/configs/auth";
import ProtectedPage from '@/components/auth/ProtectedPage';
import { getServerSession } from "next-auth/next"

export default async function Page() {
    const session = await getServerSession(authConfig);

    return (
        <div>
            <ProtectedPage>
                <h1>Profile of {session?.user?.name} </h1>
                {session?.user?.image && <img src={session?.user?.image} />}
            </ProtectedPage>
        </div>
     )
    };