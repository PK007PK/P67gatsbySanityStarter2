export default {
  title: 'Project item',
  name: 'projectItem',
  type: 'object',
  fields: [
    {
      title: 'Project name',
      name: 'projectName',
      type: 'string',
    },
    {
      title: 'Project subtitle',
      name: 'projectSubtitle',
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
    {
      title: 'Background color',
      name: 'backgroundColor',
      type: 'string',
    },
    {
      title: 'Color',
      name: 'color',
      type: 'string',
    },
    {
      title: 'Page link',
      name: 'pageSlug',
      type: 'string',
    },
    {
      title: 'Grupa',
      name: 'group',
      type: 'string',
    },
    {
      name: 'tags',
      title: 'Post tags',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'blogPostsTags' }] }],
    },
  ],
  preview: {
    select: {
      title: 'projectName',
    },
    prepare: (selection) => ({
      title: selection.title,
    }),
  },
};
