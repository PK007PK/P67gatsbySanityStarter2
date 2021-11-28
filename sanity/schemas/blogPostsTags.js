import React from 'react';
import { FiSettings } from 'react-icons/fi';

export default {
  // Computer Name
  name: 'blogPostsTags',
  // visible title
  title: 'Blog post tags',
  type: 'document',
  icon: () => <FiSettings />,
  fields: [
    {
      name: 'name',
      title: 'Tag name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      required: true,
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'position',
      title: 'Position',
      type: 'number',
    },
  ],
  preview: {
    select: {
      name: 'name',
    },
    prepare: ({ name }) => ({
      title: `${name}`,
    }),
  },
};
