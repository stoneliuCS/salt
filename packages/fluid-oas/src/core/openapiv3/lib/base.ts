import {
  withExtensions,
  withNullable,
  withExample,
  withExternalDocs,
  withDescription,
  withEnum,
  withDefault,
  withExamples,
  withReadOnly,
  withWriteOnly,
} from "../common";
import type { OpenApiSchema } from "../schema";
import type { OpenApiExtensionString } from "../types";
import type { OpenApiDocumentation } from "./OpenApiDocumentation";
import type { OpenApiExample } from "./OpenApiExample";

export class Root {
  toJSON(): unknown {
    return {};
  }
  override(overrideVal: unknown) {
    const copy: this = Object.create(this);
    copy.toJSON = () => JSON.stringify(overrideVal);
    return copy;
  }
}

export interface RootInterface {
  /**
   * Serializes the object into its equivalent OpenApi JSON value.
   */
  toJSON(): unknown;
  /**
   * Overrides the toJSON method for a custom serialization.
   *
   * WARNING: overrideVal must be serializable and future changes are subject to breaking.
   *
   * @param overrideVal - Overrides the serialization of this object into this value.
   */
  override(overrideVal: unknown): this;
}

export interface BaseInterface extends RootInterface {
  /**
   * Extend the specification with an extension object schema.
   *
   * @param mappings - key value mappings with names MUST beginning with "x-"
   */
  addExtensions(mappings: {
    [K in OpenApiExtensionString]: OpenApiSchema;
  }): this;
}

export interface SchemaInterface<T> extends BaseInterface {
  /**
   * Adds a description to this OpenApiSchema
   *
   * @param description - Description
   */
  addDescription(description: string): this;
  /**
   * Adds an external documentation to this OpenApiSchema
   *
   * @param docs - Documentation to add to this schema.
   */
  addExternalDocs(docs: OpenApiDocumentation): this;
  addExample(example: any): this;
  addEnums(val: (T | null)[]): this;
  addDefault(val: T): this;
  addReadOnly(readOnly: boolean): this;
  addWriteOnly(writeOnly: boolean): this;
  /**
   * As of v3.1.0 this has been removed. Still available for v3.0.* OAS
   */
  addNullable(nullable: boolean): this;
}

// Base Class which all OpenApi Definitions will inherit.
const _Base = withExtensions(Root);
export class Base extends _Base implements BaseInterface {}

// Some Mixins are HOF generic functions allowing for maximum flexibility.
const _SchemaBase = withDefault(
  withEnum(
    withNullable(
      withWriteOnly(
        withReadOnly(
          withExamples(withExample(withExternalDocs(withDescription(Base))))
        )
      )
    )
  )()
)();

export class SchemaBase<T> extends _SchemaBase implements SchemaInterface<T> {}
