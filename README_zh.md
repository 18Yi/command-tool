# command tool

> 使用这个命令行工具定制你自己的前端工程模板

# 安装

	// npm
	npm install -g command-tool

	// yarn
	yarn global add command-tool

# 用法

	// default template demo
	command init <project-name>

	//use your github template
	command init <project-name> <github-name>/<github-project>

# 用例

此示例将从默认的url下载模板，项目名称是my-template

	command init my-template


此示例将生成一个react的模板从https://github.com/dzfrontend/react-cli

	command init my-react -r dzfrontend/react-cli

# 脚手架工具能做什么？

> 脚手架工具可以构建像react-create-app，vue-cli和各种前端定制模板，这个命令行工具是脚手架工具的基础

# 如何定制前端脚手架工具？

参照vue-cli的思路，我也将项目模板独立发布到git上，然后通过脚手架工具下载下来，经过与脚手架的交互获取新项目的信息，并将交互的输入作为元信息渲染项目模板，最终得到项目的基础结构。

vue-cli是将项目模板作为资源独立发布在git上，然后在运行的时候将模板下载下来，经过模板引擎渲染，最后生成工程。这样将项目模板与工具分离的目的主要是，项目模板负责项目的结构和依赖配置，脚手架负责项目构建的流程，这两部分并没有太大的关联，通过分离，可以确保这两部分独立维护。假如项目的结构、依赖项或者配置有变动，只需要更新项目模板即可。

参考：[《基于node.js的脚手架工具开发经历》](https://juejin.im/post/5a31d210f265da431a43330e)
