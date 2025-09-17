"use client";
import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants/navigation";
import { useState } from "react";

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white py-4 shadow-sm fixed w-full top-0 z-30">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="logo">
          <Image
            src="/assets/img/logo/footer-logo.png"
            alt="logo-img"
            width={150}
            height={50}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:block">
          <ul className="flex space-x-6">
            {NAV_LINKS.map((link, i) => (
              <li key={i} className="relative group">
                {!link.children ? (
                  <Link
                    href={link.href}
                    className={`transition-colors ${
                      pathname === link.href
                        ? "text-green-700 font-bold"
                        : "text-gray-700 hover:text-green-900"
                    }`}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <>
                    <span className="text-gray-700 cursor-pointer hover:text-green-900">
                      {link.label}
                    </span>
                    <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-40">
                      {link.children.map((child, j) => (
                        <li key={j}>
                          <Link
                            href={child.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          aria-label="Open mobile menu"
          onClick={() => setIsOpen(!isOpen)}
          className="xl:hidden text-gray-700 text-2xl"
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="xl:hidden bg-white shadow-md absolute w-full left-0 top-[70px] z-40">
          <ul className="flex flex-col divide-y divide-gray-200">
            {NAV_LINKS.map((link, i) => (
              <li key={i} className="p-4">
                {!link.children ? (
                  <Link href={link.href}>{link.label}</Link>
                ) : (
                  <div>
                    <p className="font-medium">{link.label}</p>
                    <ul className="pl-4 mt-2 space-y-2">
                      {link.children.map((child, j) => (
                        <li key={j}>
                          <Link href={child.href}>{child.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
