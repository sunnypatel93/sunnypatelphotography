import Link from 'next/link'

type SideBarLinkProps = {
  href: string;
  label: string
}
export default function SideBarLink({ href, label }: SideBarLinkProps) {
  return (
    <Link
      href={href}
      className=" block w-full 
      font-medium 
      py-2
      transition-all duration-200
      hover:bg-gray-100 
      hover:shadow-md 
      hover:-translate-y-0.5"
    >
      {label}
    </Link>
  )
}