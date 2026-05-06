// src/content/config.ts
import { defineCollection, z } from 'astro:content';

// KUE-Dokumente Schema
const kueCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // Metadaten
    signatur: z.string().regex(/^KUE-[A-Z]{3}-\d{4}-\d{4}-(DE|EN)$/),
    titel: z.string(),
    kategorie: z.enum([
      'BIO', 'FND', 'SCI', 'LSC', 'TEC', 'HIS', 'GEO',
      'PHY', 'ARC', 'PSY', 'SOC', 'LNG', 'ECO', 'ORG', 'OPS', 'MET'
    ]),
    marker: z.array(z.enum(['R', 'T', 'S', 'P'])),
    sprache: z.enum(['DE', 'EN']),
    datum: z.string().transform((str) => new Date(str)),
    version: z.string().default('1.0'),
    status: z.enum(['Kanonisch', 'Entwurf', 'Revidiert']).default('Kanonisch'),
    
    // Keywords & Taxonomien
    keywords: z.array(z.string()),
    verwendet_in: z.array(z.string()).optional(),
    
    // Sichtbarkeit
    public: z.boolean().default(true),
    
    // Cross-References
    language_variants: z.array(z.string()).optional(),
    verwandte_dokumente: z.array(z.string()).optional(),
    
    // Quellen
    quellen: z.array(z.string()).optional(),
  }),
});

export const collections = {
  'kue': kueCollection,
};
