import Link from "next/link";
import SideBarLink from "./SideBarLink";

export default function SideNav() {
  return (
    <div className="hidden md:flex fixed left-0 top-0 h-screen w-64 bg-white text-black flex-col p-4 border-r border-gray-300">
      <div className="mb-8">
        <Link href="/">
          <img
            src="/logo2.png"
            alt="Sunny Patel Photography"
            className="w-full"
          />
        </Link>
      </div>

      <nav>
        <ul className="flex flex-col gap-2">
          <li>
            <SideBarLink href="/" label='Home' />
          </li>
          <li>
            <SideBarLink href="about" label='About' />
          </li>
          <li>
            <SideBarLink href="/gallery" label='Gallery' />
          </li>
          <li>
            <SideBarLink href="/pricing" label='Pricing' />
          </li>
          <li>
            <SideBarLink href="/testimonials" label='Testimonials' />
          </li>
          <li>
            <SideBarLink href="/contact" label='Contact' />
          </li>
        </ul>
      </nav>

    </div>
  );
}

