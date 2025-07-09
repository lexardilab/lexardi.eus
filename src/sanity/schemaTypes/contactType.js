// ./schemas/contactMessage.ts o .js (según tu setup)

import { defineType } from 'sanity'

export const contactType = defineType({
  name: 'contactMessage',
  title: 'Mensaje de contacto',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nombre',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'email',
      title: 'Correo electrónico',
      type: 'string',
      validation: Rule => Rule.required().email(),
    },
    {
      name: 'message',
      title: 'Mensaje',
      type: 'text',
      validation: Rule => Rule.required(),
    },
    {
      name: 'createdAt',
      title: 'Fecha de envío',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      readOnly: true,
    },
  ],
})
