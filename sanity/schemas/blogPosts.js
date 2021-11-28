import React from 'react';
import { RiArticleLine } from 'react-icons/ri';

export default {
  name: 'blogPosts',
  title: 'Artykuły',
  type: 'document',
  icon: () => <RiArticleLine />,
  fields: [
    {
      name: 'name',
      title: 'Blog post title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'categories',
      title: 'Post categories',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'blogPostsCategories' }] }],
    },
    {
      name: 'tags',
      title: 'Post tags',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'blogPostsTags' }] }],
    },
    {
      title: 'Date',
      name: 'date',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
        calendarTodayLabel: 'Today',
      },
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
      title: 'Lead',
      name: 'lead',
      type: 'text',
      rows: 3,
    },
    {
      title: 'Rich text',
      name: 'richText',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
    },
    {
      name: 'components',
      title: 'Opcjonalne komponenty',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'blogPostsComponents' }] }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      categories0: 'categories.0.name',
      categories1: 'categories.1.name',
      categories2: 'categories.2.name',
      categories3: 'categories.3.name',
    },
    prepare: ({ title, media, ...categories }) => {
      // 1. Filter undefined toppings out
      const cat = Object.values(categories).filter(Boolean);
      console.log('tops ', categories);
      // 2. return the preview object for the pizza
      return {
        title,
        media,
        subtitle: cat.join(', '),
      };
    },
  },
};
