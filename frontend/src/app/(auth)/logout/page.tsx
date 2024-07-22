'use client';
import { signOut } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const LogoutPage = () => {
  const router = useRouter();

  useEffect(() => {
    const performSignOut = async () => {
      await signOut({ redirect: false }); // Не перенаправляем сразу
      router.push('/'); // Перенаправляем на домашнюю страницу или любую другую страницу после выхода
    };

    performSignOut();
  }, [router]);

  return <div>Logging out...</div>;
};

export default LogoutPage;
