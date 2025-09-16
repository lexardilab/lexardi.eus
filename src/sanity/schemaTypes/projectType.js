import { defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Proyectos",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título del proyecto",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "category",
      title: "Categoría",
      type: "string",
    }),
    defineField({
      name: "mainImage",
      title: "Imagen Principal",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
