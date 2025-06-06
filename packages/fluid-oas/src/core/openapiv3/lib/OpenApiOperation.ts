import {
  withCallback,
  withDeprecated,
  withDescription,
  withExternalDocs,
  withOperationId,
  withParametersArray,
  withRequestBody,
  withResponsesObject,
  withSecurityArray,
  withServersArray,
  withSummary,
  withTags,
} from "../common";
import { Base, type BaseInterface } from "./base";
import type { OpenApiDocumentation } from "./OpenApiDocumentation";
import type { OpenApiParameter } from "./OpenApiParameter";
import type { OpenApiPathItem } from "./OpenApiPathItem";
import type { OpenApiReferenceObject } from "./OpenApiReferenceObject";
import type { OpenApiRequestBody } from "./OpenApiRequestBody";
import type { OpenApiResponses } from "./OpenApiResponses";
import type { OpenApiSecurityRequirement } from "./OpenApiSecurityRequirement";
import type { OpenApiServer } from "./OpenApiServer";

const OperationBase = withCallback(
  withServersArray(
    withSecurityArray(
      withDeprecated(
        withResponsesObject(
          withRequestBody(
            withParametersArray(
              withOperationId(
                withExternalDocs(
                  withDescription(withSummary(withTags(Base)<string>()))
                )
              )
            )<OpenApiParameter>()
          )
        )
      )
    )()
  )()
);

export interface OpenApiOperation extends BaseInterface {
  addTags(tags: string[]): this;
  addSummary(summary: string): this;
  addDescription(description: string): this;
  addExternalDocs(externalDocs: OpenApiDocumentation): this;
  addOperationId(operationId: string): this;
  addParameters(
    parameters: (OpenApiParameter | OpenApiReferenceObject)[]
  ): this;
  addRequestBody(body: OpenApiRequestBody | OpenApiReferenceObject): this;
  addResponses(responses: OpenApiResponses): this;
  addDeprecated(deprecated: boolean): this;
  addSecurity(security: OpenApiSecurityRequirement[]): this;
  addServers(servers: OpenApiServer[]): this;
  addCallback(
    mappings: Partial<{
      [K in string]: OpenApiPathItem | OpenApiReferenceObject;
    }>
  ): this;
}

class _OpenApiOperation extends OperationBase implements OpenApiOperation {}

export const Operation: OpenApiOperation = new _OpenApiOperation();
