const fs = require("fs");
const path = require("path");
const imagesFolderPath = path.join(__dirname, "images");
const springBoot = fs.readFileSync(
  path.join(imagesFolderPath, "spring-boot.svg"),
  "utf8"
);
const springFramework = fs.readFileSync(
  path.join(imagesFolderPath, "spring-framework.svg"),
  "utf8"
);
const springData = fs.readFileSync(
  path.join(imagesFolderPath, "spring-data.svg"),
  "utf8"
);
const springCloud = fs.readFileSync(
  path.join(imagesFolderPath, "spring-cloud.svg"),
  "utf8"
);
const springDataFlow = fs.readFileSync(
  path.join(imagesFolderPath, "spring-data-flow.svg"),
  "utf8"
);
const springSecurity = fs.readFileSync(
  path.join(imagesFolderPath, "spring-security.svg"),
  "utf8"
);
const springGraphql = fs.readFileSync(
  path.join(imagesFolderPath, "spring-graphql.svg"),
  "utf8"
);
const logoSession = fs.readFileSync(
  path.join(imagesFolderPath, "spring.svg"),
  "utf8"
);
const springShell = fs.readFileSync(
  path.join(imagesFolderPath, "spring-shell.svg"),
  "utf8"
);
const springKafka = fs.readFileSync(
  path.join(imagesFolderPath, "spring-kafka.svg"),
  "utf8"
);
const springFlo = fs.readFileSync(
  path.join(imagesFolderPath, "spring-flo.svg"),
  "utf8"
);
const springApache = fs.readFileSync(
  path.join(imagesFolderPath, "spring.svg"),
  "utf8"
);
const springAmqp = fs.readFileSync(
  path.join(imagesFolderPath, "spring-amqp.svg"),
  "utf8"
);
const springBatch = fs.readFileSync(
  path.join(imagesFolderPath, "spring-batch.svg"),
  "utf8"
);
const springModulith = fs.readFileSync(
  path.join(imagesFolderPath, "spring-modulith.svg"),
  "utf8"
);
const springHateos = fs.readFileSync(
  path.join(imagesFolderPath, "spring-hateoas.svg"),
  "utf8"
);
const springIntegration = fs.readFileSync(
  path.join(imagesFolderPath, "spring-integration.svg"),
  "utf8"
);
const springAutoServer = fs.readFileSync(
  path.join(imagesFolderPath, "spring-authorization-server.svg"),
  "utf8"
);

const projectsModel = [
  {
    img: springBoot,
    name: "Spring Boot",
    info: "Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible",
  },
  {
    img: springFramework,
    name: "Spring Framework",
    info: "Provides core support for dependency injection, transaction management, web apps, data access, messaging, and more.",
  },
  {
    img: springData,
    name: "Spring Data",
    info: "Provides a consistent approach to data access – relational, non-relational, map-reduce, and beyond.",
  },
  {
    img: springCloud,
    name: "Spring Cloud",
    info: "Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices.",
  },
  {
    img: springDataFlow,
    name: "Spring Cloud Data",
    info: "Provides an orchestration service for composable data microservice applications on modern runtimes.",
  },
  {
    img: springSecurity,
    name: "Spring Security",
    info: "Protects your application with comprehensive and extensible authentication and authorization support.",
  },
  {
    img: springGraphql,
    name: "Spring for GraphQL",
    info: "Spring for GraphQL provides support for Spring applications built on GraphQL Java.",
  },
  {
    img: logoSession,
    name: "Spring Session",
    info: "Provides an API and implementations for managing a user’s session information.",
  },
  {
    img: springAutoServer,
    name: "Spring Authorization Server",
    info: "Provides a secure, light-weight, and customizable foundation for building OpenID Connect 1.0 Identity Providers and OAuth2 Authorization Server products.",
  },
  {
    img: springIntegration,
    name: "Spring Integration",
    info: "Supports the well-known Enterprise Integration Patterns through lightweight messaging and declarative adapters.",
  },
  {
    img: springHateos,
    name: "Spring HATEOAS",
    info: "Simplifies creating REST representations that follow the HATEOAS principle.",
  },
  {
    img: springModulith,
    name: "Spring Modulith",
    info: "Spring Modulith allows developers to build well-structured Spring Boot applications and guides developers in finding and working with application modules driven by the domain.",
  },
  {
    img: springBatch,
    name: "Spring Batch",
    info: "Simplifies and optimizes the work of processing high-volume batch operations.",
  },
  {
    img: springAmqp,
    name: "Spring AMQP",
    info: "Applies core Spring concepts to the development of AMQP-based messaging solutions.",
  },
  {
    img: springApache,
    name: "Spring for Apache Pulsar",
    info: "Provides Familiar Spring Abstractions for Apache Pulsar.",
  },
  {
    img: springFlo,
    name: "Spring Flo",
    info: "Provides a JavaScript library that offers a basic embeddable HTML5 visual builder for pipelines and simple graphs.",
  },
  {
    img: springKafka,
    name: "Spring for Apache Kafka",
    info: "Provides Familiar Spring Abstractions for Apache Kafka.",
  },
  {
    img: springShell,
    name: "Spring Shell",
    info: "Makes writing and testing RESTful applications easier with CLI-based resource discovery and interaction.",
  },
];

module.exports = projectsModel;
