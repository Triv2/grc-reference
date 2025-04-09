import type React from "react"
import { BookOpen, FileText, Video, Globe, BookMarked } from "lucide-react"
import PageHeader from "@/components/page-header"
import ContentSection from "@/components/content-section"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ResourcesPage() {
  return (
    <div className="container py-6 md:py-10">
      <PageHeader
        title="GRC Resources"
        description="Explore a curated collection of resources to deepen your understanding of Governance, Risk, and Compliance."
        icon={BookOpen}
      />

      <ContentSection title="Books and Publications">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <ResourceCard
            title="The Governance, Risk, and Compliance Handbook"
            description="A comprehensive guide to implementing effective GRC programs in organizations of all sizes."
            type="Book"
            icon={BookMarked}
            link="#"
          />
          <ResourceCard
            title="Enterprise Risk Management: Integrating with Strategy and Performance"
            description="COSO's framework for enterprise risk management, with practical guidance for implementation."
            type="Publication"
            icon={FileText}
            link="#"
          />
          <ResourceCard
            title="Information Security Governance Simplified"
            description="A practical approach to implementing information security governance in alignment with business objectives."
            type="Book"
            icon={BookMarked}
            link="#"
          />
          <ResourceCard
            title="The Compliance Handbook"
            description="A guide to building and managing effective compliance programs in regulated industries."
            type="Book"
            icon={BookMarked}
            link="#"
          />
          <ResourceCard
            title="Measuring and Managing Information Risk: A FAIR Approach"
            description="An introduction to the Factor Analysis of Information Risk (FAIR) methodology for quantitative risk analysis."
            type="Book"
            icon={BookMarked}
            link="#"
          />
          <ResourceCard
            title="GRC Capability Model (OCEG Red Book)"
            description="A framework for the integration of governance, risk, and compliance activities."
            type="Publication"
            icon={FileText}
            link="#"
          />
        </div>
      </ContentSection>

      <ContentSection title="Whitepapers and Articles">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <ResourceCard
            title="Building a Mature GRC Program"
            description="A whitepaper on the key components and maturity stages of effective GRC programs."
            type="Whitepaper"
            icon={FileText}
            link="#"
          />
          <ResourceCard
            title="The Future of GRC: Trends and Predictions"
            description="An analysis of emerging trends and future directions in governance, risk, and compliance."
            type="Article"
            icon={FileText}
            link="#"
          />
          <ResourceCard
            title="Integrating GRC with Business Strategy"
            description="Strategies for aligning GRC activities with business objectives and strategic planning."
            type="Whitepaper"
            icon={FileText}
            link="#"
          />
          <ResourceCard
            title="The Role of Technology in Modern GRC"
            description="An exploration of how technology is transforming GRC practices and capabilities."
            type="Article"
            icon={FileText}
            link="#"
          />
          <ResourceCard
            title="Measuring GRC Performance: Metrics and KPIs"
            description="A guide to developing meaningful metrics for evaluating GRC effectiveness."
            type="Whitepaper"
            icon={FileText}
            link="#"
          />
          <ResourceCard
            title="GRC for Small and Medium Enterprises"
            description="Practical approaches to implementing GRC in organizations with limited resources."
            type="Article"
            icon={FileText}
            link="#"
          />
        </div>
      </ContentSection>

      <ContentSection title="Online Resources">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <ResourceCard
            title="NIST Cybersecurity Framework"
            description="A framework for improving critical infrastructure cybersecurity, with resources and implementation guidance."
            type="Website"
            icon={Globe}
            link="https://www.nist.gov/cyberframework"
          />
          <ResourceCard
            title="ISO 27001 Information Security Management"
            description="Information about the ISO 27001 standard for information security management systems."
            type="Website"
            icon={Globe}
            link="https://www.iso.org/isoiec-27001-information-security.html"
          />
          <ResourceCard
            title="OCEG (Open Compliance & Ethics Group)"
            description="A nonprofit organization that provides standards, guidelines, and resources for GRC professionals."
            type="Website"
            icon={Globe}
            link="https://www.oceg.org/"
          />
          <ResourceCard
            title="Risk Management Society (RIMS)"
            description="A global professional association dedicated to advancing the practice of risk management."
            type="Website"
            icon={Globe}
            link="https://www.rims.org/"
          />
          <ResourceCard
            title="Compliance Week"
            description="News, analysis, and resources for compliance and risk management professionals."
            type="Website"
            icon={Globe}
            link="https://www.complianceweek.com/"
          />
          <ResourceCard
            title="GRC 20/20 Research"
            description="Research and insights on GRC trends, best practices, and technologies."
            type="Website"
            icon={Globe}
            link="#"
          />
        </div>
      </ContentSection>

      <ContentSection title="Videos and Webinars">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <ResourceCard
            title="Introduction to GRC"
            description="A comprehensive introduction to the concepts and principles of governance, risk, and compliance."
            type="Video"
            icon={Video}
            link="#"
          />
          <ResourceCard
            title="Implementing an Integrated GRC Program"
            description="A webinar on strategies for integrating governance, risk, and compliance activities."
            type="Webinar"
            icon={Video}
            link="#"
          />
          <ResourceCard
            title="GRC Technology Selection and Implementation"
            description="Guidance on selecting and implementing GRC technology solutions."
            type="Webinar"
            icon={Video}
            link="#"
          />
          <ResourceCard
            title="Risk Assessment Methodologies"
            description="A comparison of different approaches to risk assessment and analysis."
            type="Video"
            icon={Video}
            link="#"
          />
          <ResourceCard
            title="Building a Compliance Culture"
            description="Strategies for fostering a culture of compliance and ethical behavior in organizations."
            type="Webinar"
            icon={Video}
            link="#"
          />
          <ResourceCard
            title="GRC Case Studies: Lessons Learned"
            description="Real-world examples of GRC implementation challenges and successes."
            type="Video"
            icon={Video}
            link="#"
          />
        </div>
      </ContentSection>
    </div>
  )
}

interface ResourceCardProps {
  title: string
  description: string
  type: string
  icon: React.ComponentType<{ className?: string }>
  link: string
}

function ResourceCard({ title, description, type, icon: Icon, link }: ResourceCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <Icon className="h-5 w-5 text-primary" />
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
        <CardDescription className="text-xs uppercase font-semibold">{type}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" size="sm">
          <Link href={link}>Access Resource</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
