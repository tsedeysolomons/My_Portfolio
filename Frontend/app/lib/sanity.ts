import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || "n5ba2mep",
  dataset: import.meta.env.VITE_SANITY_DATASET || "production",
  useCdn: false,
  apiVersion: import.meta.env.VITE_SANITY_API_VERSION || "2024-03-31",
  token: import.meta.env.VITE_SANITY_READ_TOKEN,
});

export const builder = createImageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

