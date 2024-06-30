import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import type { ClassAttributes, HTMLAttributes } from "react";
import type { ExtraProps, Components } from "react-markdown";

const Pre = ({
  children,
  ...props
}: ClassAttributes<HTMLPreElement> &
  HTMLAttributes<HTMLPreElement> &
  ExtraProps) => {
  if (!children || typeof children !== "object") {
    return <code {...props}>{children}</code>;
  }
  const childType = "type" in children ? children.type : "";
  if (childType !== "code") {
    return <code {...props}>{children}</code>;
  }

  const childProps = "props" in children ? children.props : {};
  const { className, children: code } = childProps;
  const language = className?.replace("language-", "");

  return (
    <SyntaxHighlighter
      language={language}
      style={darcula}
      customStyle={{ padding: "0.8rem", backgroundColor: "#111" }}
    >
      {String(code).replace(/\n$/, "")}
    </SyntaxHighlighter>
  );
};

export const markdownStyle: Components = {
  pre: Pre,
};
