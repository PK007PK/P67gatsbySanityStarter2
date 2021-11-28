import React from 'react';
import { FiSettings } from 'react-icons/fi';

export default {
  // Computer Name
  name: 'blogPostsComponents',
  // visible title
  title: 'Opcjonalne komponenty posta',
  type: 'document',
  icon: () => <FiSettings />,
  fields: [
    {
      name: 'name',
      title: 'Nazwa komponentu',
      type: 'string',
    },
    {
      name: 'id',
      title: 'Id komponentu',
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
