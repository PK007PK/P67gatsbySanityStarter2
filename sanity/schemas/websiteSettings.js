import React from 'react';
import { FiSettings } from 'react-icons/fi';

export default {
  name: 'websiteSettings',
  type: 'document',
  title: 'Website settings',
  icon: () => <FiSettings />,
  initialValue: () => ({
    title: 'Sanity Website title',
  }),
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      initialValue: 'Title',
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
      initialValue: 'Sanity copy',
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
  initialValue: {
    copyright: 'Def copyright',
    title: 'Def title',
  },
};
