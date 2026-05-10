import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Ovzz CMS")
    .items([
      S.listItem()
        .title("Vehicle listings")
        .schemaType("car")
        .child(S.documentTypeList("car").title("Vehicle listings")),
      S.listItem()
        .title("Homepage categories")
        .schemaType("category")
        .child(S.documentTypeList("category").title("Homepage categories")),
    ]);
