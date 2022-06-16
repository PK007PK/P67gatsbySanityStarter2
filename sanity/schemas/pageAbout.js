import React from 'react';
import { RiArticleLine } from 'react-icons/ri';

export default {
  name: 'pageAbout',
  type: 'document',
  title: 'Strona "O nas"',
  icon: () => <RiArticleLine />,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Default About page title',
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
      name: 'richText',
      title: 'Main content',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
    },
  ],
};
