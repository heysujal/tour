"use client";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  nightOwl,
  atelierCaveLight,
  arduinoLight,
  atelierEstuaryLight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import styles from "./CodeSnippet.module.css";
import { CSSProperties } from "react";
import { useColorMode } from "@chakra-ui/react";

export default function CodeSnippet({
  children,
  highlightLineStart,
  highlightLineEnd,
  startingLineNumber,
  showLineNumbers = true,
}: {
  children: string;
  highlightLineStart?: number;
  highlightLineEnd?: number;
  startingLineNumber?: number;
  showLineNumbers?: boolean;
}) {
  const { colorMode } = useColorMode();

  if ((children.match(/\n/g) || []).length === 0) {
    return <span className={styles.inlineCode}>{children}</span>;
  }
  if (children[children.length - 1] === "\n") children = children.slice(0, -1);
  // remove the last \n from children

  if (highlightLineStart && !highlightLineEnd) {
    highlightLineEnd = highlightLineStart;
  }

  return (
    <div
      onCopy={(e) => {
        e.preventDefault();
        e.clipboardData.setData("text/plain", children);
      }}
    >
      <SyntaxHighlighter
        language="javascript"
        style={colorMode === "dark" ? nightOwl : arduinoLight}
        className={styles.codeSnippet}
        showLineNumbers={showLineNumbers}
        customStyle={{
          paddingInline: 0,
          paddingBlock: "10px",
        }}
        wrapLines={true}
        wrapLongLines={true}
        lineNumberStyle={{
          color: "hsl(var(--text) / 0.6)",
          paddingLeft: "16px",
          paddingRight: "12px",
        }}
        startingLineNumber={startingLineNumber}
        lineProps={(lineNumber) => {
          let style: CSSProperties = {
            opacity: colorMode === "dark" ? 0.9 : 1,
          };
          if (
            highlightLineStart &&
            highlightLineEnd &&
            lineNumber >= highlightLineStart &&
            lineNumber <= highlightLineEnd
          ) {
            style = {
              ...style,
              color: "hsl(var(--text) / 0.75)",
              backgroundColor: colorMode === "dark" ? "#18391faa" : "#e0fae37a",
              borderLeft: `2px solid ${
                colorMode === "dark" ? "#0aff0aa0" : "#14ab00a0"
              }`,
            };
          }
          return { style };
        }}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
}
