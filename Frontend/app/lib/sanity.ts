import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

export const client = createClient({
  projectId: "n5ba2mep",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-03-31",
});

export const builder = createImageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

