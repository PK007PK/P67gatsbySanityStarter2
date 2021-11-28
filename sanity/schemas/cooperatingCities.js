import React from 'react';
import { RiArticleLine } from 'react-icons/ri';

export default {
  title: 'Gminy',
  name: 'cooperatingCities',
  type: 'document',
  icon: () => <RiArticleLine />,
  fields: [
    {
      type: 'array',
      name: 'galleryItems',
      title: 'Add gallery items',
      of: [
        {
          name: 'galleryItem',
          title: 'Gallery item',
          type: 'galleryItem',
        },
      ],
    },
  ],
  preview: {
    prepare: () => ({
      title: `Gminy`,
    }),
  },
};
