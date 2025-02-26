// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type HomepageDocumentDataSlicesSlice =
  | InstructionsSlice
  | IngredientsSlice
  | PreparationTimeSlice
  | HeroSlice;

/**
 * Content for Homepage documents
 */
interface HomepageDocumentData {
  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice> /**
   * Meta Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

export type AllDocumentTypes = HomepageDocument;

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Recipe Main Image field in *Hero → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.recipe_main_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  recipe_main_image: prismic.ImageField<never>;

  /**
   * Header field in *Hero → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Simple Omelette Recipe
   * - **API ID Path**: hero.default.primary.header
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  header: prismic.TitleField;

  /**
   * Recipe Overview field in *Hero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: A brief about the recipe
   * - **API ID Path**: hero.default.primary.recipe_overview
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  recipe_overview: prismic.RichTextField;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Primary content in *Ingredients → Default → Primary*
 */
export interface IngredientsSliceDefaultPrimary {
  /**
   * Ingredient List field in *Ingredients → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: * 1 tbsp of depression
   * - **API ID Path**: ingredients.default.primary.ingredient_list
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  ingredient_list: prismic.RichTextField;
}

/**
 * Default variation for Ingredients Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type IngredientsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<IngredientsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Ingredients*
 */
type IngredientsSliceVariation = IngredientsSliceDefault;

/**
 * Ingredients Shared Slice
 *
 * - **API ID**: `ingredients`
 * - **Description**: Ingredients
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type IngredientsSlice = prismic.SharedSlice<
  "ingredients",
  IngredientsSliceVariation
>;

/**
 * Item in *Instructions → Default → Primary → Instruction*
 */
export interface InstructionsSliceDefaultPrimaryInstructionItem {
  /**
   * Title field in *Instructions → Default → Primary → Instruction*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Mince the anxiety
   * - **API ID Path**: instructions.default.primary.instruction[].title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Description field in *Instructions → Default → Primary → Instruction*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Place the anxiety on the chopping board....
   * - **API ID Path**: instructions.default.primary.instruction[].description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;
}

/**
 * Primary content in *Instructions → Default → Primary*
 */
export interface InstructionsSliceDefaultPrimary {
  /**
   * Instruction field in *Instructions → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: instructions.default.primary.instruction[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  instruction: prismic.GroupField<
    Simplify<InstructionsSliceDefaultPrimaryInstructionItem>
  >;
}

/**
 * Default variation for Instructions Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type InstructionsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<InstructionsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Instructions*
 */
type InstructionsSliceVariation = InstructionsSliceDefault;

/**
 * Instructions Shared Slice
 *
 * - **API ID**: `instructions`
 * - **Description**: Instructions
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type InstructionsSlice = prismic.SharedSlice<
  "instructions",
  InstructionsSliceVariation
>;

/**
 * Primary content in *PreparationTime → Default → Primary*
 */
export interface PreparationTimeSliceDefaultPrimary {
  /**
   * Total Time field in *PreparationTime → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: 2 days, 4 hours
   * - **API ID Path**: preparation_time.default.primary.total_time
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  total_time: prismic.KeyTextField;

  /**
   * Prep Time field in *PreparationTime → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: 30 minutes
   * - **API ID Path**: preparation_time.default.primary.prep_time
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  prep_time: prismic.KeyTextField;

  /**
   * Cook Time field in *PreparationTime → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: 2 days, 3 hours, 30 minutes
   * - **API ID Path**: preparation_time.default.primary.cook_time
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  cook_time: prismic.KeyTextField;
}

/**
 * Default variation for PreparationTime Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PreparationTimeSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<PreparationTimeSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *PreparationTime*
 */
type PreparationTimeSliceVariation = PreparationTimeSliceDefault;

/**
 * PreparationTime Shared Slice
 *
 * - **API ID**: `preparation_time`
 * - **Description**: PreparationTime
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PreparationTimeSlice = prismic.SharedSlice<
  "preparation_time",
  PreparationTimeSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      AllDocumentTypes,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      IngredientsSlice,
      IngredientsSliceDefaultPrimary,
      IngredientsSliceVariation,
      IngredientsSliceDefault,
      InstructionsSlice,
      InstructionsSliceDefaultPrimaryInstructionItem,
      InstructionsSliceDefaultPrimary,
      InstructionsSliceVariation,
      InstructionsSliceDefault,
      PreparationTimeSlice,
      PreparationTimeSliceDefaultPrimary,
      PreparationTimeSliceVariation,
      PreparationTimeSliceDefault,
    };
  }
}
