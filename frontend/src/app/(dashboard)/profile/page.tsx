import { authConfig } from "@/configs/auth";
import ProtectedPage from '@/components/auth/ProtectedPage';
import { getServerSession } from "next-auth/next"
import LogoutButton from '@/components/auth/LogoutButton';
import styles from './page.module.sass'

export default async function Page() {
    const session = await getServerSession(authConfig);

    return (
        <div>
            <ProtectedPage>
                <h1 className={styles.title}>Profile</h1>
                <p className={styles.description}>Welcome to your profile, {session?.user?.name}!</p>
                <div className={styles.container}>
                    {session?.user?.image && <img className={styles.img} src={session?.user?.image} />}
                    <p className={styles.email}>Email: {session?.user?.email}</p>
                    <p className={styles.name}>Name: {session?.user?.name}</p>
                </div>
                <LogoutButton />
            </ProtectedPage>
        </div>
     )
    };