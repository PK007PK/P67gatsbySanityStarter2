export default {
  title: 'Referencje',
  name: 'testimonialItem',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      name: 'projectImage',
      title: 'Referencje',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare: (selection) => ({
      title: selection.title,
    }),
  },
};
