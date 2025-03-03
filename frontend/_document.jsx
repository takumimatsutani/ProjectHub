"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Document;
// src/pages/_document.tsx
var document_1 = require("next/document");
function Document() {
    return (<document_1.Html lang="ja">
      <document_1.Head>
        <meta charSet="utf-8"/>
        <link rel="icon" href="/favicon.ico"/>
        <meta name="description" content="ProjectHubはプロジェクト管理ツールです"/>
      </document_1.Head>
      <body>
        <document_1.Main />
        <document_1.NextScript />
      </body>
    </document_1.Html>);
}
