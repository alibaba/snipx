'use strict';

import { commands, ExtensionContext } from 'vscode';
import SnippetHandler from './snippetHelper'; // 片段管理
import { StatusHelper } from './statusHelper'; // 状态栏管理
import { MAP_COMMAND } from './static'; // 静态变量

export function activate(context: ExtensionContext) {
    const statusBar = new StatusHelper();
    context.subscriptions.push(statusBar);

    context.subscriptions.push(commands.registerCommand(MAP_COMMAND, async () => {
        SnippetHandler.generateSnippetsMap(context);
    }));
}

export function deactivate() {
    
}