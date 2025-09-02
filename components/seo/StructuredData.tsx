/**
 * Structured Data Component for CodeButterfly Website
 * 
 * This component provides reusable structured data schemas
 * for different types of content.
 */

import React from 'react';
import { SITE_CONFIG, TEAM_MEMBERS, SERVICES } from '@/lib/seo-config';

interface StructuredDataProps {
  type: 'organization' | 'website' | 'team' | 'services' | 'breadcrumb' | 'faq';
  data?: any;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const generateStructuredData = () => {
    switch (type) {
      case 'organization':
        return {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: SITE_CONFIG.name,
          description: SITE_CONFIG.description,
          url: SITE_CONFIG.url,
          logo: `${SITE_CONFIG.url}${SITE_CONFIG.logo}`,
          image: `${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`,
          foundingDate: '2024',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'AZ',
            addressLocality: 'Baku',
          },
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'Customer Service',
            email: 'info@codebutterfly.com',
          },
          sameAs: Object.values(SITE_CONFIG.social),
          employee: TEAM_MEMBERS.map(member => ({
            '@type': 'Person',
            name: member.name,
            jobTitle: member.role,
            description: member.description,
            image: `${SITE_CONFIG.url}${member.image}`,
            sameAs: Object.values(member.social).filter(Boolean),
          })),
          makesOffer: SERVICES.map(service => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: service.name,
              description: service.description,
              category: service.category,
            },
          })),
        };

      case 'website':
        return {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: SITE_CONFIG.name,
          description: SITE_CONFIG.description,
          url: SITE_CONFIG.url,
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: `${SITE_CONFIG.url}/search?q={search_term_string}`,
            },
            'query-input': 'required name=search_term_string',
          },
          publisher: {
            '@type': 'Organization',
            name: SITE_CONFIG.name,
            logo: `${SITE_CONFIG.url}${SITE_CONFIG.logo}`,
          },
        };

      case 'team':
        return {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: SITE_CONFIG.name,
          description: 'Professional web development and design services',
          url: SITE_CONFIG.url,
          employee: TEAM_MEMBERS.map(member => ({
            '@type': 'Person',
            name: member.name,
            jobTitle: member.role,
            description: member.description,
            image: `${SITE_CONFIG.url}${member.image}`,
            sameAs: Object.values(member.social).filter(Boolean),
          })),
        };

      case 'services':
        return {
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'CodeButterfly Services',
          description: 'Professional web development and design services',
          itemListElement: SERVICES.map((service, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
              '@type': 'Service',
              name: service.name,
              description: service.description,
              category: service.category,
              provider: {
                '@type': 'Organization',
                name: SITE_CONFIG.name,
                url: SITE_CONFIG.url,
              },
            },
          })),
        };

      case 'breadcrumb':
        if (!data || !Array.isArray(data)) {
          return null;
        }
        return {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: data.map((item: any, index: number) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
          })),
        };

      case 'faq':
        if (!data || !Array.isArray(data)) {
          return null;
        }
        return {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: data.map((faq: any) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        };

      default:
        return null;
    }
  };

  const structuredData = generateStructuredData();

  if (!structuredData) {
    return null;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData;
