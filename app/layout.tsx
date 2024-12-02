import { Suspense } from "react"
import "../styles/global.css"
import dynamic from "next/dynamic"
const Nav = dynamic(() => import('../component/nav/nav'), { ssr: false })

export const metadata = {
  title: 'Work Insihgts',
  description: 'Work Insihgts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <Suspense>
        <Nav />
      </Suspense>
      <body>{children}</body>
    </html>
  )
}
