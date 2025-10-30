import { defineField, defineType } from "sanity";

export const galleryType = defineType({
  name: "gallery",
  title: "Galería",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título de la galería",
      type: "string",
    }),
    defineField({
      name: "images",
      title: "Imágenes",
      type: "array",
      of: [
        {
          type: "reference", // referencia a galleryImage
          to: [{ type: "galleryImage" }],
        },
      ],
    }),
  ],
});
