import schemas from "@/sanity/schemas";
import { codeInput } from "@sanity/code-input";
import { table } from "@sanity/table";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

const config = defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  title: process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE as string,
  dataset: "production",
  apiVersion: "2023-06-18",
  basePath: "/",
  plugins: [structureTool(), codeInput(), table()],
  schema: { types: schemas },
});

export default config;
