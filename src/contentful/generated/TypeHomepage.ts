import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeHomepageFields {
    heroBanner?: EntryFieldTypes.AssetLink;
    title?: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.Symbol;
    actionLinkText?: EntryFieldTypes.Symbol;
    actionLinkUrl?: EntryFieldTypes.Symbol;
}

export type TypeHomepageSkeleton = EntrySkeletonType<TypeHomepageFields, "homepage">;
export type TypeHomepage<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeHomepageSkeleton, Modifiers, Locales>;
