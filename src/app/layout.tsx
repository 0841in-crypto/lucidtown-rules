import type { Metadata } from "next"
import { Geist_Mono, Noto_Sans_KR } from "next/font/google"

import { GalaxyBackground } from "@/components/galaxy-background"
import { SiteHeader } from "@/components/site-header"

import "./globals.css"

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "700", "900"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "루시드 타운 · 이용 규칙",
  description:
    "모두가 편안하게 게임하고 이야기할 수 있는 공간을 만들기 위한 루시드 타운 이용 규칙입니다.",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`${notoSansKr.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="relative min-h-full flex flex-col font-sans">
        <GalaxyBackground />
        <SiteHeader />
        {children}
      </body>
    </html>
  )
}
