const author = {
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "website",
      title: "Website Url",
      type: "string",
    },
    {
      name: "bio",
      title: "Bio",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
};
export default author;
