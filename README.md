# VibeCode

[![Feature Requests](https://img.shields.io/github/issues/microsoft/vibecode/feature-request.svg)](https://github.com/microsoft/vibecode/issues?q=is%3Aopen+is%3Aissue+label%3Afeature-request+sort%3Areactions-%2B1-desc)
[![Bugs](https://img.shields.io/github/issues/microsoft/vibecode/bug.svg)](https://github.com/microsoft/vibecode/issues?utf8=✓&q=is%3Aissue+is%3Aopen+label%3Abug)
[![Gitter](https://img.shields.io/badge/chat-on%20gitter-yellow.svg)](https://gitter.im/Microsoft/vibecode)

## The Repository

This repository contains the source code for **VibeCode**, a powerful and lightweight code editor based on the Visual Studio Code - Open Source ("Val - Code") project. VibeCode is developed with the community and is available to everyone under the standard [MIT license](https://github.com/microsoft/vibecode/blob/main/LICENSE.txt).

## VibeCode

<p align="center">
  <img alt="VibeCode in action" src="https://user-images.githubusercontent.com/35271042/118224532-3842c400-b438-11eb-923d-a5f66fa6785a.png">
</p>

VibeCode is a lightweight but powerful source code editor that runs on your desktop and is available for Windows, macOS, and Linux. It comes with built-in support for JavaScript, TypeScript, and Node.js and has a rich ecosystem of extensions for other languages (such as C++, C#, Java, Python, PHP, Go) and runtimes (such as .NET and Unity).

VibeCode combines the simplicity of a code editor with what developers need for their core edit-build-debug cycle. It provides comprehensive code editing, navigation, and understanding support along with lightweight debugging, a rich extensibility model, and lightweight integration with existing tools.

VibeCode is regularly updated with new features and bug fixes. You can download it for Windows, macOS, and Linux from the [releases page](https://github.com/microsoft/vibecode/releases).

## Contributing

There are many ways in which you can participate in the VibeCode project, for example:

* [Submit bugs and feature requests](https://github.com/microsoft/vibecode/issues), and help us verify as they are checked in
* Review [source code changes](https://github.com/microsoft/vibecode/pulls)
* Review the documentation and make pull requests for anything from typos to additional and new content

If you are interested in fixing issues and contributing directly to the code base,
please see the document [How to Contribute](https://github.com/microsoft/vibecode/wiki/How-to-Contribute), which covers the following:

* How to build and run from source
* The development workflow, including debugging and running tests
* Coding guidelines
* Submitting pull requests
* Finding an issue to work on
* Contributing to translations

## Feedback

We welcome your feedback and contributions! Here's how you can get in touch:

* [File an issue](https://github.com/microsoft/vibecode/issues) for bug reports or feature requests
* Ask a question on [Stack Overflow](https://stackoverflow.com/questions/tagged/vibecode)
* Upvote [popular feature requests](https://github.com/microsoft/vibecode/issues?q=is%3Aopen+is%3Aissue+label%3Afeature-request+sort%3Areactions-%2B1-desc)
* Connect with the community on [GitHub Discussions](https://github.com/microsoft/vibecode/discussions)
* Follow our updates on [Twitter](https://twitter.com/vibecode) and let us know what you think!

## Related Projects

Many of the core components and extensions to VibeCode live in their own repositories on GitHub. The project is built on top of the Visual Studio Code - Open Source ("Val - Code") project and maintains compatibility with the VS Code extension ecosystem.

VibeCode leverages the [monaco-editor](https://github.com/microsoft/monaco-editor) which is the code editor that powers VS Code, and is compatible with extensions from the VS Code marketplace.

## Extensions

VibeCode supports the rich ecosystem of VS Code extensions. You can find and install extensions directly within the editor or browse the [VS Code Marketplace](https://marketplace.visualstudio.com/vscode).

## Bundled Extensions

VS Code includes a set of built-in extensions located in the [extensions](extensions) folder, including grammars and snippets for many languages. Extensions that provide rich language support (code completion, Go to Definition) for a language have the suffix `language-features`. For example, the `json` extension provides coloring for `JSON` and the `json-language-features` extension provides rich language support for `JSON`.

## Development Container

This repository includes a Visual Studio Code Dev Containers / GitHub Codespaces development container.

* For [Dev Containers](https://aka.ms/vscode-remote/download/containers), use the **Dev Containers: Clone Repository in Container Volume...** command which creates a Docker volume for better disk I/O on macOS and Windows.
  * If you already have VS Code and Docker installed, you can also click [here](https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/microsoft/vscode) to get started. This will cause VS Code to automatically install the Dev Containers extension if needed, clone the source code into a container volume, and spin up a dev container for use.

* For Codespaces, install the [GitHub Codespaces](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces) extension in VS Code, and use the **Codespaces: Create New Codespace** command.

Docker / the Codespace should have at least **4 Cores and 6 GB of RAM (8 GB recommended)** to run full build. See the [development container README](.devcontainer/README.md) for more information.

## Code of Conduct

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). We welcome contributions from everyone. Please help us create a welcoming and inclusive environment for all contributors.

## License

Copyright (c) Microsoft Corporation. All rights reserved.

VibeCode is released under the [MIT License](LICENSE.txt).
