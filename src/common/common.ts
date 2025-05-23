import type { OpenApiMediaType } from "../core/common/OpenApiMedia.ts";
import type {
  OpenApiExample,
  OpenApiDocumentation,
  OpenApiOAuthFlow,
  OpenApiOAuthFlows,
  OpenApiHeader,
  OpenApiEncoding,
  OpenApiPathItem,
  OpenApiServerVariable,
  OpenApiLink,
  OpenApiServer,
  OpenApiCallback,
  OpenApiRequestBody,
  OpenApiResponse,
  OpenApiOperation,
  OpenApiParameter,
  OpenApiSecurityRequirement,
  OpenApiInfo,
  OpenApiPath,
  OpenApiContact,
  OpenApiResponses,
  OpenApiLicense,
} from "../core/index.ts";
import type { OpenApiSchema } from "../core/schema/OpenApiSchema.ts";
import type {
  GConstructor,
  OpenApiExtensionString,
  OpenApiHTTPMethod,
  OpenApiHTTPStatusCode,
  OpenApiMediaContentType,
} from "./types.ts";

/**
 * @fieldType string
 * @serializedName description
 */
export function withDescription<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _description?: string;
    description(val: string) {
      const copy: this = Object.create(this);
      copy._description = val;
      return copy;
    }
    toJSON() {
      const json = super.toJSON();
      if (this._description !== undefined) {
        Object.defineProperty(json, "description", {
          value: this._description,
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType string
 * @serializedName summary
 */
export function withSummary<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _summary?: string;
    summary(val: string) {
      const copy: this = Object.create(this);
      copy._summary = val;
      return copy;
    }
    toJSON() {
      const json = super.toJSON();
      if (this._summary !== undefined) {
        Object.defineProperty(json, "summary", {
          value: this._summary,
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType boolean
 * @serializedName allowReserved
 */
export function withAllowReserved<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _allowReserved?: boolean;
    allowReserved() {
      const copy: this = Object.create(this);
      copy._allowReserved = true;
      return copy;
    }
    toJSON() {
      const json = super.toJSON();
      if (this._allowReserved !== undefined) {
        Object.defineProperty(json, "allowReserved", {
          value: this._allowReserved,
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType boolean
 * @serializedName deprecated
 */
export function withDeprecated<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _deprecated?: boolean;
    deprecated() {
      const copy: this = Object.create(this);
      copy._deprecated = true;
      return copy;
    }
    toJSON() {
      const json = super.toJSON();
      if (this._deprecated !== undefined) {
        Object.defineProperty(json, "deprecated", {
          value: this._deprecated,
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType boolean
 * @serializedName required
 */
export function withRequired<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _required?: boolean;
    required() {
      const copy: this = Object.create(this);
      copy._required = true;
      return copy;
    }
    toJSON() {
      const json = super.toJSON();
      if (this._required !== undefined) {
        Object.defineProperty(json, "required", {
          value: this._required,
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType boolean
 * @serializedName nullable
 */
export function withNullable<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _nullable?: boolean;
    nullable() {
      const copy: this = Object.create(this);
      copy._nullable = true;
      return copy;
    }
    toJSON() {
      const json = super.toJSON();
      if (this._nullable !== undefined) {
        Object.defineProperty(json, "nullable", {
          value: this._nullable,
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType string
 * @serializedName name
 */
export function withName<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _name?: string;
    name(val: string) {
      const copy: this = Object.create(this);
      copy._name = val;
      return copy;
    }
    toJSON() {
      const json = super.toJSON();
      if (this._name !== undefined) {
        Object.defineProperty(json, "name", {
          value: this._name,
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType string
 * @serializedName namespace
 */
export function withNamespace<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _namespace?: string;
    namespace(val: string) {
      const copy: this = Object.create(this);
      copy._namespace = val;
      return copy;
    }
    toJSON() {
      const json = super.toJSON();
      if (this._namespace !== undefined) {
        Object.defineProperty(json, "namespace", {
          value: this._namespace,
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType string
 * @serializedName prefix
 */
export function withPrefix<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _prefix?: string;
    prefix(val: string) {
      const copy: this = Object.create(this);
      copy._prefix = val;
      return copy;
    }
    toJSON() {
      const json = super.toJSON();
      if (this._prefix !== undefined) {
        Object.defineProperty(json, "prefix", {
          value: this._prefix,
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType boolean
 * @serializedName wrapped
 */
export function withWrapped<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _wrapped?: boolean;
    wrapped() {
      const copy: this = Object.create(this);
      copy._wrapped = true;
      return copy;
    }
    toJSON() {
      const json = super.toJSON();
      if (this._wrapped !== undefined) {
        Object.defineProperty(json, "wrapped", {
          value: this._wrapped,
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType boolean
 * @serializedName attribute
 */
export function withAttribute<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _attribute?: boolean;
    attribute() {
      const copy: this = Object.create(this);
      copy._attribute = true;
      return copy;
    }
    toJSON() {
      const json = super.toJSON();
      if (this._attribute !== undefined) {
        Object.defineProperty(json, "attribute", {
          value: this._attribute,
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType string|unknown
 * @serializedName value
 */
export function withValue<TBase extends GConstructor>(Base: TBase) {
  return <T extends string | unknown>() => {
    return class extends Base {
      protected _value?: T;
      value(val: T) {
        const copy: this = Object.create(this);
        copy._value = val;
        return copy;
      }
      toJSON() {
        const json = super.toJSON();
        if (this._value !== undefined) {
          Object.defineProperty(json, "value", {
            value: this._value,
            enumerable: true,
          });
        }
        return json;
      }
    };
  };
}

/**
 * @fieldType string
 * @serializedName format
 */
export function withFormat<TBase extends GConstructor>(Base: TBase) {
  return <T extends string>() => {
    return class extends Base {
      protected _format?: T;
      format(val: T) {
        const copy: this = Object.create(this);
        copy._format = val;
        return copy;
      }
      toJSON() {
        const json = super.toJSON();
        if (this._format !== undefined) {
          Object.defineProperty(json, "format", {
            value: this._format,
            enumerable: true,
          });
        }
        return json;
      }
    };
  };
}

/**
 * @fieldType T
 * @serializedName default
 */
export function withDefault<TBase extends GConstructor>(Base: TBase) {
  return <T>() => {
    return class extends Base {
      protected _default?: T;
      default(val: T) {
        const copy: this = Object.create(this);
        copy._default = val;
        return copy;
      }
      toJSON() {
        const json = super.toJSON();
        if (this._default !== undefined) {
          Object.defineProperty(json, "default", {
            value: this._default,
            enumerable: true,
          });
        }
        return json;
      }
    };
  };
}

/**
 * @fieldType "apiKey"|"http"|"mutualTLS"|"oauth2"|"openIdConnect"
 * @serializedName type
 */
export function withType<TBase extends GConstructor>(Base: TBase) {
  return <
    T extends "apiKey" | "http" | "mutualTLS" | "oauth2" | "openIdConnect",
  >() => {
    return class extends Base {
      protected _type?: T;
      type(val: T) {
        const copy: this = Object.create(this);
        copy._type = val;
        return copy;
      }
      toJSON() {
        const json = super.toJSON();
        if (this._type !== undefined) {
          Object.defineProperty(json, "type", {
            value: this._type,
            enumerable: true,
          });
        }
        return json;
      }
    };
  };
}

/**
 * @fieldType T
 * @serializedName in
 */
export function withIn<TBase extends GConstructor>(Base: TBase) {
  return <T>() => {
    return class extends Base {
      protected _in?: T;
      in(val: T) {
        const copy: this = Object.create(this);
        copy._in = val;
        return copy;
      }
      toJSON() {
        const json = super.toJSON();
        if (this._in !== undefined) {
          Object.defineProperty(json, "in", {
            value: this._in,
            enumerable: true,
          });
        }
        return json;
      }
    };
  };
}

/**
 * @fieldType Map<string,string>
 * @serializedName mapping
 */
export function withMapping<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _mapping?: Map<string, string>;
    mapping(name: string) {
      return {
        with: (val: string) => {
          const copy: this = Object.create(this);
          copy._mapping = new Map(this._mapping);
          copy._mapping.set(name, val);
          return copy;
        },
      };
    }
    toJSON() {
      const json = super.toJSON();
      if (this._mapping) {
        const mappings: any = {};
        this._mapping.forEach((val, key) => {
          mappings[key] = val;
        });
        Object.defineProperty(json, "mapping", {
          value: mappings,
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType Map<string,OpenApiExample>
 * @serializedName examples
 */
export function withExamples<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _examples?: Map<string, OpenApiExample>;
    examples(name: string) {
      return {
        with: (val: OpenApiExample) => {
          const copy: this = Object.create(this);
          copy._examples = new Map(this._examples);
          copy._examples.set(name, val);
          return copy;
        },
      };
    }
    toJSON() {
      const json = super.toJSON();
      if (this._examples) {
        const mappings: any = {};
        this._examples.forEach((val, key) => {
          mappings[key] = val.toJSON();
        });
        Object.defineProperty(json, "examples", {
          value: mappings,
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType Map<OpenApiExtensionString,OpenApiSchema>
 * @serializedName extensions
 */
export function withExtensions<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _extensions?: Map<OpenApiExtensionString, OpenApiSchema>;
    extensions(name: OpenApiExtensionString) {
      return {
        with: (val: OpenApiSchema) => {
          const copy: this = Object.create(this);
          copy._extensions = new Map(this._extensions);
          copy._extensions.set(name, val);
          return copy;
        },
      };
    }
    toJSON() {
      const json = super.toJSON();
      if (this._extensions) {
        const mappings: any = {};
        this._extensions.forEach((val, key) => {
          mappings[key] = val.toJSON();
        });
        Object.defineProperty(json, "extensions", {
          value: mappings,
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType number
 * @serializedName minimum
 */
export function withMaximum<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _minimum?: number;
    minimum(val: number) {
      const copy: this = Object.create(this);
      copy._minimum = val;
      return copy;
    }
    toJSON() {
      const json = super.toJSON();
      if (this._minimum !== undefined) {
        Object.defineProperty(json, "minimum", {
          value: this._minimum,
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType number
 * @serializedName maximum
 */
export function withMinimum<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _maximum?: number;
    maximum(val: number) {
      const copy: this = Object.create(this);
      copy._maximum = val;
      return copy;
    }
    toJSON() {
      const json = super.toJSON();
      if (this._maximum !== undefined) {
        Object.defineProperty(json, "maximum", {
          value: this._maximum,
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType boolean
 * @serializedName exclusiveMinimum
 */
export function withExclusiveMinimum<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _exclusiveMinimum?: boolean;
    exclusiveMinimum() {
      const copy: this = Object.create(this);
      copy._exclusiveMinimum = true;
      return copy;
    }
    toJSON() {
      const json = super.toJSON();
      if (this._exclusiveMinimum !== undefined) {
        Object.defineProperty(json, "exclusiveMinimum", {
          value: this._exclusiveMinimum,
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType boolean
 * @serializedName exclusiveMaximum
 */
export function withExclusiveMaximum<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _exclusiveMaximum?: boolean;
    exclusiveMaximum() {
      const copy: this = Object.create(this);
      copy._exclusiveMaximum = true;
      return copy;
    }
    toJSON() {
      const json = super.toJSON();
      if (this._exclusiveMaximum !== undefined) {
        Object.defineProperty(json, "exclusiveMaximum", {
          value: this._exclusiveMaximum,
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType number
 * @serializedName multipleOf
 */
export function withMultipleOf<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _multipleOf?: number;
    multipleOf(val: number) {
      const copy: this = Object.create(this);
      copy._multipleOf = val;
      return copy;
    }
    toJSON() {
      const json = super.toJSON();
      if (this._multipleOf !== undefined) {
        Object.defineProperty(json, "multipleOf", {
          value: this._multipleOf,
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType RegExp
 * @serializedName pattern
 */
export function withPattern<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _pattern?: RegExp;
    pattern(val: RegExp) {
      const copy: this = Object.create(this);
      copy._pattern = val;
      return copy;
    }
    toJSON() {
      const json = super.toJSON();
      if (this._pattern) {
        Object.defineProperty(json, "pattern", {
          value: this._pattern.source,
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType number
 * @serializedName minLength
 */
export function withMinLength<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _minLength?: number;
    minLength(val: number) {
      const copy: this = Object.create(this);
      copy._minLength = val;
      return copy;
    }
    toJSON() {
      const json = super.toJSON();
      if (this._minLength !== undefined) {
        Object.defineProperty(json, "minLength", {
          value: this._minLength,
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType number
 * @serializedName maxLength
 */
export function withMaxLength<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _maxLength?: number;
    maxLength(val: number) {
      const copy: this = Object.create(this);
      copy._maxLength = val;
      return copy;
    }
    toJSON() {
      const json = super.toJSON();
      if (this._maxLength !== undefined) {
        Object.defineProperty(json, "maxLength", {
          value: this._maxLength,
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType string
 * @serializedName url
 */
export function withURL<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _url?: string;
    url(val: string) {
      const copy: this = Object.create(this);
      copy._url = val;
      return copy;
    }
    toJSON() {
      const json = super.toJSON();
      if (this._url !== undefined) {
        Object.defineProperty(json, "url", {
          value: this._url,
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType string
 * @serializedName propertyName
 */
export function withPropertyName<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _propertyName?: string;
    propertyName(val: string) {
      const copy: this = Object.create(this);
      copy._propertyName = val;
      return copy;
    }
    toJSON() {
      const json = super.toJSON();
      if (this._propertyName !== undefined) {
        Object.defineProperty(json, "propertyName", {
          value: this._propertyName,
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType string
 * @serializedName scheme
 */
export function withScheme<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _scheme?: string;
    scheme(val: string) {
      const copy: this = Object.create(this);
      copy._scheme = val;
      return copy;
    }
    toJSON() {
      const json = super.toJSON();
      if (this._scheme !== undefined) {
        Object.defineProperty(json, "scheme", {
          value: this._scheme,
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType string
 * @serializedName bearerFormat
 */
export function withBearerFormat<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _bearerFormat?: string;
    bearerFormat(val: string) {
      const copy: this = Object.create(this);
      copy._bearerFormat = val;
      return copy;
    }
    toJSON() {
      const json = super.toJSON();
      if (this._bearerFormat !== undefined) {
        Object.defineProperty(json, "bearerFormat", {
          value: this._bearerFormat,
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType string
 * @serializedName authorizationUrl
 */
export function withAuthorizationURL<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _authorizationUrl?: string;
    authorizationUrl(val: string) {
      const copy: this = Object.create(this);
      copy._authorizationUrl = val;
      return copy;
    }
    toJSON() {
      const json = super.toJSON();
      if (this._authorizationUrl !== undefined) {
        Object.defineProperty(json, "authorizationUrl", {
          value: this._authorizationUrl,
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType string
 * @serializedName tokenUrl
 */
export function withTokenURL<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _tokenUrl?: string;
    tokenUrl(val: string) {
      const copy: this = Object.create(this);
      copy._tokenUrl = val;
      return copy;
    }
    toJSON() {
      const json = super.toJSON();
      if (this._tokenUrl !== undefined) {
        Object.defineProperty(json, "tokenUrl", {
          value: this._tokenUrl,
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType string
 * @serializedName refreshUrl
 */
export function withRefreshURL<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _refreshUrl?: string;
    refreshUrl(val: string) {
      const copy: this = Object.create(this);
      copy._refreshUrl = val;
      return copy;
    }
    toJSON() {
      const json = super.toJSON();
      if (this._refreshUrl !== undefined) {
        Object.defineProperty(json, "refreshUrl", {
          value: this._refreshUrl,
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType Map<string,string>
 * @serializedName scopes
 */
export function withScopes<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _scopes?: Map<string, string>;
    scopes(name: string) {
      return {
        with: (val: string) => {
          const copy: this = Object.create(this);
          copy._scopes = new Map(this._scopes);
          copy._scopes.set(name, val);
          return copy;
        },
      };
    }
    toJSON() {
      const json = super.toJSON();
      if (this._scopes) {
        const mappings: any = {};
        this._scopes.forEach((val, key) => {
          mappings[key] = val;
        });
        Object.defineProperty(json, "scopes", {
          value: mappings,
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType OpenApiDocumentation
 * @serializedName externalDocs
 */
export function withExternalDocs<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _externalDocs?: OpenApiDocumentation;
    externalDocs(val: OpenApiDocumentation) {
      const copy: this = Object.create(this);
      copy._externalDocs = val;
      return copy;
    }
    toJSON() {
      const json = super.toJSON();
      if (this._externalDocs) {
        Object.defineProperty(json, "externalDocs", {
          value: this._externalDocs.toJSON(),
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType OpenApiOAuthFlow
 * @serializedName implicit
 */
export function withImplicit<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _implicit?: OpenApiOAuthFlow;
    implicit(val: OpenApiOAuthFlow) {
      const copy: this = Object.create(this);
      copy._implicit = val;
      return copy;
    }
    toJSON() {
      const json = super.toJSON();
      if (this._implicit) {
        Object.defineProperty(json, "implicit", {
          value: this._implicit.toJSON(),
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType OpenApiOAuthFlow
 * @serializedName password
 */
export function withPassword<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _password?: OpenApiOAuthFlow;
    password(val: OpenApiOAuthFlow) {
      const copy: this = Object.create(this);
      copy._password = val;
      return copy;
    }
    toJSON() {
      const json = super.toJSON();
      if (this._password) {
        Object.defineProperty(json, "password", {
          value: this._password.toJSON(),
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType OpenApiOAuthFlow
 * @serializedName clientCredentials
 */
export function withClientCredentials<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _clientCredentials?: OpenApiOAuthFlow;
    clientCredentials(val: OpenApiOAuthFlow) {
      const copy: this = Object.create(this);
      copy._clientCredentials = val;
      return copy;
    }
    toJSON() {
      const json = super.toJSON();
      if (this._clientCredentials) {
        Object.defineProperty(json, "clientCredentials", {
          value: this._clientCredentials.toJSON(),
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType OpenApiOAuthFlow
 * @serializedName authorizationCode
 */
export function withAuthorizationCode<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _authorizationCode?: OpenApiOAuthFlow;
    authorizationCode(val: OpenApiOAuthFlow) {
      const copy: this = Object.create(this);
      copy._authorizationCode = val;
      return copy;
    }
    toJSON() {
      const json = super.toJSON();
      if (this._authorizationCode) {
        Object.defineProperty(json, "authorizationCode", {
          value: this._authorizationCode.toJSON(),
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType OpenApiSchema
 * @serializedName schema
 */
export function withSchema<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _schema?: OpenApiSchema;
    schema(val: OpenApiSchema) {
      const copy: this = Object.create(this);
      copy._schema = val;
      return copy;
    }
    toJSON() {
      const json = super.toJSON();
      if (this._schema) {
        Object.defineProperty(json, "schema", {
          value: this._schema.toJSON(),
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType OpenApiOAuthFlows
 * @serializedName flows
 */
export function withFlows<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _flows?: OpenApiOAuthFlows;
    flows(val: OpenApiOAuthFlows) {
      const copy: this = Object.create(this);
      copy._flows = val;
      return copy;
    }
    toJSON() {
      const json = super.toJSON();
      if (this._flows) {
        Object.defineProperty(json, "flows", {
          value: this._flows.toJSON(),
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType OpenApiExample
 * @serializedName example
 */
export function withExample<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _example?: OpenApiExample;
    example(val: OpenApiExample) {
      const copy: this = Object.create(this);
      copy._example = val;
      return copy;
    }
    toJSON() {
      const json = super.toJSON();
      if (this._example) {
        Object.defineProperty(json, "example", {
          value: this._example.toJSON(),
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType OpenApiSchema
 * @serializedName items
 */
export function withItems<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _items?: OpenApiSchema;
    items(val: OpenApiSchema) {
      const copy: this = Object.create(this);
      copy._items = val;
      return copy;
    }
    toJSON() {
      const json = super.toJSON();
      if (this._items) {
        Object.defineProperty(json, "items", {
          value: this._items.toJSON(),
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType string
 * @serializedName openIdConnectUrl
 */
export function withOpenIdConnectURL<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _openIdConnectUrl?: string;
    openIdConnectUrl(val: string) {
      const copy: this = Object.create(this);
      copy._openIdConnectUrl = val;
      return copy;
    }
    toJSON() {
      const json = super.toJSON();
      if (this._openIdConnectUrl !== undefined) {
        Object.defineProperty(json, "openIdConnectUrl", {
          value: this._openIdConnectUrl,
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType string
 * @serializedName externalValue
 */
export function withExternalValue<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _externalValue?: string;
    externalValue(val: string) {
      const copy: this = Object.create(this);
      copy._externalValue = val;
      return copy;
    }
    toJSON() {
      const json = super.toJSON();
      if (this._externalValue !== undefined) {
        Object.defineProperty(json, "externalValue", {
          value: this._externalValue,
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType string
 * @serializedName title
 */
export function withTitle<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _title?: string;
    title(val: string) {
      const copy: this = Object.create(this);
      copy._title = val;
      return copy;
    }
    toJSON() {
      const json = super.toJSON();
      if (this._title !== undefined) {
        Object.defineProperty(json, "title", {
          value: this._title,
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType string
 * @serializedName version
 */
export function withVersion<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _version?: string;
    version(val: string) {
      const copy: this = Object.create(this);
      copy._version = val;
      return copy;
    }
    toJSON() {
      const json = super.toJSON();
      if (this._version !== undefined) {
        Object.defineProperty(json, "version", {
          value: this._version,
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType number
 * @serializedName minItems
 */
export function withMinItems<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _minItems?: number;
    minItems(val: number) {
      const copy: this = Object.create(this);
      copy._minItems = val;
      return copy;
    }
    toJSON() {
      const json = super.toJSON();
      if (this._minItems !== undefined) {
        Object.defineProperty(json, "minItems", {
          value: this._minItems,
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType number
 * @serializedName maxItems
 */
export function withMaxItems<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _maxItems?: number;
    maxItems(val: number) {
      const copy: this = Object.create(this);
      copy._maxItems = val;
      return copy;
    }
    toJSON() {
      const json = super.toJSON();
      if (this._maxItems !== undefined) {
        Object.defineProperty(json, "maxItems", {
          value: this._maxItems,
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType Map<string,OpenApiSchema>
 * @serializedName property
 */
export function withProperty<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _property?: Map<string, OpenApiSchema>;
    property(name: string) {
      return {
        with: (val: OpenApiSchema) => {
          const copy: this = Object.create(this);
          copy._property = new Map(this._property);
          copy._property.set(name, val);
          return copy;
        },
      };
    }
    toJSON() {
      const json = super.toJSON();
      if (this._property) {
        const mappings: any = {};
        this._property.forEach((val, key) => {
          mappings[key] = val.toJSON();
        });
        Object.defineProperty(json, "properties", {
          value: mappings,
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType T
 * @serializedName enum
 */
export function withEnum<TBase extends GConstructor>(Base: TBase) {
  return <T>() => {
    return class extends Base {
      protected _enum?: T[];
      enum(...val: T[]) {
        const copy: this = Object.create(this);
        copy._enum =
          this._enum === undefined ? [...val] : [...this._enum, ...val];
        return copy;
      }
      toJSON() {
        const json = super.toJSON();
        if (this._enum !== undefined) {
          Object.defineProperty(json, "enum", {
            value: this._enum,
            enumerable: true,
          });
        }
        return json;
      }
    };
  };
}

/**
 * @fieldType string
 * @serializedName style
 */
export function withStyle<TBase extends GConstructor>(Base: TBase) {
  return <T extends string>() => {
    return class extends Base {
      protected _style?: T;
      style(val: T) {
        const copy: this = Object.create(this);
        copy._style = val;
        return copy;
      }
      toJSON() {
        const json = super.toJSON();
        if (this._style !== undefined) {
          Object.defineProperty(json, "style", {
            value: this._style,
            enumerable: true,
          });
        }
        return json;
      }
    };
  };
}

/**
 * @fieldType boolean
 * @serializedName explode
 */
export function withExplode<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _explode?: boolean;
    explode() {
      const copy: this = Object.create(this);
      copy._explode = true;
      return copy;
    }
    toJSON() {
      const json = super.toJSON();
      if (this._explode !== undefined) {
        Object.defineProperty(json, "explode", {
          value: this._explode,
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType string
 * @serializedName contentType
 */
export function withContentType<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _contentType?: string;
    contentType(val: string) {
      const copy: this = Object.create(this);
      copy._contentType = val;
      return copy;
    }
    toJSON() {
      const json = super.toJSON();
      if (this._contentType !== undefined) {
        Object.defineProperty(json, "contentType", {
          value: this._contentType,
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType string
 * @serializedName operationRef
 */
export function withOperationRef<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _operationRef?: string;
    operationRef(val: string) {
      const copy: this = Object.create(this);
      copy._operationRef = val;
      return copy;
    }
    toJSON() {
      const json = super.toJSON();
      if (this._operationRef !== undefined) {
        Object.defineProperty(json, "operationRef", {
          value: this._operationRef,
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType string
 * @serializedName operationId
 */
export function withOperationId<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _operationId?: string;
    operationId(val: string) {
      const copy: this = Object.create(this);
      copy._operationId = val;
      return copy;
    }
    toJSON() {
      const json = super.toJSON();
      if (this._operationId !== undefined) {
        Object.defineProperty(json, "operationId", {
          value: this._operationId,
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType Map<string,OpenApiHeader>
 * @serializedName headers
 */
export function withHeaders<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _headers?: Map<string, OpenApiHeader>;
    headers(name: string) {
      return {
        with: (val: OpenApiHeader) => {
          const copy: this = Object.create(this);
          copy._headers = new Map(this._headers);
          copy._headers.set(name, val);
          return copy;
        },
      };
    }
    toJSON() {
      const json = super.toJSON();
      if (this._headers) {
        const mappings: any = {};
        this._headers.forEach((val, key) => {
          mappings[key] = val.toJSON();
        });
        Object.defineProperty(json, "headers", {
          value: mappings,
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType Map<OpenApiMediaContentType,OpenApiMediaType>
 * @serializedName content
 */
export function withContent<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _content?: Map<OpenApiMediaContentType, OpenApiMediaType>;
    content(name: OpenApiMediaContentType) {
      return {
        with: (val: OpenApiMediaType) => {
          const copy: this = Object.create(this);
          copy._content = new Map(this._content);
          copy._content.set(name, val);
          return copy;
        },
      };
    }
    toJSON() {
      const json = super.toJSON();
      if (this._content) {
        const mappings: any = {};
        this._content.forEach((val, key) => {
          mappings[key] = val.toJSON();
        });
        Object.defineProperty(json, "content", {
          value: mappings,
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType Map<string,OpenApiEncoding>
 * @serializedName encoding
 */
export function withEncoding<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _encoding?: Map<string, OpenApiEncoding>;
    encoding(name: string) {
      return {
        with: (val: OpenApiEncoding) => {
          const copy: this = Object.create(this);
          copy._encoding = new Map(this._encoding);
          copy._encoding.set(name, val);
          return copy;
        },
      };
    }
    toJSON() {
      const json = super.toJSON();
      if (this._encoding) {
        const mappings: any = {};
        this._encoding.forEach((val, key) => {
          mappings[key] = val.toJSON();
        });
        Object.defineProperty(json, "encoding", {
          value: mappings,
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType Map<string,OpenApiPathItem>
 * @serializedName callback
 */
export function withCallback<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _callback?: Map<string, OpenApiPathItem>;
    callback(name: string) {
      return {
        with: (val: OpenApiPathItem) => {
          const copy: this = Object.create(this);
          copy._callback = new Map(this._callback);
          copy._callback.set(name, val);
          return copy;
        },
      };
    }
    toJSON() {
      const json = super.toJSON();
      if (this._callback) {
        const mappings: any = {};
        this._callback.forEach((val, key) => {
          mappings[key] = val.toJSON();
        });
        Object.defineProperty(json, "callback", {
          value: mappings,
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType Map<string,OpenApiServerVariable>
 * @serializedName variables
 */
export function withVariables<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _variables?: Map<string, OpenApiServerVariable>;
    variables(name: string) {
      return {
        with: (val: OpenApiServerVariable) => {
          const copy: this = Object.create(this);
          copy._variables = new Map(this._variables);
          copy._variables.set(name, val);
          return copy;
        },
      };
    }
    toJSON() {
      const json = super.toJSON();
      if (this._variables) {
        const mappings: any = {};
        this._variables.forEach((val, key) => {
          mappings[key] = val.toJSON();
        });
        Object.defineProperty(json, "variables", {
          value: mappings,
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType Map<string,OpenApiLink>
 * @serializedName links
 */
export function withLinks<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _links?: Map<string, OpenApiLink>;
    links(name: string) {
      return {
        with: (val: OpenApiLink) => {
          const copy: this = Object.create(this);
          copy._links = new Map(this._links);
          copy._links.set(name, val);
          return copy;
        },
      };
    }
    toJSON() {
      const json = super.toJSON();
      if (this._links) {
        const mappings: any = {};
        this._links.forEach((val, key) => {
          mappings[key] = val.toJSON();
        });
        Object.defineProperty(json, "links", {
          value: mappings,
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType OpenApiServer
 * @serializedName server
 */
export function withServer<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _server?: OpenApiServer;
    server(val: OpenApiServer) {
      const copy: this = Object.create(this);
      copy._server = val;
      return copy;
    }
    toJSON() {
      const json = super.toJSON();
      if (this._server) {
        Object.defineProperty(json, "server", {
          value: this._server.toJSON(),
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType Map<string,OpenApiCallback>
 * @serializedName callbacks
 */
export function withCallbacks<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _callbacks?: Map<string, OpenApiCallback>;
    callbacks(name: string) {
      return {
        with: (val: OpenApiCallback) => {
          const copy: this = Object.create(this);
          copy._callbacks = new Map(this._callbacks);
          copy._callbacks.set(name, val);
          return copy;
        },
      };
    }
    toJSON() {
      const json = super.toJSON();
      if (this._callbacks) {
        const mappings: any = {};
        this._callbacks.forEach((val, key) => {
          mappings[key] = val.toJSON();
        });
        Object.defineProperty(json, "callbacks", {
          value: mappings,
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType Map<string,string>
 * @serializedName parameters
 */
export function withParameters<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _parameters?: Map<string, string>;
    parameters(name: string) {
      return {
        with: (val: string) => {
          const copy: this = Object.create(this);
          copy._parameters = new Map(this._parameters);
          copy._parameters.set(name, val);
          return copy;
        },
      };
    }
    toJSON() {
      const json = super.toJSON();
      if (this._parameters) {
        const mappings: any = {};
        this._parameters.forEach((val, key) => {
          mappings[key] = val;
        });
        Object.defineProperty(json, "parameters", {
          value: mappings,
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType string
 * @serializedName requestBody
 */
export function withRequestBodyPrimitive<TBase extends GConstructor>(
  Base: TBase
) {
  return class extends Base {
    protected _requestBody?: string;
    requestBody(val: string) {
      const copy: this = Object.create(this);
      copy._requestBody = val;
      return copy;
    }
    toJSON() {
      const json = super.toJSON();
      if (this._requestBody !== undefined) {
        Object.defineProperty(json, "requestBody", {
          value: this._requestBody,
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType OpenApiRequestBody
 * @serializedName requestBody
 */
export function withRequestBody<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _requestBody?: OpenApiRequestBody;
    requestBody(val: OpenApiRequestBody) {
      const copy: this = Object.create(this);
      copy._requestBody = val;
      return copy;
    }
    toJSON() {
      const json = super.toJSON();
      if (this._requestBody) {
        Object.defineProperty(json, "requestBody", {
          value: this._requestBody.toJSON(),
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType Map<OpenApiHTTPStatusCode,OpenApiResponse>
 * @serializedName response
 */
export function withResponses<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _response?: Map<OpenApiHTTPStatusCode, OpenApiResponse>;
    response(name: OpenApiHTTPStatusCode) {
      return {
        with: (val: OpenApiResponse) => {
          const copy: this = Object.create(this);
          copy._response = new Map(this._response);
          copy._response.set(name, val);
          return copy;
        },
      };
    }
    toJSON() {
      const json = super.toJSON();
      if (this._response) {
        this._response.forEach((val, key) => {
          Object.defineProperty(json, key, {
            value: val.toJSON(),
            enumerable: true,
          });
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType Map<OpenApiHTTPMethod,OpenApiOperation>
 * @serializedName method
 */
export function withMethods<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _method?: Map<OpenApiHTTPMethod, OpenApiOperation>;
    method(name: OpenApiHTTPMethod) {
      return {
        with: (val: OpenApiOperation) => {
          const copy: this = Object.create(this);
          copy._method = new Map(this._method);
          copy._method.set(name, val);
          return copy;
        },
      };
    }
    toJSON() {
      const json = super.toJSON();
      if (this._method) {
        this._method.forEach((val, key) => {
          Object.defineProperty(json, key, {
            value: val.toJSON(),
            enumerable: true,
          });
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType Map<string,OpenApiPathItem>
 * @serializedName endpoint
 */
export function withPath<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _endpoint?: Map<string, OpenApiPathItem>;
    endpoint(name: string) {
      return {
        with: (val: OpenApiPathItem) => {
          const copy: this = Object.create(this);
          copy._endpoint = new Map(this._endpoint);
          copy._endpoint.set(name, val);
          return copy;
        },
      };
    }
    toJSON() {
      const json = super.toJSON();
      if (this._endpoint) {
        this._endpoint.forEach((val, key) => {
          Object.defineProperty(json, key, {
            value: val.toJSON(),
            enumerable: true,
          });
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType OpenApiParameter
 * @serializedName parameters
 */
export function withParametersArray<TBase extends GConstructor>(Base: TBase) {
  return <T extends OpenApiParameter>() => {
    return class extends Base {
      protected _parameters?: T[];
      parameters(val: T) {
        const copy: this = Object.create(this);
        copy._parameters =
          this._parameters === undefined ? [val] : [...this._parameters, val];
        return copy;
      }
      toJSON() {
        const json = super.toJSON();
        if (this._parameters !== undefined) {
          Object.defineProperty(json, "parameters", {
            value: this._parameters.map(val => val.toJSON()),
            enumerable: true,
          });
        }
        return json;
      }
    };
  };
}

/**
 * @fieldType OpenApiSecurityRequirement
 * @serializedName security
 */
export function withSecurityArray<TBase extends GConstructor>(Base: TBase) {
  return <T extends OpenApiSecurityRequirement>() => {
    return class extends Base {
      protected _security?: T[];
      security(val: T) {
        const copy: this = Object.create(this);
        copy._security =
          this._security === undefined ? [val] : [...this._security, val];
        return copy;
      }
      toJSON() {
        const json = super.toJSON();
        if (this._security !== undefined) {
          Object.defineProperty(json, "security", {
            value: this._security.map(val => val.toJSON()),
            enumerable: true,
          });
        }
        return json;
      }
    };
  };
}

/**
 * @fieldType OpenApiServer
 * @serializedName servers
 */
export function withServersArray<TBase extends GConstructor>(Base: TBase) {
  return <T extends OpenApiServer>() => {
    return class extends Base {
      protected _servers?: T[];
      servers(val: T) {
        const copy: this = Object.create(this);
        copy._servers =
          this._servers === undefined ? [val] : [...this._servers, val];
        return copy;
      }
      toJSON() {
        const json = super.toJSON();
        if (this._servers !== undefined) {
          Object.defineProperty(json, "servers", {
            value: this._servers.map(val => val.toJSON()),
            enumerable: true,
          });
        }
        return json;
      }
    };
  };
}

/**
 * @fieldType T
 * @serializedName tags
 */
export function withTags<TBase extends GConstructor>(Base: TBase) {
  return <T>() => {
    return class extends Base {
      protected _tags?: T[];
      tags(...val: T[]) {
        const copy: this = Object.create(this);
        copy._tags =
          this._tags === undefined ? [...val] : [...this._tags, ...val];
        return copy;
      }
      toJSON() {
        const json = super.toJSON();
        if (this._tags !== undefined) {
          Object.defineProperty(json, "tags", {
            value: this._tags,
            enumerable: true,
          });
        }
        return json;
      }
    };
  };
}

/**
 * @fieldType T
 * @serializedName required
 */
export function withRequiredEnumerable<TBase extends GConstructor>(
  Base: TBase
) {
  return <T>() => {
    return class extends Base {
      protected _required?: T[];
      required(...val: T[]) {
        const copy: this = Object.create(this);
        copy._required =
          this._required === undefined ? [...val] : [...this._required, ...val];
        return copy;
      }
      toJSON() {
        const json = super.toJSON();
        if (this._required !== undefined) {
          Object.defineProperty(json, "required", {
            value: this._required,
            enumerable: true,
          });
        }
        return json;
      }
    };
  };
}

/**
 * @fieldType boolean
 * @serializedName additionalProperties
 */
export function withAdditionalProperties<TBase extends GConstructor>(
  Base: TBase
) {
  return class extends Base {
    protected _additionalProperties?: boolean;
    additionalProperties() {
      const copy: this = Object.create(this);
      copy._additionalProperties = true;
      return copy;
    }
    toJSON() {
      const json = super.toJSON();
      if (this._additionalProperties !== undefined) {
        Object.defineProperty(json, "additionalProperties", {
          value: this._additionalProperties,
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType Map<string,string[]>
 * @serializedName field
 */
export function withSecurityRequirement<TBase extends GConstructor>(
  Base: TBase
) {
  return class extends Base {
    protected _field?: Map<string, string[]>;
    field(name: string) {
      return {
        with: (...val: Array<string>) => {
          const copy: this = Object.create(this);
          copy._field = new Map(this._field);
          copy._field.set(name, [...val]);
          return copy;
        },
      };
    }
    toJSON() {
      const json = super.toJSON();
      if (this._field !== undefined) {
        this._field.forEach((val, key) => {
          Object.defineProperty(json, key, { value: val, enumerable: true });
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType string
 * @serializedName openapi
 */
export function withOpenApi<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _openapi?: string;
    openapi(val: string) {
      const copy: this = Object.create(this);
      copy._openapi = val;
      return copy;
    }
    toJSON() {
      const json = super.toJSON();
      if (this._openapi !== undefined) {
        Object.defineProperty(json, "openapi", {
          value: this._openapi,
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType string
 * @serializedName termsOfService
 */
export function withTermsOfService<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _termsOfService?: string;
    termsOfService(val: string) {
      const copy: this = Object.create(this);
      copy._termsOfService = val;
      return copy;
    }
    toJSON() {
      const json = super.toJSON();
      if (this._termsOfService !== undefined) {
        Object.defineProperty(json, "termsOfService", {
          value: this._termsOfService,
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType string
 * @serializedName jsonSchemaDialect
 */
export function withJSONSchemaDialect<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _jsonSchemaDialect?: string;
    jsonSchemaDialect(val: string) {
      const copy: this = Object.create(this);
      copy._jsonSchemaDialect = val;
      return copy;
    }
    toJSON() {
      const json = super.toJSON();
      if (this._jsonSchemaDialect !== undefined) {
        Object.defineProperty(json, "jsonSchemaDialect", {
          value: this._jsonSchemaDialect,
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType string
 * @serializedName email
 */
export function withEmail<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _email?: string;
    email(val: string) {
      const copy: this = Object.create(this);
      copy._email = val;
      return copy;
    }
    toJSON() {
      const json = super.toJSON();
      if (this._email !== undefined) {
        Object.defineProperty(json, "email", {
          value: this._email,
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType string
 * @serializedName identifier
 */
export function withIdentifier<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _identifier?: string;
    identifier(val: string) {
      const copy: this = Object.create(this);
      copy._identifier = val;
      return copy;
    }
    toJSON() {
      const json = super.toJSON();
      if (this._identifier !== undefined) {
        Object.defineProperty(json, "identifier", {
          value: this._identifier,
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType OpenApiInfo
 * @serializedName info
 */
export function withInfo<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _info?: OpenApiInfo;
    info(val: OpenApiInfo) {
      const copy: this = Object.create(this);
      copy._info = val;
      return copy;
    }
    toJSON() {
      const json = super.toJSON();
      if (this._info) {
        Object.defineProperty(json, "info", {
          value: this._info.toJSON(),
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType OpenApiPath
 * @serializedName paths
 */
export function withPaths<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _paths?: OpenApiPath;
    paths(val: OpenApiPath) {
      const copy: this = Object.create(this);
      copy._paths = val;
      return copy;
    }
    toJSON() {
      const json = super.toJSON();
      if (this._paths) {
        Object.defineProperty(json, "paths", {
          value: this._paths.toJSON(),
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType OpenApiContact
 * @serializedName contact
 */
export function withContact<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _contact?: OpenApiContact;
    contact(val: OpenApiContact) {
      const copy: this = Object.create(this);
      copy._contact = val;
      return copy;
    }
    toJSON() {
      const json = super.toJSON();
      if (this._contact) {
        Object.defineProperty(json, "contact", {
          value: this._contact.toJSON(),
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType OpenApiResponses
 * @serializedName responses
 */
export function withResponsesObject<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _responses?: OpenApiResponses;
    responses(val: OpenApiResponses) {
      const copy: this = Object.create(this);
      copy._responses = val;
      return copy;
    }
    toJSON() {
      const json = super.toJSON();
      if (this._responses) {
        Object.defineProperty(json, "responses", {
          value: this._responses.toJSON(),
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType OpenApiLicense
 * @serializedName license
 */
export function withLicense<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _license?: OpenApiLicense;
    license(val: OpenApiLicense) {
      const copy: this = Object.create(this);
      copy._license = val;
      return copy;
    }
    toJSON() {
      const json = super.toJSON();
      if (this._license) {
        Object.defineProperty(json, "license", {
          value: this._license.toJSON(),
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType Map<string,OpenApiPathItem>
 * @serializedName webhooks
 */
export function withWebhooks<TBase extends GConstructor>(Base: TBase) {
  return class extends Base {
    protected _webhooks?: Map<string, OpenApiPathItem>;
    webhooks(name: string) {
      return {
        with: (val: OpenApiPathItem) => {
          const copy: this = Object.create(this);
          copy._webhooks = new Map(this._webhooks);
          copy._webhooks.set(name, val);
          return copy;
        },
      };
    }
    toJSON() {
      const json = super.toJSON();
      if (this._webhooks) {
        const mappings: any = {};
        this._webhooks.forEach((val, key) => {
          mappings[key] = val.toJSON();
        });
        Object.defineProperty(json, "webhooks", {
          value: mappings,
          enumerable: true,
        });
      }
      return json;
    }
  };
}

/**
 * @fieldType T
 * @serializedName tags
 */
export function withTagsEnumerable<TBase extends GConstructor>(Base: TBase) {
  return <T>() => {
    return class extends Base {
      protected _tags?: T[];
      tags(...val: T[]) {
        const copy: this = Object.create(this);
        copy._tags =
          this._tags === undefined ? [...val] : [...this._tags, ...val];
        return copy;
      }
      toJSON() {
        const json = super.toJSON();
        if (this._tags !== undefined) {
          Object.defineProperty(json, "tags", {
            value: this._tags,
            enumerable: true,
          });
        }
        return json;
      }
    };
  };
}
