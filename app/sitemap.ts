import { MetadataRoute } from 'next'

const BASE = 'https://askalaskamortgage.ai'
const NOW  = new Date().toISOString().split('T')[0]

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ── Core / Home ──────────────────────────────────────────
    {
      url: BASE,
      lastModified: NOW,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    // ── VA & Military ────────────────────────────────────────
    {
      url: `${BASE}/va-loan-alaska`,
      lastModified: NOW,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/jber-military-home-loan`,
      lastModified: NOW,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    // ── Local SEO — Anchorage ────────────────────────────────
    {
      url: `${BASE}/anchorage-mortgage-lender`,
      lastModified: NOW,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/anchorage-housing-market`,
      lastModified: NOW,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    // ── Local SEO — Mat-Su Valley ────────────────────────────
    {
      url: `${BASE}/wasilla-mortgage-lender`,
      lastModified: NOW,
      changeFrequency: 'weekly',
      priority: 0.92,
    },
    {
      url: `${BASE}/palmer-mortgage-lender`,
      lastModified: NOW,
      changeFrequency: 'weekly',
      priority: 0.90,
    },
    // ── Program Guides ───────────────────────────────────────
    {
      url: `${BASE}/ahfc-loan-programs`,
      lastModified: NOW,
      changeFrequency: 'monthly',
      priority: 0.90,
    },
    {
      url: `${BASE}/alaska-first-time-homebuyer`,
      lastModified: NOW,
      changeFrequency: 'monthly',
      priority: 0.88,
    },
    {
      url: `${BASE}/alaska-refinance`,
      lastModified: NOW,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE}/alaska-investment-property`,
      lastModified: NOW,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    // ── Rate Intelligence ────────────────────────────────────
    {
      url: `${BASE}/alaska-mortgage-rates`,
      lastModified: NOW,
      changeFrequency: 'daily',
      priority: 0.92,
    },
  ]
}
