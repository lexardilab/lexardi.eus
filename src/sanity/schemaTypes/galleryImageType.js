// schemas/galleryImage.js
import { defineField, defineType } from "sanity";

export const galleryImageType = defineType({
  name: "galleryImage",
  title: "Galería de Imágenes",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título de la imagen",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Imagen",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "alt",
      title: "Texto alternativo",
      type: "string",
      description: "Texto alternativo para accesibilidad",
    }),
  ],
});
