import type { ReactNode } from "react"
import type { LucideIcon } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ContentSectionProps {
  title: string
  children: ReactNode
  icon?: LucideIcon
}

export default function ContentSection({ title, children, icon: Icon }: ContentSectionProps) {
  return (
    <Card className="mb-8 shadow-md rounded-2xl overflow-hidden">
      <CardHeader className="pb-3 px-4 md:px-6">
        <div className="flex items-center gap-2">
          {Icon && <Icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />}
          <CardTitle className="text-lg md:text-xl">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="text-sm md:text-base px-4 md:px-6">{children}</CardContent>
    </Card>
  )
}
