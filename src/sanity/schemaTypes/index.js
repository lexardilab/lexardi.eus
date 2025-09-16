import { blockContentType } from "./blockContentType";
import { galleryImageType } from "./galleryImageType";
import { postType } from "./postType";
import { projectType } from "./projectType";

export const schema = {
  types: [blockContentType, postType, projectType, galleryImageType],
};
