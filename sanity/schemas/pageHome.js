import React from 'react';
import { RiArticleLine } from 'react-icons/ri';

export default {
  name: 'pageHome',
  type: 'document',
  title: 'Home page data',
  icon: () => <RiArticleLine />,
  initialValue: () => ({
    title: 'Sanity Home title',
    tags: '',
    description: 'Sanity Home description',
  }),
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
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
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
      name: 'statisticsBackground',
      title: 'Statistics background',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
