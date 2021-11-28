import React from 'react';
import { RiArticleLine } from 'react-icons/ri';
import menuItem from './menuItem';

export default {
  title: 'Menu strony',
  name: 'menuData',
  type: 'document',
  icon: () => <RiArticleLine />,
  fields: [
    {
      type: 'array',
      name: 'menuItems',
      title: 'Add menu items',
      of: [
        {
          name: 'menuItem',
          title: 'Menu item',
          type: 'menuItem',
        },
      ],
    },
  ],
  preview: {
    prepare: () => ({
      title: `Menu strony`,
    }),
  },
};
