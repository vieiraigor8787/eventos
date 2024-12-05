import Logo from './Logo'

export interface PaginaProps {
  children: React.ReactNode
  className?: string
}

export default function Pagina({ className, children }: PaginaProps) {
  return (
    <div className="flex flex-col items-center min-h-screen bg-[url('/background.png')] bg-cover py-10">
      <Logo />
      <main
        className={`${className} container flex-1 flex flex-col justify-center py-10`}
      >
        {children}
      </main>
    </div>
  )
}
