import { OpenApiBuilder } from "../core/OpenApiBuilder";
import { RootVisitor } from "../core/OpenApiOperator";

// Each operation on OpenApiBuilder is completely functional, so make sure to
// assign or chain operations with each visitor or builder.

// Create a new OpenApiBuilder:
let openApiBuilder = new OpenApiBuilder();

// Add the metadata for your Api:
let metadata = new RootVisitor()
  .with("info", {
    title: "Example API",
    version: "1.0.0",
    summary: "Example API Summary",
    description: "Example API Description",
    termsOfService: "https://notarealwebsite.com",
    contact: {
      email: "something@gmail.com",
      name: "Stone",
      url: "mywebsite.com",
    },
    license: {
      identifier: "MY_LICENSER",
      name: "my name",
      url: "someurl.com",
    },
  })
  .with("openApiVersion", "3.1.1");

// Finally add the metadata to the OpenApiBuilder
openApiBuilder = openApiBuilder.accept(metadata);

console.log(openApiBuilder.toString());
