import Link from "next/link";

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
        <ul className="flex flex-col gap-4">
          <li>
            <Link href="/" className="font-medium hover:text-gray-300 transition py-1">Home</Link>
          </li>
          <li>
            <Link href="/about" className="font-medium hover:text-gray-300 transition py-1">About</Link>
          </li>
          <li>
            <Link href="/gallery" className="font-medium hover:text-gray-300 transition py-1">Gallery</Link>
          </li>
          <li>
            <Link href="/pricing" className="font-medium hover:text-gray-300 transition py-1">Pricing</Link>
          </li>
          <li>
            <Link href="/testimonials" className="font-medium hover:text-gray-300 transition py-1">Testimonials</Link>
          </li>
          <li>
            <Link href="/contact" className="font-medium hover:text-gray-300 transition py-1">Contact</Link>
          </li>
        </ul>
      </nav>

    </div>
  );
}

