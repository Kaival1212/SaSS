"use client"
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    const pathname = usePathname();

    return (
        <html lang="en">
        <body className="bg-gray-100">
        <header className="bg-white shadow-sm">
            <nav className="container mx-auto px-4 py-2">
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/" className={`hover:text-gray-600 ${pathname === "/" ? "text-blue-500" : "text-gray-800"}`}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/customers" className={`hover:text-gray-600 ${pathname.startsWith("/customers") ? "text-blue-500" : "text-gray-800"}`}>
                            Customers
                        </Link>
                    </li>
                    <li>
                        <Link href="/orders" className={`hover:text-gray-600 ${pathname.startsWith("/orders") ? "text-blue-500" : "text-gray-800"}`}>
                            Orders
                        </Link>
                    </li>
                    <li>
                        <Link href="/draftorders" className={`hover:text-gray-600 ${pathname.startsWith("/draftorders") ? "text-blue-500" : "text-gray-800"}`}>
                            Draft Orders
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
        <main className="container mx-auto px-4 py-8">{children}</main>
        </body>
        </html>
    );
}
