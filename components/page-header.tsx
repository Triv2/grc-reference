import type { LucideIcon } from "lucide-react"

interface PageHeaderProps {
  title: string
  description: string
  icon?: LucideIcon
}

export default function PageHeader({ title, description, icon: Icon }: PageHeaderProps) {
  return (
    <div className="flex flex-col space-y-4 pb-8 pt-6 md:pt-10">
      <div className="flex items-center gap-2">
        {Icon && <Icon className="h-8 w-8 md:h-10 md:w-10 text-primary" />}
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h1>
      </div>
      <p className="max-w-[800px] text-base md:text-lg text-muted-foreground">{description}</p>
    </div>
  )
}
