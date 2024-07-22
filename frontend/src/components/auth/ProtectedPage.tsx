'use client'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const ProtectedPage = ({ children }) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  
  useEffect(() => {
    if (status === 'loading') return; // Подождите, пока сессия загружается

    if (!session) {
      router.push('/login'); // Перенаправление на страницу логина, если пользователь не авторизован
    }
  }, [session, status, router]);

  if (status === 'loading' || !session) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default ProtectedPage;
