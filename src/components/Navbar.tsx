"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <Image
          src="/images/logo.jpeg"
          alt="DV Locações logo"
          width={130}
          height={60}
          className="object-contain"
        />
      </Link>
      <nav className="hidden md:flex space-x-8">
        <NavLink href="/" active={pathname === "/"}>
          Início
        </NavLink>
        <NavLink href="/servicos" active={pathname === "/servicos"}>
          Serviços
        </NavLink>
        <NavLink href="/sobre" active={pathname === "/sobre"}>
          Sobre
        </NavLink>
        <NavLink href="/contato" active={pathname === "/contato"}>
          Contato
        </NavLink>
      </nav>
    </header>
  );
}

interface NavLinkProps {
  href: string;
  active: boolean;
  children: React.ReactNode;
}

function NavLink({ href, active, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`text-base font-medium transition-colors hover:text-gray-600 ${
        active ? "underline underline-offset-8 decoration-2" : ""
      }`}
    >
      {children}
    </Link>
  );
}
