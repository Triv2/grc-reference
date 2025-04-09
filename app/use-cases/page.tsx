import { FileText, Building, Rocket, AlertTriangle } from "lucide-react"
import PageHeader from "@/components/page-header"
import ContentSection from "@/components/content-section"

export default function UseCasesPage() {
  return (
    <div className="container py-6 md:py-10">
      <PageHeader
        title="GRC Use Cases"
        description="Explore real-world applications of Governance, Risk, and Compliance across different organizational contexts."
        icon={FileText}
      />

      <ContentSection title="Enterprise GRC Implementation" icon={Building}>
        <div className="space-y-4">
          <p>
            Large enterprises often implement comprehensive GRC programs to manage complex regulatory requirements,
            diverse risk landscapes, and global operations.
          </p>

          <h3 className="text-lg font-semibold mt-4">Case Study: Financial Services Organization</h3>
          <p>
            A global financial services organization implemented an integrated GRC program to address multiple
            regulatory requirements and improve risk management.
          </p>
          <h4 className="font-medium mt-2">Challenges:</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Multiple regulatory requirements (e.g., SOX, GDPR, PCI DSS, Basel III)</li>
            <li>Siloed risk and compliance functions</li>
            <li>Inconsistent processes and controls across business units</li>
            <li>Limited visibility into enterprise-wide risks</li>
            <li>High cost of compliance activities</li>
          </ul>

          <h4 className="font-medium mt-2">Approach:</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Established a centralized GRC function with executive sponsorship</li>
            <li>Implemented a common risk taxonomy and assessment methodology</li>
            <li>Deployed an integrated GRC platform for documentation, workflow, and reporting</li>
            <li>Mapped controls to multiple regulatory requirements to identify overlaps</li>
            <li>Implemented continuous monitoring for key controls</li>
            <li>Developed standardized reporting for different stakeholders</li>
          </ul>

          <h4 className="font-medium mt-2">Outcomes:</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>30% reduction in compliance costs through elimination of duplicative activities</li>
            <li>Improved risk visibility through standardized risk assessments and reporting</li>
            <li>Enhanced ability to respond to regulatory changes</li>
            <li>More efficient audit processes with centralized documentation</li>
            <li>Better alignment between risk management and business strategy</li>
          </ul>

          <p>
            This case demonstrates how an integrated approach to GRC can help large enterprises manage complex
            regulatory requirements, reduce costs, and improve risk management effectiveness.
          </p>
        </div>
      </ContentSection>

      <ContentSection title="Startup GRC Implementation" icon={Rocket}>
        <div className="space-y-4">
          <p>
            Startups and growing companies face unique GRC challenges, including limited resources, rapidly evolving
            business models, and the need to establish foundational controls while maintaining agility.
          </p>

          <h3 className="text-lg font-semibold mt-4">Case Study: Technology Startup</h3>
          <p>
            A fast-growing SaaS startup implemented a scalable GRC program to support its growth objectives and prepare
            for future regulatory requirements.
          </p>
          <h4 className="font-medium mt-2">Challenges:</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Limited resources and expertise for GRC activities</li>
            <li>Rapid growth and evolving business model</li>
            <li>Increasing customer demands for security and compliance assurances</li>
            <li>Need to prepare for future regulatory requirements</li>
            <li>Balancing compliance with innovation and agility</li>
          </ul>

          <h4 className="font-medium mt-2">Approach:</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Adopted a risk-based approach to prioritize GRC activities</li>
            <li>Implemented a lightweight GRC framework based on ISO 27001 and SOC 2</li>
            <li>Leveraged cloud-based tools for documentation and automation</li>
            <li>Integrated security and compliance requirements into the development process</li>
            <li>Established a cross-functional GRC committee with clear roles and responsibilities</li>
            <li>Developed a phased implementation plan aligned with business growth</li>
          </ul>

          <h4 className="font-medium mt-2">Outcomes:</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Successfully achieved SOC 2 Type II certification, enabling access to enterprise customers</li>
            <li>Reduced time to respond to customer security questionnaires by 70%</li>
            <li>Improved investor confidence through demonstrated risk management capabilities</li>
            <li>Established a scalable foundation for future regulatory requirements</li>
            <li>Maintained agility while improving security and compliance posture</li>
          </ul>

          <p>
            This case illustrates how startups can implement effective GRC programs that support business objectives
            without overwhelming limited resources or hindering innovation.
          </p>
        </div>
      </ContentSection>

      <ContentSection title="Pitfalls and Success Factors" icon={AlertTriangle}>
        <div className="space-y-4">
          <p>
            Implementing GRC programs comes with challenges and potential pitfalls. Understanding these challenges and
            success factors can help organizations avoid common mistakes and maximize the value of their GRC
            investments.
          </p>

          <h3 className="text-lg font-semibold mt-4">Common Pitfalls</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Siloed Implementation</strong>: Implementing governance, risk, and compliance activities in
              isolation, leading to duplication, gaps, and inefficiencies.
              <p className="text-sm text-muted-foreground mt-1">
                <em>Example</em>: A company where the compliance team focuses solely on regulatory requirements without
                considering how they relate to broader risk management or governance activities.
              </p>
            </li>
            <li>
              <strong>Overemphasis on Technology</strong>: Focusing too much on GRC tools and technology without
              addressing underlying processes, culture, and capabilities.
              <p className="text-sm text-muted-foreground mt-1">
                <em>Example</em>: An organization that invests in an expensive GRC platform but fails to define clear
                processes or train users, resulting in poor adoption and limited value.
              </p>
            </li>
            <li>
              <strong>Checkbox Compliance</strong>: Treating compliance as a checkbox exercise rather than an
              opportunity to improve risk management and business performance.
              <p className="text-sm text-muted-foreground mt-1">
                <em>Example</em>: A company that focuses on meeting the minimum requirements for compliance without
                considering the underlying risks or business objectives.
              </p>
            </li>
            <li>
              <strong>Lack of Executive Support</strong>: Implementing GRC without adequate executive sponsorship and
              leadership commitment.
              <p className="text-sm text-muted-foreground mt-1">
                <em>Example</em>: A GRC program initiated by middle management without clear executive support,
                resulting in limited resources, authority, and impact.
              </p>
            </li>
            <li>
              <strong>Failure to Adapt</strong>: Implementing rigid GRC frameworks that cannot adapt to changing
              business needs, regulatory requirements, or risk landscapes.
              <p className="text-sm text-muted-foreground mt-1">
                <em>Example</em>: An organization that implements a GRC program based on current regulations but fails
                to establish processes for monitoring and adapting to regulatory changes.
              </p>
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-4">Success Factors</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Executive Sponsorship</strong>: Securing active support and commitment from executive leadership.
              <p className="text-sm text-muted-foreground mt-1">
                <em>Example</em>: A CEO who regularly communicates the importance of GRC, allocates adequate resources,
                and holds leaders accountable for GRC outcomes.
              </p>
            </li>
            <li>
              <strong>Risk-Based Approach</strong>: Focusing GRC activities on the most significant risks to business
              objectives.
              <p className="text-sm text-muted-foreground mt-1">
                <em>Example</em>: An organization that prioritizes GRC investments based on a thorough assessment of
                risks to critical business processes and assets.
              </p>
            </li>
            <li>
              <strong>Integration</strong>: Integrating governance, risk, and compliance activities into a cohesive
              program.
              <p className="text-sm text-muted-foreground mt-1">
                <em>Example</em>: A company that establishes a unified GRC framework with common processes, terminology,
                and tools across different functions.
              </p>
            </li>
            <li>
              <strong>Business Alignment</strong>: Aligning GRC activities with business objectives and processes.
              <p className="text-sm text-muted-foreground mt-1">
                <em>Example</em>: A GRC program that is designed to support business growth, innovation, and
                performance, not just compliance.
              </p>
            </li>
            <li>
              <strong>Continuous Improvement</strong>: Establishing mechanisms for monitoring, measuring, and improving
              GRC effectiveness.
              <p className="text-sm text-muted-foreground mt-1">
                <em>Example</em>: An organization that regularly reviews and updates its GRC program based on
                performance metrics, feedback, and changing requirements.
              </p>
            </li>
          </ul>

          <p>
            By understanding these pitfalls and success factors, organizations can develop more effective GRC programs
            that deliver value to the business while managing risks and meeting compliance requirements.
          </p>
        </div>
      </ContentSection>
    </div>
  )
}
