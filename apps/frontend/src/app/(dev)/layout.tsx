import Pagina from '@/components/template/Pagina'

export default function PaginaLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <Pagina>{children}</Pagina>
}
