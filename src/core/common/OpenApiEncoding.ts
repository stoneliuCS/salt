import {
  withAllowReserved,
  withContentType,
  withExplode,
  withHeaders,
  withStyle,
} from "../../common/common";
import { Base } from "./base";

const EncodingBase = withAllowReserved(
  withExplode(withStyle(withHeaders(withContentType(Base)))<string>())
);

class _OpenApiEncoding extends EncodingBase {}

export function Encoding() {
  return new _OpenApiEncoding();
}
export type OpenApiEncoding = _OpenApiEncoding;
