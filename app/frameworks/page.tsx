import { Layers } from "lucide-react"
import PageHeader from "@/components/page-header"
import ContentSection from "@/components/content-section"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function FrameworksPage() {
  return (
    <div className="container py-6 md:py-10">
      <PageHeader
        title="GRC Frameworks"
        description="Explore common frameworks used in Governance, Risk, and Compliance to establish structured approaches to managing organizational controls."
        icon={Layers}
      />

      <ContentSection title="Common GRC Frameworks">
        <div className="space-y-4">
          <p>
            GRC frameworks provide structured approaches to managing governance, risk, and compliance activities. They
            offer guidance, methodologies, and best practices for implementing effective GRC programs. Below is a
            comparison of common GRC frameworks:
          </p>

          <div className="overflow-x-auto">
            <div className="overflow-x-auto -mx-6">
              <div className="inline-block min-w-full align-middle px-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[180px]">Framework</TableHead>
                      <TableHead>Focus Area</TableHead>
                      <TableHead>Key Components</TableHead>
                      <TableHead className="hidden md:table-cell">Best Suited For</TableHead>
                      <TableHead className="hidden md:table-cell">Certification</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">
                        COBIT (Control Objectives for Information and Related Technologies)
                      </TableCell>
                      <TableCell>IT Governance</TableCell>
                      <TableCell>
                        <ul className="list-disc pl-4">
                          <li>5 Governance and Management Domains</li>
                          <li>40 Governance and Management Processes</li>
                          <li>Focus on aligning IT with business goals</li>
                        </ul>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        Organizations seeking to align IT governance with enterprise governance
                      </TableCell>
                      <TableCell className="hidden md:table-cell">COBIT Assessor, COBIT Implementation</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">ISO 27001/27002</TableCell>
                      <TableCell>Information Security Management</TableCell>
                      <TableCell>
                        <ul className="list-disc pl-4">
                          <li>Information Security Management System (ISMS)</li>
                          <li>Risk assessment methodology</li>
                          <li>114 controls across 14 domains</li>
                        </ul>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        Organizations seeking a comprehensive framework for managing information security risks
                      </TableCell>
                      <TableCell className="hidden md:table-cell">ISO 27001 Certification</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">NIST Cybersecurity Framework (CSF)</TableCell>
                      <TableCell>Cybersecurity Risk Management</TableCell>
                      <TableCell>
                        <ul className="list-disc pl-4">
                          <li>5 Core Functions: Identify, Protect, Detect, Respond, Recover</li>
                          <li>Categories and Subcategories of outcomes</li>
                          <li>Implementation Tiers</li>
                        </ul>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        Organizations looking to improve cybersecurity risk management practices
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        No formal certification, but can be assessed against the framework
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">COSO ERM (Enterprise Risk Management)</TableCell>
                      <TableCell>Enterprise Risk Management</TableCell>
                      <TableCell>
                        <ul className="list-disc pl-4">
                          <li>
                            5 Components: Governance & Culture, Strategy & Objective-Setting, Performance, Review &
                            Revision, Information, Communication, & Reporting
                          </li>
                          <li>20 Principles across the components</li>
                        </ul>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        Organizations seeking to integrate risk management with strategy and performance
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        No formal certification, but can be assessed against the framework
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        ITIL (Information Technology Infrastructure Library)
                      </TableCell>
                      <TableCell>IT Service Management</TableCell>
                      <TableCell>
                        <ul className="list-disc pl-4">
                          <li>
                            5 Core Publications: Service Strategy, Service Design, Service Transition, Service
                            Operation, Continual Service Improvement
                          </li>
                          <li>34 Processes across the service lifecycle</li>
                        </ul>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        Organizations looking to improve IT service delivery and align with business needs
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        ITIL Foundation, Practitioner, Intermediate, Expert, Master
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>

          <h3 className="text-lg font-semibold mt-6">Framework Integration</h3>
          <p>
            Organizations often implement multiple frameworks to address different aspects of GRC. Integration of these
            frameworks can help:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Reduce duplication of effort and resources</li>
            <li>Provide a more comprehensive approach to GRC</li>
            <li>Improve alignment between different GRC activities</li>
            <li>Enhance the overall effectiveness of the GRC program</li>
          </ul>

          <p>When integrating frameworks, organizations should:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Identify overlaps and synergies between frameworks</li>
            <li>Map controls and requirements across frameworks</li>
            <li>Develop a unified governance structure</li>
            <li>Implement integrated processes and tools</li>
            <li>Establish common metrics and reporting mechanisms</li>
          </ul>

          <p>
            The selection and implementation of GRC frameworks should be based on the organization&apos;s specific needs,
            industry, regulatory environment, and maturity level. There is no one-size-fits-all approach, and
            organizations should adapt frameworks to their unique context.
          </p>
        </div>
      </ContentSection>
    </div>
  )
}
