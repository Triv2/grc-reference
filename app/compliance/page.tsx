import { CheckCircle, FileCheck, Scale, ClipboardList } from "lucide-react"
import PageHeader from "@/components/page-header"
import ContentSection from "@/components/content-section"

export default function CompliancePage() {
  return (
    <div className="container py-6 md:py-10">
      <PageHeader
        title="Compliance"
        description="Compliance ensures that an organization follows relevant laws, regulations, standards, and ethical practices applicable to its business and industry."
        icon={CheckCircle}
      />

      <ContentSection title="What is Compliance?" icon={CheckCircle}>
        <div className="space-y-4">
          <p>
            Compliance refers to the state of adhering to laws, regulations, standards, and internal policies that apply
            to an organization. It involves implementing processes, controls, and systems to ensure that the
            organization meets its legal and regulatory obligations.
          </p>
          <p>Effective compliance management helps organizations:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Avoid legal penalties, fines, and sanctions</li>
            <li>Protect their reputation and maintain stakeholder trust</li>
            <li>Identify and address risks proactively</li>
            <li>Improve operational efficiency and effectiveness</li>
            <li>Create a culture of integrity and ethical behavior</li>
          </ul>
          <p>
            Compliance is not a one-time effort but an ongoing process that requires continuous monitoring, assessment,
            and improvement to address changing regulatory requirements and business environments.
          </p>
        </div>
      </ContentSection>

      <ContentSection title="Regulatory Requirements" icon={Scale}>
        <div className="space-y-4">
          <p>
            Organizations must comply with various regulatory requirements depending on their industry, location, and
            business activities. Some common regulatory frameworks include:
          </p>

          <h3 className="text-lg font-semibold mt-4">HIPAA (Health Insurance Portability and Accountability Act)</h3>
          <p>
            HIPAA establishes standards for protecting sensitive patient health information in the United States. It
            applies to healthcare providers, health plans, and healthcare clearinghouses.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Privacy Rule: Protects the privacy of individually identifiable health information</li>
            <li>Security Rule: Sets standards for securing electronic protected health information (ePHI)</li>
            <li>Breach Notification Rule: Requires notification of affected individuals following a breach</li>
            <li>Enforcement Rule: Establishes procedures for investigations and penalties for violations</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4">PCI DSS (Payment Card Industry Data Security Standard)</h3>
          <p>
            PCI DSS is a set of security standards designed to ensure that all companies that accept, process, store, or
            transmit credit card information maintain a secure environment.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Applies to any organization that handles cardholder data</li>
            <li>Includes 12 requirements organized into six control objectives</li>
            <li>Requires regular assessments, vulnerability scanning, and reporting</li>
            <li>
              Non-compliance can result in fines, increased transaction fees, or loss of card processing privileges
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-4">SOX (Sarbanes-Oxley Act)</h3>
          <p>
            SOX is a U.S. federal law that established new or expanded requirements for all U.S. public company boards,
            management, and public accounting firms, particularly related to financial reporting.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Section 302: Requires certification of financial reports by executives</li>
            <li>Section 404: Requires assessment and reporting on internal controls for financial reporting</li>
            <li>Section 802: Establishes penalties for altering or destroying records</li>
            <li>Aims to protect investors by improving the accuracy and reliability of corporate disclosures</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4">GDPR (General Data Protection Regulation)</h3>
          <p>
            GDPR is a regulation in EU law on data protection and privacy for all individuals within the European Union
            and the European Economic Area.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Applies to organizations that process personal data of EU residents, regardless of location</li>
            <li>Establishes principles for data processing, including lawfulness, fairness, and transparency</li>
            <li>Grants individuals rights over their data, including access, rectification, and erasure</li>
            <li>Requires data protection by design and by default</li>
            <li>Imposes significant penalties for non-compliance (up to 4% of global annual revenue)</li>
          </ul>

          <p>
            Organizations often need to comply with multiple regulatory requirements simultaneously, which requires a
            coordinated and integrated approach to compliance management.
          </p>
        </div>
      </ContentSection>

      <ContentSection title="Internal vs External Compliance" icon={FileCheck}>
        <div className="space-y-4">
          <p>Compliance can be categorized as internal or external, each with its own focus and requirements:</p>

          <h3 className="text-lg font-semibold mt-4">Internal Compliance</h3>
          <p>
            Internal compliance refers to adherence to an organization&apos;s own policies, procedures, standards, and
            ethical guidelines.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Policies and Procedures</strong>: Ensuring that employees follow established internal rules and
              guidelines
            </li>
            <li>
              <strong>Code of Conduct</strong>: Adhering to ethical standards and expected behaviors
            </li>
            <li>
              <strong>Corporate Governance</strong>: Following internal control frameworks and decision-making processes
            </li>
            <li>
              <strong>Quality Standards</strong>: Meeting internal quality requirements and performance metrics
            </li>
          </ul>
          <p>
            Internal compliance is often driven by organizational values, risk management objectives, and operational
            efficiency goals. It helps establish a consistent culture and set of practices across the organization.
          </p>

          <h3 className="text-lg font-semibold mt-4">External Compliance</h3>
          <p>
            External compliance refers to adherence to laws, regulations, industry standards, and contractual
            obligations imposed by external parties.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Legal Requirements</strong>: Complying with applicable laws and regulations
            </li>
            <li>
              <strong>Industry Standards</strong>: Following standards specific to the organization&apos;s industry (e.g.,
              ISO, NIST)
            </li>
            <li>
              <strong>Contractual Obligations</strong>: Meeting requirements specified in contracts with customers,
              vendors, or partners
            </li>
            <li>
              <strong>Certification Requirements</strong>: Adhering to standards required for certifications (e.g., ISO
              27001, SOC 2)
            </li>
          </ul>
          <p>
            External compliance is typically enforced through audits, assessments, and regulatory oversight.
            Non-compliance can result in legal penalties, financial losses, and reputational damage.
          </p>

          <p>
            Effective compliance management requires a balanced approach that addresses both internal and external
            requirements in an integrated manner, avoiding silos and redundancies.
          </p>
        </div>
      </ContentSection>

      <ContentSection title="Audit and Reporting" icon={ClipboardList}>
        <div className="space-y-4">
          <p>
            Audit and reporting are essential components of compliance management, providing assurance and transparency
            regarding an organization&apos;s compliance status:
          </p>

          <h3 className="text-lg font-semibold mt-4">Compliance Audits</h3>
          <p>
            Compliance audits are systematic, independent examinations to determine whether compliance activities are
            implemented effectively and meet requirements.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Internal Audits</strong>: Conducted by the organization&apos;s own audit team to assess compliance with
              internal policies and procedures
            </li>
            <li>
              <strong>External Audits</strong>: Conducted by independent third parties to assess compliance with
              external requirements
            </li>
            <li>
              <strong>Regulatory Audits</strong>: Conducted by regulatory authorities to verify compliance with specific
              regulations
            </li>
            <li>
              <strong>Certification Audits</strong>: Conducted to obtain or maintain certifications (e.g., ISO, SOC)
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-4">Compliance Reporting</h3>
          <p>
            Compliance reporting involves documenting and communicating compliance status, issues, and activities to
            relevant stakeholders.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Regulatory Reporting</strong>: Submitting required reports to regulatory authorities
            </li>
            <li>
              <strong>Board Reporting</strong>: Providing compliance updates to the board of directors or audit
              committee
            </li>
            <li>
              <strong>Management Reporting</strong>: Informing management about compliance status and issues
            </li>
            <li>
              <strong>Public Reporting</strong>: Disclosing compliance information to the public (e.g., in annual
              reports or sustainability reports)
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-4">Continuous Monitoring</h3>
          <p>
            Continuous monitoring involves ongoing surveillance of compliance controls and activities to ensure they
            remain effective.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Automated Monitoring</strong>: Using technology to continuously monitor compliance with specific
              requirements
            </li>
            <li>
              <strong>Key Risk Indicators (KRIs)</strong>: Tracking metrics that provide early warning of potential
              compliance issues
            </li>
            <li>
              <strong>Control Testing</strong>: Regularly testing controls to ensure they are functioning as intended
            </li>
            <li>
              <strong>Compliance Dashboards</strong>: Visualizing compliance status and trends for easy monitoring
            </li>
          </ul>

          <p>
            Effective audit and reporting processes help organizations identify compliance gaps, demonstrate due
            diligence, and continuously improve their compliance posture. They also provide valuable insights for risk
            management and strategic decision-making.
          </p>
        </div>
      </ContentSection>
    </div>
  )
}
