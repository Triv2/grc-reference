import { Shield, AlertTriangle, CheckCircle } from "lucide-react"
import PageHeader from "@/components/page-header"
import SectionCard from "@/components/section-card"
import ContentSection from "@/components/content-section"

export default function Home() {
  return (
    <div className="container py-6 md:py-10">
      <PageHeader
        title="Governance, Risk, and Compliance"
        description="Welcome to the GRC Information Portal. Explore comprehensive resources on Governance, Risk Management, and Compliance practices."
      />

      <ContentSection title="Overview of GRC">
        <div className="space-y-4">
          <p>
            Governance, Risk, and Compliance (GRC) is an integrated approach to organization-wide governance, risk, and
            compliance that ensures an organization acts ethically correct and in accordance with its risk appetite,
            internal policies, and external regulations.
          </p>
          <p>
            A well-designed GRC framework helps organizations align IT with business goals, manage risks effectively,
            and meet compliance requirements efficiently.
          </p>
          <p>
            The three pillars of GRC work together to provide a comprehensive approach to managing an organization's
            operations:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Governance</strong> establishes policies, procedures, and controls to ensure proper management and
              oversight.
            </li>
            <li>
              <strong>Risk Management</strong> identifies, assesses, and mitigates risks that could impact business
              objectives.
            </li>
            <li>
              <strong>Compliance</strong> ensures adherence to laws, regulations, standards, and internal policies.
            </li>
          </ul>
        </div>
      </ContentSection>

      <h2 className="text-2xl font-bold mb-6">Explore GRC Components</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <SectionCard
          title="Governance"
          description="Explore how organizations establish policies, procedures, and controls to ensure proper management and oversight."
          href="/governance"
          icon={Shield}
        />
        <SectionCard
          title="Risk"
          description="Learn about identifying, assessing, and mitigating risks that could impact business objectives."
          href="/risk"
          icon={AlertTriangle}
        />
        <SectionCard
          title="Compliance"
          description="Understand how organizations ensure adherence to laws, regulations, standards, and internal policies."
          href="/compliance"
          icon={CheckCircle}
        />
      </div>
    </div>
  )
}
