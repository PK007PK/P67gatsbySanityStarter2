export default {
  title: 'Menu item',
  name: 'menuItem',
  type: 'object',
  fields: [
    {
      title: 'Nazwa strony do menu',
      name: 'pageName',
      type: 'string',
    },
    {
      title: 'Link do strony',
      name: 'pageSlug',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'pageName',
    },
    prepare: (selection) => ({
      title: selection.title,
    }),
  },
};
