'use server'
import { headers } from 'next/headers'
export const getServerPathName = () => {
    const headersList = headers()
    const headerUrl = headersList.get('referer')
    const currentPathname = headerUrl?.split('/').slice(0, 3).join('/')
  
    return currentPathname
}