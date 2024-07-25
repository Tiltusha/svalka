import React from 'react'
import ProtectedPage from '@/components/auth/ProtectedPage'

export default function page() {
  return (
    <section>
        <ProtectedPage>
            Приложение погоды принято в разработку!
        </ProtectedPage>
    </section>
  )
}
