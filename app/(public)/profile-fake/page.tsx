import type { Metadata } from 'next'
import { ProfileFake } from './ProfileFake'

export const metadata: Metadata = {
  title: 'ProfileFake',
  description: 'Profile - X app',
}

export default function ProfileFakePage() {
  return <ProfileFake />
}