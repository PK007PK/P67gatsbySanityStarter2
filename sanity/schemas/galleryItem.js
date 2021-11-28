export default {
  title: 'Gallery item',
  name: 'galleryItem',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      name: 'projectImage',
      title: 'Project image',
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
