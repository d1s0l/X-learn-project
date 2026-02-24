'use client';

import { PAGES } from "@/config/pages.config"
import Link from "next/link"
import { usePathname } from "next/navigation";
import type { IMenuItem } from "./Menu.data";

interface Props {
    menuItem: IMenuItem
    isActive: boolean
}

export function MenuItem({menuItem, isActive}: Props) {
    return(
        <Link className={isActive ? 'text-white font-semibold' : 'text-white/80'} 
        href={menuItem.href}>
            {menuItem.name}
        </Link>

    )
}