import { withDescription, withExternalDocs, withName } from "../common";
import { Base, type BaseInterface } from "./base";
import type { OpenApiDocumentation } from "./OpenApiDocumentation";

const TagBase = withExternalDocs(withName(withDescription(Base)));

export interface OpenApiTag extends BaseInterface {
  addDescription(description: string): this;
  addName(name: string): this;
  addExternalDocs(docs: OpenApiDocumentation): this;
}
class _OpenApiTag extends TagBase implements OpenApiTag {}

export const Tag: {
  addName(name: string): OpenApiTag;
} = {
  addName(name: string) {
    return new _OpenApiTag().addName(name);
  },
};
