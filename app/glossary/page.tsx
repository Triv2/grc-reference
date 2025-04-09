"use client"

import { useState } from "react"
import { BookMarked, Search } from "lucide-react"
import PageHeader from "@/components/page-header"
import { Input } from "@/components/ui/input"

// Glossary terms data
const glossaryTerms = [
  {
    term: "Audit",
    definition:
      "A systematic, independent examination to determine whether activities and related results comply with planned arrangements and whether these arrangements are implemented effectively and are suitable to achieve objectives.",
  },
  {
    term: "Compliance",
    definition:
      "The state of adhering to laws, regulations, standards, and internal policies that apply to an organization.",
  },
  {
    term: "Control",
    definition:
      "A measure that modifies risk. Controls include any process, policy, device, practice, or other actions which modify risk.",
  },
  {
    term: "COBIT",
    definition:
      "Control Objectives for Information and Related Technologies. A framework created by ISACA for information technology management and IT governance.",
  },
  {
    term: "COSO",
    definition:
      "Committee of Sponsoring Organizations of the Treadway Commission. A joint initiative to combat corporate fraud that provides guidance on enterprise risk management, internal control, and fraud deterrence.",
  },
  {
    term: "Due Diligence",
    definition:
      "The investigation or exercise of care that a reasonable business or person is expected to take before entering into an agreement or contract with another party, or an act with a certain standard of care.",
  },
  {
    term: "Enterprise Risk Management (ERM)",
    definition:
      "A strategy to identify, assess, and prepare for any dangers, hazards, and other potentials for disaster that may interfere with an organization's operations and objectives.",
  },
  {
    term: "FAIR",
    definition:
      "Factor Analysis of Information Risk. A framework for understanding, analyzing, and measuring information risk.",
  },
  {
    term: "Governance",
    definition:
      "The system by which an organization is directed and controlled. It involves the processes, policies, laws, customs, and institutions that define the structure through which an organization sets and pursues its objectives.",
  },
  {
    term: "HIPAA",
    definition:
      "Health Insurance Portability and Accountability Act. A US law designed to provide privacy standards to protect patients' medical records and other health information provided to health plans, doctors, hospitals and other health care providers.",
  },
  {
    term: "ISO 27001",
    definition:
      "An international standard for information security management systems (ISMS) that provides a systematic approach to managing sensitive company information.",
  },
  {
    term: "Key Risk Indicator (KRI)",
    definition:
      "A measure used in management to indicate how risky an activity is. KRIs are metrics that provide early signals of increasing risk exposures in various areas of the organization.",
  },
  {
    term: "Maturity Model",
    definition:
      "A framework that describes the development of an organization or process over time, typically with levels representing increasing capability or sophistication.",
  },
  {
    term: "NIST CSF",
    definition:
      "National Institute of Standards and Technology Cybersecurity Framework. A voluntary framework consisting of standards, guidelines, and best practices to manage cybersecurity risk.",
  },
  {
    term: "PCI DSS",
    definition:
      "Payment Card Industry Data Security Standard. A set of security standards designed to ensure that all companies that accept, process, store, or transmit credit card information maintain a secure environment.",
  },
  {
    term: "Policy",
    definition:
      "A documented statement of intent and direction that is specified by an organization to direct decisions and achieve rational outcomes.",
  },
  {
    term: "Regulatory Compliance",
    definition:
      "The adherence to laws, regulations, guidelines and specifications relevant to an organization's business processes.",
  },
  {
    term: "Risk",
    definition:
      "The effect of uncertainty on objectives. Risk is often expressed in terms of a combination of the consequences of an event and the associated likelihood of occurrence.",
  },
  {
    term: "Risk Appetite",
    definition:
      "The amount and type of risk that an organization is willing to take in order to meet its strategic objectives.",
  },
  {
    term: "Risk Assessment",
    definition: "The overall process of risk identification, risk analysis, and risk evaluation.",
  },
  {
    term: "Risk Management",
    definition: "Coordinated activities to direct and control an organization with regard to risk.",
  },
  {
    term: "Risk Mitigation",
    definition: "The process of reducing the impact of a risk event or the likelihood of its occurrence.",
  },
  {
    term: "Risk Register",
    definition:
      "A document that records identified risks, their severity, and the actions to be taken to mitigate them.",
  },
  {
    term: "SOC 2",
    definition:
      "Service Organization Control 2. A framework for assessing and reporting on the controls at a service organization relevant to security, availability, processing integrity, confidentiality, or privacy.",
  },
  {
    term: "SOX",
    definition:
      "Sarbanes-Oxley Act. A US law that sets requirements for all US public company boards, management, and public accounting firms, particularly related to financial reporting.",
  },
  {
    term: "Stakeholder",
    definition:
      "A person or organization that can affect, be affected by, or perceive themselves to be affected by a decision or activity.",
  },
  {
    term: "Third-Party Risk Management",
    definition:
      "The process of identifying, assessing, and controlling risks presented by third parties such as vendors, suppliers, and service providers.",
  },
  {
    term: "Vulnerability",
    definition: "A weakness of an asset or control that can be exploited by one or more threats.",
  },
]

export default function GlossaryPage() {
  const [searchTerm, setSearchTerm] = useState("")

  // Filter terms based on search input
  const filteredTerms = glossaryTerms.filter(
    (item) =>
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.definition.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Group terms alphabetically
  const groupedTerms = filteredTerms.reduce(
    (acc, item) => {
      const firstLetter = item.term[0].toUpperCase()
      if (!acc[firstLetter]) {
        acc[firstLetter] = []
      }
      acc[firstLetter].push(item)
      return acc
    },
    {} as Record<string, typeof glossaryTerms>,
  )

  // Sort the keys alphabetically
  const sortedLetters = Object.keys(groupedTerms).sort()

  return (
    <div className="container py-6 md:py-10">
      <PageHeader
        title="GRC Glossary"
        description="A comprehensive glossary of terms related to Governance, Risk, and Compliance."
        icon={BookMarked}
      />

      <div className="mb-8 relative">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-muted-foreground" />
        </div>
        <Input
          type="search"
          placeholder="Search terms and definitions..."
          className="pl-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {sortedLetters.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-muted-foreground">No terms found matching your search.</p>
        </div>
      ) : (
        sortedLetters.map((letter) => (
          <div key={letter} className="mb-8">
            <h2 className="text-2xl font-bold mb-4 border-b pb-2">{letter}</h2>
            <div className="space-y-6">
              {groupedTerms[letter].map((item, index) => (
                <div key={index} className="group">
                  <h3 className="text-lg font-semibold text-primary">{item.term}</h3>
                  <p className="mt-1 text-muted-foreground">{item.definition}</p>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  )
}
