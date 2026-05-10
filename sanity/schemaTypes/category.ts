import { defineField, defineType } from "sanity";

export const categoryType = defineType({
  name: "category",
  title: "Category",
  type: "document",
  groups: [
    { name: "basic", title: "Basic Info", default: true },
    { name: "media", title: "Image" },
  ],
  fields: [
    defineField({
      name: "name",
      title: "Category name",
      type: "string",
      group: "basic",
      description: "Use the display name shown on the homepage, like SUVs or Sedans.",
      validation: (rule) => rule.required().min(3).max(50),
    }),
    defineField({
      name: "slug",
      title: "URL slug",
      type: "slug",
      group: "basic",
      description: "Auto-generated from the category name.",
      options: { source: "name", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      group: "basic",
      rows: 3,
      description: "A short explanation of what kinds of cars belong in this category.",
    }),
    defineField({
      name: "image",
      title: "Category image",
      type: "image",
      group: "media",
      description: "Upload one image for the homepage card. If you leave it empty, the site will use a fallback image.",
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: "Homepage category",
        media,
      };
    },
  },
});
