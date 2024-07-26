import React from 'react'
import ProtectedPage from '@/components/auth/ProtectedPage'
import LocationFetcher from '@/components/weather/LocationFetcher'

export default function page() {
  return (
    <section>
        <ProtectedPage>
            <h2>Weather</h2>
            <LocationFetcher />
        </ProtectedPage>
    </section>
  )
}
