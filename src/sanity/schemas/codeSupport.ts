const codeSupport = {
  name: "codeSupport",
  title: "CodeSupport",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      title: "Code Support Type",
      name: "codeSupportType",
      type: "string",
      options: {
        list: [
          { title: "Iframe", value: "iframe" },
          { title: "Embedded Code", value: "embeddedCode" },
          { title: "Embedded Url", value: "embeddedUrl" },
        ], // &lt;-- predefined values
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "supportedCode",
      title: "Supported Code Or Url",
      type: "text",
      validation: (Rule: any) => Rule.required(),
    },
  ],
};
export default codeSupport;
