import type { Metadata } from "next";
import { Explore } from "./Explore";
import { Suspense } from "react";

export const metadata: Metadata = {
    title: 'Explore',
    description: 'Explore - X app'
}

export default function ExplorePage() {
  return (
    <Suspense>
      <Explore />
    </Suspense>
  )
}