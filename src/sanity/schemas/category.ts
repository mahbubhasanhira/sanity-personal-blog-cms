const category = {
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule: any) => rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "string",
      options: {
        source: "name",
        slugify: (input: any) => {
          return input
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]+/g, "");
        },
      },
      validation: (Rule: any) => {
        Rule.required();
        Rule.custom((fields: any) => {
          if (
            fields !== fields?.toLowerCase() ||
            fields.split(" ").includes("")
          ) {
            return "Slug must be lowercase and not be included space";
          }
          return true;
        });
      },
    },
    {
      name: "ogImage",
      title: "Open Graph Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "ogTitle",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
  ],
};
export default category;
