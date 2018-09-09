# scaffolding-tool

> Use scaffolding tool to build your own front end project scaffolding

# What can scaffolding tools do?

> this scaffolding tool can be built like react-create-app, vue-cli and various front end templates.

# How to customize a front end scaffolding tool?

Referring to the idea of vue-cli, I publish the project template on git independently, then download it through scaffolding tool, get the information of new project through interaction with scaffolding, and render the project template as meta-information by interactive input, and finally get the infrastructure of the project.

Vue-cli publishes the project template as a resource independently on git, then downloads the template at run time, renders it through the template engine, and finally generates the project. The main purpose of separating the project template from the tool is that the project template is responsible for the structure and dependency configuration of the project, and the scaffolding is responsible for the construction process of the project. The two parts are not very related. By separating, the two parts can be maintained independently. If the project's structure, dependency or configuration changes, it only needs updating the project template.