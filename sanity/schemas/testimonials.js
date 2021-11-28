import React from 'react';
import { RiArticleLine } from 'react-icons/ri';
import testimonialItem from './testimonialItem';

export default {
  title: 'Referencje',
  name: 'testimonials',
  type: 'document',
  icon: () => <RiArticleLine />,
  fields: [
    {
      type: 'array',
      name: 'testimonialItems',
      title: 'Dodaj referencje',
      of: [
        {
          name: 'testimonialItem',
          title: 'Referencje',
          type: 'testimonialItem',
        },
      ],
    },
  ],
  preview: {
    prepare: () => ({
      title: `Referencje`,
    }),
  },
};
