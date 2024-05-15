import { contentManager } from "@/lib/contentManager";
import { CodeFile } from "@/lib/types";
import fs from "fs";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs";
import styles from "./CodeEditor.module.css";
import ctx from "classnames";
import { GeistMono } from "geist/font/mono";

type moduleExports = {
  exports: CodeFile;
};

export default function CodeEditor({ urlPath }: { urlPath: string }) {
  const folderName = contentManager.contentFolderName;
  const path = `./${folderName}/${urlPath}/${contentManager.codeFileName}`;
  const fileContent = fs.readFileSync(path, "utf-8");
  const dynmicFunction = new Function("module", fileContent);
  const moduleExports: {} | moduleExports = {};
  dynmicFunction(moduleExports);
  const { exports } = moduleExports as moduleExports;
  const code = exports.code;
  const codeString = JSON.stringify(code, null, 2);

  return (
    <div className={ctx(styles.codeEditor, GeistMono.className)}>
      <SyntaxHighlighter
        language="json"
        style={tomorrow}
        className={GeistMono.className}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}
