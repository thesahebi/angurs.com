// Service Schema for solution pages
export const createServiceSchema = (serviceName: string, description: string, url: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": serviceName,
  "description": description,
  "provider": {
    "@type": "Organization",
    "name": "Zivara LLC",
    "url": "https://zivara.io",
    "logo": "https://zivara.io/assets/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-XXX-XXX-XXXX",
      "contactType": "customer service",
      "areaServed": "US",
      "availableLanguage": "English"
    }
  },
  "url": url,
  "serviceType": "IT Services",
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  }
});

// Article Schema for blog posts
export const createArticleSchema = (title: string, description: string, url: string, datePublished: string, author: string = "Zivara Team") => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": title,
  "description": description,
  "url": url,
  "datePublished": datePublished,
  "dateModified": datePublished,
  "author": {
    "@type": "Organization",
    "name": author,
    "url": "https://zivara.io"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Zivara LLC",
    "logo": {
      "@type": "ImageObject",
      "url": "https://zivara.io/assets/logo.png"
    }
  }
});

// Organization Schema (for homepage)
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Zivara LLC",
  "url": "https://zivara.io",
  "logo": "https://zivara.io/assets/logo.png",
  "description": "Expert IT Infrastructure & Cloud Services. Transform your business with our cloud migration, virtualization, backup & recovery, networking, and automation solutions.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-XXX-XXX-XXXX",
    "contactType": "customer service",
    "areaServed": "US",
    "availableLanguage": "English"
  },
  "sameAs": [
    "https://linkedin.com/company/zivara",
    "https://twitter.com/zivara"
  ],
  "foundingDate": "2020",
  "numberOfEmployees": "10-50",
  "industry": "Information Technology"
};

// Breadcrumb Schema
export const createBreadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});
