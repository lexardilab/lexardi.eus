const journal = {
  name: "journal",
  title: "Journal",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "text",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title", // Use the "name" field as the source for generating the slug
        maxLength: 96, // Adjust the maximum length as needed
      },
      validation: (Rule) => Rule.required(),
    },

    {
      name: "descriptionOne",
      title: "Description One",
      type: "text",
    },
    {
      name: "image",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true, // Allows selecting a hotspot for cropping
      },
      validation: (Rule) => Rule.required(),
    },
  ],
};

export default journal;
