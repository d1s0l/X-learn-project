'use client'

import { useSearchParams } from "next/navigation"

export function Explore() {
    const searchParam = useSearchParams();
    const tag = searchParam.get('tag');

    return(
        <div>
            <h1 className="text-3xl font-bold mb-6">Explore by #{!!tag && `by #${tag}`}</h1>
        </div>
    )
}