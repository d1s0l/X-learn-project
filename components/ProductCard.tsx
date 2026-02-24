import Image from "next/image";

export interface Product {
    id: number
    title: string
    thumbnail: string
    price: number
}

export function ProductCard({ title, thumbnail, price }: Product) {
    return(
        <div className="w-64 border border-black/10 dark:border-white/10 rounded-xl p-4 hover:shadow transition">
            <Image 
                width={150}
                height={150}
                src={thumbnail}
                alt={title}
                className="object-contain mb-3 rounded"
            />
            <h2 className="text-sm text-black dark:text-white font-medium line-clamp-2 mb-1">{title}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">${price}</p>
        </div>
    )
}