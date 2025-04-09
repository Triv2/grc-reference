import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface SectionCardProps {
  title: string
  description: string
  href: string
  icon: LucideIcon
  className?: string
}

export default function SectionCard({ title, description, href, icon: Icon, className }: SectionCardProps) {
  return (
    <Card className={cn("overflow-hidden transition-all hover:shadow-lg", className)}>
      <CardHeader className="pb-2 px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
          <CardTitle className="text-lg md:text-xl">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="px-4 md:px-6">
        <CardDescription className="text-sm md:text-base">{description}</CardDescription>
      </CardContent>
      <CardFooter className="px-4 pb-4 md:px-6 md:pb-6">
        <Button asChild>
          <Link href={href}>Learn More</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
