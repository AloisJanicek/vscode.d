import * as vscode from "vscode";
import { initUsePackage, usePackage, configSet, keymapSet } from "vscode-use-package";

export function init(context: vscode.ExtensionContext) {

    initUsePackage(context);

    configSet({
        "less.validate": false,
        "scss.validate": false,
        "typescript.preferences.quoteStyle": "single",
        "[javascript]": {
            "editor.formatOnSave": false
        },
        "[typescript]": {
            "editor.formatOnSave": false
        },
        "[css]": {
            "editor.formatOnSave": false
        },
        "[scss]": {
            "editor.formatOnSave": false
        },
        "[javascriptreact]": {
            "editor.formatOnSave": false
        },
        "[typescriptreact]": {
            "editor.formatOnSave": false
        },
        "breadcrumbs.enabled": false,
        "git.path": "C:\\BIN\\git.exe",
        "update.showReleaseNotes": false,
        "window.zoomLevel": 0
    });

    configSet("editor", {
        "codeActionsOnSave": {
            "source.fixAll.eslint": true,
            "source.fixAll.tslint": true,
            "source.fixAll.stylelint": true
        },
        "fontFamily": "JetBrains Mono",
        "fontLigatures": false,
        "fontSize": 14,
        "formatOnPaste": true,
        "formatOnSave": true,
        "formatOnType": true,
        "lineNumbers": "on",
        "minimap.enabled": false,
        "suggestSelection": "first",
        "tabSize": 2,
    });

    configSet("terminal", {
        "integrated.shell.linux": "/bin/bash",
        "external.linuxExec": "konsole",
    });

    configSet("css", {
        "validate": false,
    });

    configSet("explorer", {
        "confirmDelete": false,
    });

    configSet("javascript", {
        "format.enable": false,
        "preferences.quoteStyle": "single",
        "suggest.completeFunctionCalls": true,
    });

    configSet("emmet", {
        "includeLanguages": {
            "javascript": "html"
        },
    });

    configSet("telemetry", {
        "enableCrashReporter": false,
        "enableTelemetry": false,
    });

    configSet("workbench", {
        "activityBar.visible": true,
        "editor.minimap.enabled": false,
        "editor.enablePreview": false,
        "editor.highlightModifiedTabs": true,
        "editor.showIcons": false,
        "editor.showTabs": true,
        "enableExperiments": false,
        "tips.enabled": false,
    });

    // lit-html
    // https://marketplace.visualstudio.com/items?itemName=bierner.lit-html
    // Syntax highlighting and IntelliSense for html inside of JavaScript and TypeScript tagged template strings
    usePackage("bierner.lit-html", {

    });

    // BEM Helper
    // https://marketplace.visualstudio.com/items?itemName=Box-Of-Hats.bemhelper
    // Improve writing html using BEM naming conventions.
    usePackage("Box-Of-Hats.bemhelper", {

    });

    // Tailwind CSS IntelliSense
    // https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss
    // Tailwind CSS class name completion
    usePackage("bradlc.vscode-tailwindcss", {
        scope: "tailwindCSS",
        config: {
            "emmetCompletions": true
        }
    });

    // Headwind
    // https://marketplace.visualstudio.com/items?itemName=heybourn.headwind
    // An opinionated class sorter for Tailwind CSS
    usePackage("heybourn.headwind", {

    });

    // Simple React Snippets
    // https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets
    // Dead simple React snippets you will actually use
    usePackage("burkeholland.simple-react-snippets", {

    });

    // npm Intellisense
    // https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense
    // Visual Studio Code plugin that autocompletes npm modules in import statements
    usePackage("christian-kohler.npm-intellisense", {

    });

    // Bracket Pair Colorizer 2
    // https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2
    // A customizable extension for colorizing matching brackets
    usePackage("CoenraadS.bracket-pair-colorizer-2", {
        config: {
            "colorMode": "Consecutive"
        }
    });

    // Vue Peek
    // https://marketplace.visualstudio.com/items?itemName=dariofuzinato.vue-peek
    // Allows peek and goto definition for Vue single-file components.
    usePackage("dariofuzinato.vue-peek", {

    });

    // ESLint
    // https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
    // Integrates ESLint JavaScript into VS Code.
    usePackage("dbaeumer.vscode-eslint", {
        scope: "eslint",
        config: {
            "alwaysShowStatus": true
        }
    });

    // TSLint
    // https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin
    // TSLint support for Visual Studio Code
    usePackage("ms-vscode.vscode-typescript-tslint-plugin", {
    });

    // Dash
    // https://marketplace.visualstudio.com/items?itemName=deerawan.vscode-dash
    // Dash, Zeal and Velocity integration in Visual Studio Code
    usePackage("deerawan.vscode-dash", {

    });

    // // GitLens — Git supercharged
    // // https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens
    // // Supercharge the Git capabilities built into Visual Studio Code
    // usePackage("eamodio.gitlens", {
    // });


    // Magit
    // https://marketplace.visualstudio.com/items?itemName=kahole.magit
    // Magit for Visual Studio Code
    usePackage("kahole.magit", {
        keymap: [
            {
                key: "tab",
                command: "extension.vim_tab",
                when: "editorFocus && vim.active && !inDebugRepl && vim.mode != 'Insert' && !editorLangId == 'magit'"
            },
            {
                key: "tab",
                command: "-extension.vim_tab",
                when: "editorFocus && vim.active && !inDebugRepl && vim.mode != 'Insert'"
            },
            {
                key: "o",
                command: "magit.discard-at-point",
                when: "editorTextFocus && editorLangId == 'magit'"
            },
            {
                key: "k",
                command: "-magit.discard-at-point",
                when: "editorTextFocus && editorLangId == 'magit'"
            }
        ]

    });

    // EditorConfig for VS Code
    // https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
    // EditorConfig Support for Visual Studio Code
    usePackage("EditorConfig.EditorConfig", {

    });

    // Prettier - Code formatter
    // https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
    // Code formatter using prettier
    usePackage("esbenp.prettier-vscode", {
        scope: "prettier",
        config: {
            "disabledLanguages": [
                "javascript",
                "typescript",
                "css"
            ],
            "singleQuote": true
        }
    });

    // vscode-styled-components
    // https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components
    // Syntax highlighting for styled-components
    usePackage("jpoissonnier.vscode-styled-components", {

    });

    // Tailwind sass syntax
    // https://marketplace.visualstudio.com/items?itemName=macieklad.tailwind-sass-syntax
    // Tailwind syntax highlighting for sass
    usePackage("macieklad.tailwind-sass-syntax", {

    });

    // Babel JavaScript
    // https://marketplace.visualstudio.com/items?itemName=mgmcdermott.vscode-language-babel
    // VSCode syntax highlighting for today's JavaScript, ported from gandm's language-babel for Atom.
    usePackage("mgmcdermott.vscode-language-babel", {

    });

    // Pug (Jade) snippets
    // https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-jade-snippets
    // Pug and Jade snippets for Visual Studio Code
    usePackage("mrmlnc.vscode-jade-snippets", {

    });
    // Python
    // https://marketplace.visualstudio.com/items?itemName=ms-python.python
    // Linting, Debugging (multi-threaded, remote), Intellisense, Jupyter Notebooks, code formatting, refactoring, unit tests, snippets, and more.
    usePackage("ms-python.python", {

    });

    // C/C++
    // https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools
    // C/C++ IntelliSense, debugging, and code browsing.
    // usePackage("ms-vscode.cpptools", {

    // });

    // PowerShell
    // https://marketplace.visualstudio.com/items?itemName=ms-vscode.PowerShell
    // Develop PowerShell scripts in Visual Studio Code!
    // usePackage("ms-vscode.powershell", {

    // });

    // Debugger for Chrome
    // https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome
    // Debug your JavaScript code in the Chrome browser, or any other target that supports the Chrome Debugger protocol.
    usePackage("msjsdiag.debugger-for-chrome", {

    });

    // Vetur
    // https://marketplace.visualstudio.com/items?itemName=octref.vetur
    // Vue tooling for VS Code
    usePackage("octref.vetur", {

    });

    // CSS-in-JS
    // https://marketplace.visualstudio.com/items?itemName=paulmolluzzo.convert-css-in-js
    // CSS-in-JS autocomplete and conversion
    usePackage("paulmolluzzo.convert-css-in-js", {

    });

    // Vue VSCode Snippets
    // https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets
    // Snippets that will supercharge your Vue workflow
    usePackage("sdras.vue-vscode-snippets", {

    });

    // keyboard-scroll
    // https://marketplace.visualstudio.com/items?itemName=selbh.keyboard-scroll
    // Scroll active editor window with a command
    usePackage("selbh.keyboard-scroll", {
        keymap: [
            {
                key: "ctrl+=",
                command: "emacs.C-l",
                when: "editorTextFocus"
            },
            {
                key: "ctrl+l",
                command: "-emacs.C-l",
                when: "editorTextFocus"
            }
        ]
    });

    // stylelint
    // https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint
    // Modern CSS/SCSS/Less linter
    usePackage("stylelint.vscode-stylelint", {

    });

    // AutoHotkey
    // https://marketplace.visualstudio.com/items?itemName=slevesque.vscode-autohotkey
    // AutoHotkey language support for VS Code
    // usePackage("slevesque.vscode-autohotkey", {

    // });

    // HTML to CSS autocompletion
    // https://marketplace.visualstudio.com/items?itemName=solnurkarim.html-to-css-autocompletion
    // Provides completion suggestions for classes and ids from markup documents to stylesheets.
    // usePackage("solnurkarim.html-to-css-autocompletion", {
    //     config: {
    //         "autocompletionFilesScrop": "linked-files"
    //     }
    // });

    // IntelliSense for CSS class names in HTML
    // https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion
    // CSS class name completion for the HTML class attribute based on the definitions found in your workspace.
    // usePackage("Zignd.html-css-class-completion", {
    //     config: {
    //         "enableEmmetSupport": true,
    //         "includeGlobPattern": "**/*.{html,css}"
    //     }
    // });

    // Code Spell Checker
    // https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker
    // Spelling checker for source code
    usePackage("streetsidesoftware.code-spell-checker", {

    });

    // Org Mode
    // https://marketplace.visualstudio.com/items?itemName=tootone.org-mode
    // Emacs Org mode support for VSCode
    usePackage("tootone.org-mode", {

    });

    // Highlight Matching Tag
    // https://marketplace.visualstudio.com/items?itemName=vincaslt.highlight-matching-tag
    // Highlights matching closing and opening tags
    // usePackage("vincaslt.highlight-matching-tag", {
    // });

    // Rainbow Tags
    // https://marketplace.visualstudio.com/items?itemName=voldemortensen.rainbow-tags
    // Inteligently colors all tag pairs in your file with a smart blacklist containing meta, self-closing and non-paired tags - also functions with custom tags!
    usePackage("voldemortensen.rainbow-tags", {

    });

    // Ansible
    // https://marketplace.visualstudio.com/items?itemName=vscoss.vscode-ansible
    // VSCode extension for Ansible
    // usePackage("vscoss.vscode-ansible", {

    // });

    // literally-html
    // https://marketplace.visualstudio.com/items?itemName=webreflection.literally-html
    // Syntax highlighting for html inside of JavaScript and TypeScript tagged template strings
    usePackage("webreflection.literally-html", {

    });

    // jumpy
    // https://marketplace.visualstudio.com/items?itemName=wmaurer.vscode-jumpy
    // Jumpy provides fast cursor movement, inspired by Atom's package of the same name.
    // usePackage("wmaurer.vscode-jumpy", {

    // });

    // JavaScript (ES6) code snippets
    // https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets
    // Code snippets for JavaScript in ES6 syntax
    usePackage("xabikos.JavaScriptSnippets", {

    });

    // Vim
    // https://marketplace.visualstudio.com/items?itemName=vscodevim.vim
    // Vim emulation for Visual Studio Code
    usePackage("vscodevim.vim", {
        local: true,
        config: {
            "easymotion": true,
            "foldfix": true,
            "highlightedyank.enable": true,
            "leader": "<space>",
            "sneak": true,
            "useSystemClipboard": true,
            "normalModeKeyBindingsNonRecursive": [
                {
                    "before": ["<Leader>", "q", "q"],
                    "commands": ["workbench.action.quit"]
                },
                {
                    "before": ["]", "e"],
                    "commands": ["editor.action.marker.nextInFiles"]
                },
                {
                    "before": ["]", "d"],
                    "commands": ["workbench.action.editor.nextChange"]
                },
                {
                    "before": ["[", "d"],
                    "commands": ["workbench.action.editor.previousChange"]
                },
                {
                    "before": ["<Leader>", ","],
                    "commands": ["workbench.action.quickOpenPreviousEditor"]
                },
                {
                    "before": ["<Leader>", "b", "s"],
                    "commands": ["workbench.action.files.save"]
                },
                {
                    "before": ["<Leader>", "c", "o"],
                    "commands": ["workbench.action.gotoSymbol"]
                },
                {
                    "before": ["<Leader>", "c", "d"],
                    "commands": ["editor.action.peekDefinition"]
                },
                {
                    "before": ["<Leader>", "c", "D"],
                    "commands": ["editor.action.referenceSearch.trigger"]
                },
                {
                    "before": ["<Leader>", "c", "r"],
                    "commands": ["editor.action.rename"]
                },
                {
                    "before": ["<Leader>", "c", "x"],
                    "commands": ["workbench.actions.view.problems"]
                },
                {
                    "before": ["<Leader>", "g", "g"],
                    "commands": ["magit.status"]
                },
            ]
        },
    });
    
    keymapSet([
        {
            key: "alt+x",
            command: "workbench.action.showCommands",
        },
        {
            key: "ctrl+shift+p",
            command: "-workbench.action.showCommands",
        },
        {
            key: "alt+s",
            command: "workbench.action.files.save"
        },
        {
            key: "ctrl+s",
            command: "-workbench.action.files.save"
        },
        {
            key: "alt+f",
            command: "workbench.action.findInFiles"
        },
        {
            key: "Ctrl+j",
            command: "search.action.focusNextSearchResult",
            when: "hasSearchResult || inSearchEditor"
        },
        {
            key: "Ctrl+k",
            command: "search.action.focusPreviousSearchResult",
            when: "hasSearchResult || inSearchEditor"
        },
        {
            key: "Ctrl+j",
            command: "goToNextReference",
            when: "inReferenceSearchEditor || referenceSearchVisible"
        },
        {
            key: "Ctrl+k",
            command: "goToPreviousReference",
            when: "inReferenceSearchEditor || referenceSearchVisible"
        },
        {
            key: "enter",
            command: "closeReferenceSearch",
            when: "referenceSearchVisible"
        },
        {
            key: "alt+q",
            command: "workbench.action.quit"
        },
        {
            key: "ctrl+q",
            command: "-workbench.action.quit"
        },
        {
            key: "ctrl+p",
            command: "workbench.action.quickOpenPreviousEditor"
        },
        {
            key: "ctrl+p",
            command: "-workbench.action.quickOpen"
        },
        {
            key: "ctrl+l",
            command: "workbench.action.focusRightGroup"
        },
        {
            key: "ctrl+k ctrl+right",
            command: "-workbench.action.focusRightGroup"
        },
        {
            key: "ctrl+h",
            command: "workbench.action.focusLeftGroup"
        },
        {
            key: "ctrl+k ctrl+left",
            command: "-workbench.action.focusLeftGroup"
        },
        {
            key: "ctrl+1",
            command: "workbench.action.openEditorAtIndex1"
        },
        {
            key: "alt+1",
            command: "-workbench.action.openEditorAtIndex1"
        },
        {
            key: "ctrl+2",
            command: "workbench.action.openEditorAtIndex2"
        },
        {
            key: "alt+2",
            command: "-workbench.action.openEditorAtIndex2"
        },
        {
            key: "ctrl+3",
            command: "workbench.action.openEditorAtIndex3"
        },
        {
            key: "alt+3",
            command: "-workbench.action.openEditorAtIndex3"
        },
        {
            key: "ctrl+4",
            command: "workbench.action.openEditorAtIndex4"
        },
        {
            key: "alt+4",
            command: "-workbench.action.openEditorAtIndex4"
        },
        {
            key: "ctrl+5",
            command: "workbench.action.openEditorAtIndex5"
        },
        {
            key: "alt+5",
            command: "-workbench.action.openEditorAtIndex5"
        },
        {
            key: "ctrl+6",
            command: "workbench.action.openEditorAtIndex6"
        },
        {
            key: "alt+6",
            command: "-workbench.action.openEditorAtIndex6"
        },
        {
            key: "ctrl+7",
            command: "workbench.action.openEditorAtIndex7"
        },
        {
            key: "alt+7",
            command: "-workbench.action.openEditorAtIndex7"
        },
        {
            key: "ctrl+8",
            command: "workbench.action.openEditorAtIndex8"
        },
        {
            key: "alt+8",
            command: "-workbench.action.openEditorAtIndex8"
        },
        {
            key: "ctrl+9",
            command: "workbench.action.openEditorAtIndex9"
        },
        {
            key: "alt+9",
            command: "-workbench.action.openEditorAtIndex9"
        },
    ])
}
