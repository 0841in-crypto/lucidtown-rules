import { ArrowUpRight } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { DISCORD_INVITE } from "@/data/rules"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#080711]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[68px] max-w-[1080px] items-center justify-between px-5 max-sm:h-[62px]">
        <a href="#top" className="text-xl font-black tracking-tight text-[#f7f2ff]">
          LUCID
          <span className="text-[#b995ff]">TOWN</span>
        </a>
        <a
          href={DISCORD_INVITE}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ size: "lg" }),
            "h-auto rounded-xl border-0 bg-linear-to-br from-[#b995ff] to-[#75dfff] px-4 py-2.5 text-[13px] font-extrabold text-[#110d1d] shadow-galaxy-join hover:from-[#c8a8ff] hover:to-[#8aebff] hover:bg-transparent"
          )}
        >
          DISCORD 입장
          <ArrowUpRight />
        </a>
      </div>
    </header>
  )
}
