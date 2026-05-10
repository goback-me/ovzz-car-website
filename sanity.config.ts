import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schemaTypes";
import { structure } from "./sanity/structure";

export default defineConfig({
  name: "default",
  title: "Ovzz Dealer CMS",
  basePath: "/studio",
  projectId,
  dataset,
  schema,
  plugins: [
    deskTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
