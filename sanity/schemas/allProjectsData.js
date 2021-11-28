import React from 'react';
import { RiArticleLine } from 'react-icons/ri';
import projectItem from './projectItem';

export default {
  title: 'Projects details',
  name: 'allProjectsData',
  type: 'document',
  icon: () => <RiArticleLine />,
  fields: [
    {
      type: 'array',
      name: 'projectItems',
      title: 'Add project items',
      of: [
        {
          name: 'projectItem',
          title: 'Project item',
          type: 'projectItem',
        },
      ],
    },
  ],
  preview: {
    prepare: () => ({
      title: `Projects details`,
    }),
  },
};
