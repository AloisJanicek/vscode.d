import * as vscode from "vscode";
import { initUsePackage, usePackage, configSet, keymapSet } from "vscode-use-package";

export function init(context: vscode.ExtensionContext) {

    initUsePackage(context);

    configSet({
        "less.validate": false,
        "scss.validate": false,
        "typescript.preferences.quoteStyle": "single",

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
