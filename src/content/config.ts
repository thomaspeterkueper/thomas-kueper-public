import { defineCollection, z } from 'astro:content';

const kueCollection = defineCollection({
  type: 'content',
  schema: z.object({
    datum: z.string(),
    titel: z.string(),
    kategorie: z.enum([
      'BIO',  // Biographical Profiles
      'SCI',  // Scientific Frameworks
      'TEC',  // Technical Specifications
      'LSC',  // Life Sciences
      'PHY',  // Physics
      'ARC',  // Architecture
      'HIS',  // History
      'GEO',  // Geography
      'PSY',  // Psychology
      'SOC',  // Sociology
      'LNG',  // Linguistics
      'ECO',  // Ecology
      'ORG',  // Organizational Models
      'OBS',  // Observations
      'FND',  // Foundational
      'OPS',  // Operations
      'MET',  // Methodology
    ]),
    marker: z.array(z.enum(['R', 'T', 'S', 'P'])),
    version: z.string(),
    status: z.string(),
    sprache: z.enum(['DE', 'EN']),
    keywords: z.array(z.string()),
    kurator: z.string(),
    signatur: z.string(),
  }),
});

export const collections = {
  kue: kueCollection,
};
