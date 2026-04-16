import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "AskAlaskaMortgage.ai — Alaska's AI Mortgage Expert | Derek Huit",
  description: 'Get instant expert answers to Alaska mortgage questions. VA loans, AHFC programs, jumbo loans, investment property financing. Powered by 18+ years Alaska lending experience and 7 years of federal HMDA data.',
  keywords: 'Alaska mortgage, Anchorage mortgage lender, VA loan Alaska, AHFC First Home, JBER mortgage, Alaska home loan, jumbo loan Alaska, Derek Huit mortgage',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://askalaskamortgage.ai' },
}

const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FinancialService",
      "name": "Derek Huit — Alaska Mortgage Lender",
      "description": "Alaska mortgage specialist with 18+ years experience and $1B+ career production. Specializing in VA loans, AHFC programs, jumbo mortgages, and investment property financing.",
      "url": "https://askalaskamortgage.ai",
      "address": { "@type": "PostalAddress", "addressLocality": "Anchorage", "addressRegion": "AK", "addressCountry": "US" },
      "areaServed": [
        { "@type": "State", "name": "Alaska" },
        { "@type": "State", "name": "Washington" },
        { "@type": "State", "name": "Montana" }
      ],
      "serviceType": ["Mortgage Lending","VA Loans","AHFC Loans","Jumbo Mortgages","Investment Property Loans","FHA Loans","USDA Loans"],
      "employee": {
        "@type": "Person",
        "name": "Derek Huit",
        "jobTitle": "VP Retail Market Leader",
        "worksFor": { "@type": "Organization", "name": "Cardinal Financial", "legalName": "Cardinal Financial Company, NMLS #203980" }
      }
    },
    {
      "@type": "WebApplication",
      "name": "AskAlaskaMortgage.ai",
      "applicationCategory": "FinanceApplication",
      "description": "AI-powered mortgage Q&A for Alaska homebuyers, powered by 7 years of HMDA federal mortgage data and Derek Huit's 18+ years of Alaska lending expertise.",
      "url": "https://askalaskamortgage.ai",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
    }
  ]
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="JHVK0EDDnwbEDxixqUfl6RTDtT11rpM8rmV6O2Yocik" />
      
      <script src="https://accounts.huit.ai/embed.js" data-product="ask-alaska-mortgage" async></script>
      </head>
      <body style={{ margin: 0, fontFamily: 'system-ui, -apple-system, sans-serif', background: '#F9FAFB', color: '#111827' }}>
        {children}
      </body>
    </html>
  )
}
