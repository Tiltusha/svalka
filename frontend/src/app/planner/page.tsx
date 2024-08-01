import React from 'react'
import ProtectedPage from '@/components/auth/ProtectedPage'
import initialData from './initial-data'

export default function page() {
  const state = initialData;

  // const column = state.columns[];
  const columnOrder = state.columnOrder;

  return (
    <div>
      <ProtectedPage>
        <h1>Planner</h1>
        <div>
          <h2>Tasks</h2>
          <ul>
          </ul>
        </div>
      </ProtectedPage>
    </div>
  )
}
