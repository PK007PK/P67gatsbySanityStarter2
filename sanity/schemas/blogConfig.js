import React from 'react';
import { FiSettings } from 'react-icons/fi';

export default {
  name: 'blogConfig',
  type: 'document',
  title: 'Blog config',
  icon: () => <FiSettings />,
  initialValue: () => ({
    pagesInSet: 2,
  }),
  fields: [
    {
      name: 'pagesInSet',
      type: 'number',
      title: 'Number of article entries in single blog page',
    },
    {
      name: 'blankImgPLaceholder',
      title: 'Blank img placeholder',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
