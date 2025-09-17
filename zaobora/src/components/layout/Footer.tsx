import Image from "next/image";
import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/constants/socials";
import { FOOTER_QUICK_LINKS, FOOTER_CONTACT } from "@/lib/constants/footer";

const Footer = () => (
  <footer className="bg-gray-800 text-white py-16">
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {/* Logo & Intro */}
      <div>
        <Link href="/">
          <Image
            src="/assets/img/logo/logo_2.png"
            alt="logo-img"
            width={150}
            height={50}
          />
        </Link>
        <p className="text-gray-400 mt-6">
          Whether you’re looking for consultation, market linkage, or more
          information on agroforestry, the Zao Bora team is ready to help.
        </p>
        <h5 className="mt-6 mb-3 text-lg font-normal">Follow Us</h5>
        <div className="flex space-x-4">
          {SOCIAL_LINKS.map((social, i) => (
            <a
              key={i}
              href={social.href}
              aria-label={social.label}
              className="text-white hover:text-green-400 transition-colors"
            >
              <social.icon />
            </a>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="font-semibold mb-4">Quick Links</h4>
        <ul className="space-y-2 text-gray-400">
          {FOOTER_QUICK_LINKS.map((link, i) => (
            <li key={i}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Info */}
      <div>
        <h4 className="font-semibold mb-4">Contact</h4>
        <ul className="space-y-2 text-gray-400">
          <li>Email: {FOOTER_CONTACT.email}</li>
          <li>Phone: {FOOTER_CONTACT.phone}</li>
          <li>Location: {FOOTER_CONTACT.address}</li>
        </ul>
      </div>
    </div>

    <div className="text-center text-gray-500 mt-10">
      © {new Date().getFullYear()} Zao Bora. All Rights Reserved.
    </div>
  </footer>
);

export default Footer;
