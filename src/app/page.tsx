import { Badge } from "@/components/ui/badge"
import { RuleSectionCard } from "@/components/rule-section-card"
import { footerNotices, sections } from "@/data/rules"

export default function Home() {
  return (
    <main id="top" className="mx-auto w-full max-w-[920px] flex-1 px-5 pt-20 pb-8 max-sm:pt-14">
      <section className="pb-[70px] text-center max-sm:pb-12">
        <Badge
          variant="outline"
          className="h-auto rounded-full border-[#b995ff]/22 bg-[#b995ff]/8 px-3.5 py-2 text-xs font-bold text-[#d9c9ff]"
        >
          ✦ LUCID TOWN COMMUNITY
        </Badge>
        <h1 className="mt-6 mb-4 text-[clamp(44px,8vw,78px)] leading-none font-black tracking-[-0.06em] text-[#f7f2ff] max-sm:tracking-[-0.04em]">
          루시드 타운
          <br />
          <span className="text-galaxy">이용 규칙</span>
        </h1>
        <p className="mx-auto max-w-xl text-[15px] leading-8 text-[#a9a2b7]">
          모두가 편안하게 게임하고 이야기할 수 있는 공간을 만들기 위한
          <br className="max-sm:hidden" />
          루시드 타운의 이용 규칙입니다.
        </p>
        <nav
          aria-label="규칙 목차"
          className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2"
        >
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="rounded-full border border-white/10 bg-white/4 px-3 py-1.5 text-xs text-[#c3bdcc] transition-colors hover:border-[#b995ff]/40 hover:text-[#e8e0ff]"
            >
              {section.number} {section.title.replace(" 관련", "")}
            </a>
          ))}
        </nav>
      </section>

      <div className="flex flex-col gap-4">
        {sections.map((section) => (
          <RuleSectionCard key={section.id} section={section} />
        ))}
      </div>

      <section className="mt-6 rounded-[20px] border border-[#b995ff]/16 bg-[#b995ff]/8 px-6 py-6 text-[13px] leading-7 text-[#bcb4c8]">
        {footerNotices.map((notice, index) => (
          <p key={notice.title} className={index > 0 ? "mt-5" : undefined}>
            <strong className="font-semibold text-[#e0d4ff]">※ {notice.title}</strong>
            <br />
            {notice.body}
          </p>
        ))}
      </section>

      <footer className="px-5 pt-9 pb-14 text-center text-xs leading-6 text-[#625d6d]">
        LUCID TOWN · 서로를 존중하고 배려하는 게임 커뮤니티
        <br />
        © Lucid Town
      </footer>
    </main>
  )
}
