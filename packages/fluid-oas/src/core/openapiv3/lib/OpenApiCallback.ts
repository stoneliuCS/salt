import { withCallback } from "../common";
import { Base, type BaseInterface } from "./base";
import type { OpenApiPathItem } from "./OpenApiPathItem";

const CallbackBase = withCallback(Base);

export interface OpenApiCallback extends BaseInterface {
  addCallback(mappings: Partial<{ [K in string]: OpenApiPathItem }>): this;
}

class _OpenApiCallback extends CallbackBase implements OpenApiCallback {}

export const Callback: OpenApiCallback = new _OpenApiCallback();
