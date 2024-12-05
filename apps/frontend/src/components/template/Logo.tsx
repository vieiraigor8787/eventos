import { Righteous } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

const righteous = Righteous({
  subsets: ['latin'],
  weight: ['400'],
})

export default function Logo() {
  return (
    <Link href="/" className={`${righteous.className} flex items-center gap-2`}>
      <Image src="/logo.svg" alt="logo" width={50} height={50} />
      <h1 className="flex flex-col items-center text-lg leading-5">
        <div>
          CONVIT<span className="text-blue-500">E</span>
        </div>
        <div className="">DIGITAL</div>
      </h1>
    </Link>
  )
}
