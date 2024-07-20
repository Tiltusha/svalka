import React from 'react'
import ProtectedPage from '@/components/auth/ProtectedPage'

export default function page() {
  return (
    <div>
      <ProtectedPage>
        welcome
      </ProtectedPage>
    </div>
  )
}
