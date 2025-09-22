'use client'
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import Image from "next/image";


function HeaderLayout() {
const pathname = usePathname();

const navLinks = [
    { href: "/candidatos", label: "Candidatos" },
    { href: "/organizaciones", label: "Organizaciones" },
    { href: "/noticias", label: "Noticias" },
];

return (
    <header className="sticky top-0 w-full bg-white border-b border-gray-200 z-[10]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold text-gray-900">
                    <Image width={134} height={40} src="politiquien_logo.svg" alt="logo"/>
                </Link>
            </div>
            <nav className="space-x-2">
                {
                navLinks.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    className={
                    "/"+pathname.split("/")[1] === link.href
                        ? buttonVariants({ variant: "default" })
                        : buttonVariants({ variant: "ghost" })
                    }
                >
                    {link.label}
                </Link>
                ))}
            </nav>
            <Select>
                <SelectTrigger
                    className="w-40 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate"
                    size="sm"
                >
                <SelectValue placeholder="Procesos Electorales" />
                </SelectTrigger>
                <SelectContent align="end">
                    <SelectItem value="116">E. Presidenciales 2026</SelectItem>
                    <SelectItem value="113">E. Regionales y Municipales 2022</SelectItem>
                </SelectContent>
            </Select>
            </div>
        </div>
    </header>
    )
}

export default HeaderLayout;