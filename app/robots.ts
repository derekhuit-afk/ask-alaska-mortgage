import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: 'https://askalaskamortgage.ai/sitemap.xml',
    host: 'https://askalaskamortgage.ai',
  }
}
