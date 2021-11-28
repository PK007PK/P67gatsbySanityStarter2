import React from 'react';
import { RiArticleLine } from 'react-icons/ri';
import galleryItem from './galleryItem';

export default {
  title: 'Gallery',
  name: 'gallery',
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
      title: `Gallery`,
    }),
  },
};
