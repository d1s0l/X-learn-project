'use client'

import { useRouter } from 'next/navigation'
import { PAGES } from '@/config/pages.config'

export function ProfileFake() {
  const router = useRouter()

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Profile Fake</h1>
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded"
        onClick={() => router.push(PAGES.HOME)}
      >
        Go to Home
      </button>
    </div>
  )
}