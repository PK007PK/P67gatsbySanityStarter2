import React from 'react';
import { RiArticleLine } from 'react-icons/ri';

export default {
  name: 'pageONas',
  type: 'document',
  title: 'Strona "O nas"',
  icon: () => <RiArticleLine />,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'tags',
      title: 'Tagi',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
    },
    {
      title: 'Rich text',
      name: 'richText',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
    },
  ],
};
