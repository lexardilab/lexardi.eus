import { category } from "./schemaTypes/category";
import { product } from "./schemaTypes/product";
import { journal } from "./schemaTypes/journal";

export const schema = {
  types: [product, category, journal],
};
