import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: 'pwofet/neobik-site',
  },
  ui: {
    brand: {
      name: 'Neobik Admin',
    },
  },
  collections: {
    articles: collection({
      label: 'Articles de blog',
      slugField: 'title',
      path: 'content/blog/*',
      entryLayout: 'content',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Titre' } }),
        excerpt: fields.text({
          label: 'Résumé',
          multiline: true,
          description: 'Court résumé affiché sur la liste du blog (2-3 phrases)',
        }),
        publishedAt: fields.date({
          label: 'Date de publication',
          defaultValue: { kind: 'today' },
        }),
        category: fields.select({
          label: 'Catégorie',
          options: [
            { label: 'Intelligence Artificielle', value: 'ia' },
            { label: 'Entrepreneuriat', value: 'entrepreneuriat' },
            { label: 'Formation', value: 'formation' },
            { label: 'Cybersécurité', value: 'cybersecurite' },
            { label: 'Réflexion', value: 'reflexion' },
          ],
          defaultValue: 'ia',
        }),
        coverImage: fields.image({
          label: 'Image de couverture',
          directory: 'public/images/blog',
          publicPath: '/images/blog',
        }),
        featured: fields.checkbox({
          label: 'Article à la une',
          defaultValue: false,
        }),
        seoTitle: fields.text({
          label: 'Titre SEO (optionnel)',
          description: 'Si différent du titre principal',
        }),
        seoDescription: fields.text({
          label: 'Description SEO',
          multiline: true,
          description: '150-160 caractères',
        }),
        content: fields.markdoc({
          label: 'Contenu',
        }),
      },
    }),
  },
});