import { MetadataRoute } from 'next'

const BASE = 'https://askalaskamortgage.ai'
const NOW  = new Date().toISOString().split('T')[0]

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE,                                    lastModified: NOW, changeFrequency: 'daily',   priority: 1.0  },
    { url: `${BASE}/va-loan-alaska`,                lastModified: NOW, changeFrequency: 'weekly',  priority: 0.95 },
    { url: `${BASE}/jber-military-home-loan`,       lastModified: NOW, changeFrequency: 'weekly',  priority: 0.95 },
    { url: `${BASE}/anchorage-mortgage-lender`,     lastModified: NOW, changeFrequency: 'weekly',  priority: 0.95 },
    { url: `${BASE}/alaska-mortgage-rates`,         lastModified: NOW, changeFrequency: 'daily',   priority: 0.92 },
    { url: `${BASE}/wasilla-mortgage-lender`,       lastModified: NOW, changeFrequency: 'weekly',  priority: 0.92 },
    { url: `${BASE}/palmer-mortgage-lender`,        lastModified: NOW, changeFrequency: 'weekly',  priority: 0.90 },
    { url: `${BASE}/ahfc-loan-programs`,            lastModified: NOW, changeFrequency: 'monthly', priority: 0.90 },
    { url: `${BASE}/alaska-first-time-homebuyer`,   lastModified: NOW, changeFrequency: 'monthly', priority: 0.88 },
    { url: `${BASE}/alaska-refinance`,              lastModified: NOW, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/alaska-investment-property`,    lastModified: NOW, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/anchorage-housing-market`,      lastModified: NOW, changeFrequency: 'weekly',  priority: 0.85 },
  ]
}
