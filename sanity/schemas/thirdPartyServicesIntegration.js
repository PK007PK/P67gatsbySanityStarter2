import React from 'react';
import { FiSettings } from 'react-icons/fi';

export default {
  name: 'thirdPartyServicesIntegration',
  type: 'document',
  title: 'Third Party Services Integration',
  icon: () => <FiSettings />,
  fields: [
    {
      name: 'mailchimpURL',
      title: 'Mailchimp URL',
      type: 'string',
    },
  ],
  preview: {
    prepare: () => ({
      title: `Third Party Services Integration`,
    }),
  },
};
