"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "./ui/button"
import { Menu, X, Github, Linkedin, Mail } from "lucide-react"

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        setScrolled(window.scrollY > 20) // ensures that background will be there when users refresh after already scrolling down

        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navItems = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/experience", label: "Experience" },
        { href: "/projects", label: "Projects" },
    ]

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass-nav shadow-lg" : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center group" aria-label="Home">
                        <span className="relative w-16 h-16 block">
                            <Image
                                src="/assets/nojima-static.png"
                                alt="Nojima Cat"
                                width={64}
                                height={64}
                                className="absolute inset-0 w-full h-full object-contain transition-opacity duration-200 group-hover:opacity-0"
                                draggable={false}
                                priority
                            />
                            <Image
                                src="/assets/nojima-loading.gif"
                                alt="Nojima Cat Animated"
                                width={64}
                                height={64}
                                className="absolute inset-0 w-full h-full object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                draggable={false}
                                unoptimized
                            />
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`font-medium transition-colors hover:text-primary ${pathname === item.href ? "text-primary" : "text-foreground"
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}

                        {/* Social Links */}
                        <div className="flex items-center space-x-3 ml-6">
                            <Button variant="ghost" size="sm" asChild>
                                <a href="https://github.com/emw8105" target="_blank" rel="noopener noreferrer">
                                    <Github className="h-4 w-4" />
                                </a>
                            </Button>
                            <Button variant="ghost" size="sm" asChild>
                                <a href="https://www.linkedin.com/in/evanmattwright/" target="_blank" rel="noopener noreferrer">
                                    <Linkedin className="h-4 w-4" />
                                </a>
                            </Button>
                            <Button variant="ghost" size="sm" asChild>
                                <a href="mailto:evanmatt.wright@gmail.com">
                                    <Mail className="h-4 w-4" />
                                </a>
                            </Button>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden glass-card rounded-lg mt-2 p-4">
                        <div className="flex flex-col space-y-3">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`font-medium transition-colors hover:text-primary ${pathname === item.href ? "text-primary" : "text-foreground"
                                        }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}

                            {/* Mobile Social Links */}
                            <div className="flex items-center space-x-3 pt-3 border-t border-border">
                                <Button variant="ghost" size="sm" asChild>
                                    <a href="https://github.com/emw8105" target="_blank" rel="noopener noreferrer">
                                        <Github className="h-4 w-4" />
                                    </a>
                                </Button>
                                <Button variant="ghost" size="sm" asChild>
                                    <a href="https://www.linkedin.com/in/evanmattwright/" target="_blank" rel="noopener noreferrer">
                                        <Linkedin className="h-4 w-4" />
                                    </a>
                                </Button>
                                <Button variant="ghost" size="sm" asChild>
                                    <a href="mailto:evanmatt.wright@gmail.com">
                                        <Mail className="h-4 w-4" />
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}
