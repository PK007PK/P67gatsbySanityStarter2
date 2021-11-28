import React from 'react';
import { FiSettings } from 'react-icons/fi';

export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  icon: () => <FiSettings />,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      title: 'Website logo',
      name: 'websiteLogo',
      type: 'image',
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
    {
      title: 'SVG Favicon',
      name: 'svgFavicon',
      type: 'image',
      options: {
        hotspot: true, // <-- Defaults to false
        accept: '.svg',
      },
    },
    {
      title: 'Site preview for social sharing',
      name: 'sitePreviev',
      type: 'image',
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
    {
      name: 'lang',
      type: 'string',
      title: 'Language',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Describe your blog for search engines and social media.',
    },
    {
      name: 'copyright',
      type: 'string',
      title: "Copyright's name",
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'Add keywords that describes your blog.',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
  ],
};
