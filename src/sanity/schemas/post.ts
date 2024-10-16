import { defineArrayMember } from "sanity";

const post = {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        unique: true,
        slugify: (input: any) => {
          return input
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]+/g, "");
        },
      },
      validation: (Rule: any) =>
        Rule.required().custom((fields: any) => {
          if (
            fields?.current !== fields?.current?.toLowerCase() ||
            fields?.current.split(" ").includes("")
          ) {
            return "Slug must be lowercase and not be included space";
          }
          return true;
        }),
    },
    {
      name: "tags",
      title: "Tag",
      type: "array",
      of: [
        defineArrayMember({
          name: "tag",
          type: "reference",
          to: { type: "tag" },
        }),
      ],
    },
    {
      name: "categories",
      title: "Category",
      type: "array",
      of: [
        defineArrayMember({
          name: "category",
          type: "reference",
          to: { type: "category" },
        }),
      ],
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
      // validation: (Rule: any) => Rule.required(),
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
      validation: (Rule: any) => Rule.required(),
    },
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection: any) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
export default post;
