export type Link = { label: string; href: string }

export type Project = {
  name: string
  url?: string
  bullets: string[]
}

export type Role = {
  company: string
  title: string
  location?: string
  dateRange: string
  bullets: string[]
}

export type Education = {
  program: string
  institution?: string
  dateRange?: string
}

export type ProfileData = {
  name: string
  headline: string
  location?: string
  links: Link[]
  summary: string
  strengths: string[]
  projects: Project[]
  experience: Role[]
  education: Education[]
  hobbies: string[]
  appointmentLink: string
}

export const profileData: ProfileData = {
  name: 'Joshua Waiswa',
  headline: 'Senior Software Engineer · Backend-focused · 10+ years',
  links: [
    { label: 'Email', href: 'mailto:jwaiswa7@gmail.com' },
    { label: 'WhatsApp', href: 'https://wa.me/256771806549' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/joshua-waiswa-2a68509a/' },
    { label: 'GitHub', href: 'https://github.com/jwaiswa7' },
    { label: 'Substack', href: 'https://joshuawaiswa.substack.com/' },
  ],
  summary:
    'Senior Software Engineer with 10+ years of experience building, scaling, and operating production systems across fintech, e-commerce, banking, crypto, and B2B SaaS. I design APIs, improve database performance, and ship reliable systems on AWS. Interested in remote work, and experienced collaborating with clients and teams across time zones worldwide.',
  strengths: [
    'Backend engineering: APIs, domain modeling, integrations, background processing, reliability',
    'Database architecture & performance: schema design, indexing, query optimization, migrations',
    'Cloud & delivery: AWS deployments, CI/CD pipelines, Docker/Linux operations',
    'End-to-end ownership: discovery → implementation → testing → release → monitoring',
    'Remote collaboration: async communication, documentation, and cross-time-zone delivery with global clients',
  ],
  projects: [
    {
      name: 'Entromy',
      url: 'https://entromy.com',
      bullets: [
        'Backend/API delivery in Node.js and FastAPI (Python), including async external integrations',
        'Optimized slow SQL queries with 80%+ improvements on targeted workloads',
        'Upgraded React from 16 → 18 and added Playwright + TypeScript E2E coverage',
        'Supported CI/CD and AWS deployments; automation for reporting workflows',
      ],
    },
    {
      name: 'Tuily',
      url: 'https://tuily.com',
      bullets: [
        'Built/maintained a fintech product and web platform for business workflows',
        'Integrated Stripe webhook-driven payment workflows across services',
        'Technologies: Ruby on Rails, PostgreSQL, Redis, Sidekiq, Linux, AWS EC2',
      ],
    },
    {
      name: 'Odetta',
      url: 'https://odetta.com',
      bullets: [
        'Car sales platform with fast search/browsing; database optimization',
        'Integrated Algolia search and Stripe-related workflows',
        'Used Go for crawling/data extraction used by the product',
        'Technologies: Ruby on Rails, PostgreSQL, Redis, Sidekiq, Linux, AWS EC2',
      ],
    },
    {
      name: 'Kunstrux',
      url: 'https://kunstrux.com',
      bullets: [
        'Built backend API capabilities supporting business workflows; Agile/Scrum delivery',
        'API integrations with external/internal systems',
        'Technologies: Ruby on Rails, .NET, PostgreSQL',
      ],
    },
    {
      name: 'SkylineSMS',
      url: 'https://skylinesms.com',
      bullets: [
        'High-volume SMS gateway (~1M SMS/day) built with Ruby on Rails',
        'Linux infrastructure + production ops; C++ firmware for POS devices',
        'Technologies: Ruby on Rails, PostgreSQL, Redis, Sidekiq, Linux, AWS EC2, Twilio',
      ],
    },
  ],
  experience: [
    {
      company: 'Entromy',
      title: 'Software Engineer',
      location: 'Remote (New York, USA)',
      dateRange: 'Jun 2025 – Present',
      bullets: [
        'Built and maintained API functionality (FastAPI/Python, Node.js) including async integrations',
        'Delivered 80%+ query performance improvements on key paths',
        'Implemented Playwright + TypeScript E2E coverage to reduce regressions',
        'Supported CI/CD pipelines and AWS deployments',
      ],
    },
    {
      company: 'Koombea',
      title: 'Senior Software Engineer',
      location: 'Remote (New York, USA)',
      dateRange: 'Sep 2021 – May 2025',
      bullets: [
        'Built and operated production Rails APIs for customer-facing products',
        'Integrated Stripe webhook/event flows across Python/Rails/Node codebases',
        'Contributed to AWS infrastructure setup and CI/CD workflows',
        'Administered Databricks jobs/workflows and Unity Catalog permissions (Kunstrux)',
        'Built internal tooling integrated with NetSuite ERP',
      ],
    },
    {
      company: 'Odetta',
      title: 'Senior Software Engineer',
      location: 'Remote (Mexico City, Mexico)',
      dateRange: 'Jan 2020 – Jun 2021',
      bullets: [
        'Improved database performance and search/browsing responsiveness',
        'Built Go crawlers for inventory/data pipelines; supported Power BI reporting operations',
      ],
    },
    {
      company: 'BARS Alliance, LLC',
      title: 'Senior Software Engineer',
      location: 'Remote (Texas, USA)',
      dateRange: 'Dec 2017 – Jan 2020',
      bullets: [
        'Built and maintained cryptocurrency exchange systems (Ruby on Rails / Peatio)',
        'Deployed and operated Bitcoin/Ethereum nodes; improved observability (Grafana)',
      ],
    },
    {
      company: 'SkylineSMS Ltd',
      title: 'Software Engineer',
      location: 'Kampala, Uganda',
      dateRange: 'Jan 2015 – Oct 2017',
      bullets: [
        'Built and operated SMS gateway platform (~1M SMS/day)',
        'Managed Linux infrastructure and production operations; C++ firmware for POS devices',
      ],
    },
  ],
  education: [
    { program: 'Master of Engineering (MEng), Software Engineering', dateRange: 'Sep 2016 – Jan 2019' },
    {
      program: 'BSc Telecommunications Engineering',
      institution: 'Makerere University, Kampala',
      dateRange: '2009 – 2013',
    },
  ],
  hobbies: ['Guitar playing', 'Cycling', 'Photography'],
  // Replace this with your booking/appointment URL when ready.
  appointmentLink: 'https://calendar.app.google/LZRgnZT2znY7Xmt49',
}
