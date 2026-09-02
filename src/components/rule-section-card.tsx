import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import type { RuleSection } from "@/data/rules"
import { cn } from "@/lib/utils"

function actionClass(action: string) {
  if (action.includes("영구 밴") || action.includes("즉시")) {
    return "border-[#ff9bb8]/25 bg-[#ff6b93]/10 text-[#ffc1d2]"
  }
  if (action.includes("타임아웃") || action.includes("추방")) {
    return "border-[#75dfff]/25 bg-[#75dfff]/10 text-[#b7f0ff]"
  }
  if (action.includes("삭제")) {
    return "border-white/10 bg-white/5 text-[#d8d2e4]"
  }
  return "border-[#b995ff]/20 bg-[#b995ff]/10 text-[#d8c5ff]"
}

export function RuleSectionCard({ section }: { section: RuleSection }) {
  return (
    <Card
      id={section.id}
      className="scroll-mt-24 gap-0 rounded-[24px] border-white/10 bg-galaxy-card py-0 ring-0 shadow-[0_18px_55px_#00000033] max-sm:rounded-[20px]"
    >
      <CardHeader className="flex-row items-center gap-3.5 px-7 pt-7 pb-0 max-sm:px-5 max-sm:pt-5">
        <span className="grid size-10 place-items-center rounded-xl bg-[#b995ff]/15 text-xs font-black text-[#bb9cff]">
          {section.number}
        </span>
        <CardTitle className="text-xl font-semibold tracking-tight text-[#f7f2ff]">
          {section.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="px-7 pt-5 pb-7 max-sm:px-5 max-sm:pb-5">
        <div>
          {section.rules.map((rule, index) => (
            <div key={`${section.id}-${index}`}>
              <Separator className="bg-white/8" />
              <div className="grid grid-cols-[7px_1fr] gap-3.5 py-4">
                <span className="mt-2 size-1.5 rounded-full bg-[#9f82d9]" />
                <div>
                  <p className="text-sm leading-7 text-[#c3bdcc]">{rule.text}</p>
                  {rule.action
                    ? (Array.isArray(rule.action) ? rule.action : [rule.action]).map(
                        (label) => (
                          <Badge
                            key={label}
                            variant="outline"
                            className={cn(
                              "mt-2 mr-2 h-auto rounded-lg px-2.5 py-1 text-xs font-bold",
                              actionClass(label)
                            )}
                          >
                            {label}
                          </Badge>
                        )
                      )
                    : null}
                </div>
              </div>
            </div>
          ))}
        </div>
        {section.notices?.map((notice) => (
          <p
            key={notice}
            className="mt-2 rounded-[16px] border border-[#b995ff]/15 bg-[#b995ff]/8 px-4 py-3 text-[13px] leading-7 text-[#bcb4c8]"
          >
            <span className="font-semibold text-[#e0d4ff]">※ </span>
            {notice}
          </p>
        ))}
      </CardContent>
    </Card>
  )
}
