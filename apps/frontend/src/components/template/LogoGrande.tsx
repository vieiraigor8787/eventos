import { Righteous } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

const righteous = Righteous({
  subsets: ['latin'],
  weight: ['400'],
})

export default function LogoGrande() {
  return (
    <Link
      href="/"
      className={`${righteous.className} flex flex-col items-center gap-2`}
    >
      <Image src="/logo.svg" alt="logo" width={100} height={100} />
      <h1 className="leading-5xl">
        CONVIT<span className="text-blue-500">E</span> DIGITAL
      </h1>
    </Link>
  )
}
