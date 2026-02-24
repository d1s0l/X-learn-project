'use client';

import { usePathname } from "next/navigation";
import { MENU } from "./Menu.data";
import { MenuItem } from "./MenuItem";
import { match } from "path-to-regexp";


export function Menu() {
    const pathName = usePathname();

    return(
        <nav className="flex gap-6 text-m">
            {MENU.map(menuItem => (
                <MenuItem 
                    key={menuItem.name} 
                    menuItem={menuItem}
                    isActive={!!match(menuItem.href)(pathName)}
                />
            ))}
        </nav>
    )
}