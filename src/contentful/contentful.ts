import contentful, { type Asset, type EntryFields } from "contentful";

export interface TypeBlogPostFields {
  title: EntryFields.Symbol;
  pubDate?: EntryFields.Date;
  description?: EntryFields.Symbol;
  content?: EntryFields.RichText;
  cardImage?: Asset;
  slug?: EntryFields.Text;
}

export interface BlogPost {
  contentTypeId: "blogPost";
  fields: TypeBlogPostFields;
}

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});
