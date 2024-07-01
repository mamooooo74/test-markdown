import ReactMarkdown from "react-markdown";

import remarkGfm from "remark-gfm";
import matter from "gray-matter";
import "github-markdown-css/github-markdown.css";
import "./markdown.css";

import { markdownStyle } from "./parts/MarkdownStyle";
import rehypeRaw from "rehype-raw";
type props = {
  markdown: string;
};

const MarkDown: React.FC<props> = ({ markdown }) => {
  const { content } = matter(markdown);
  return (
    <div className="markdown-container">
      <ReactMarkdown
        className="markdown-body"
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={markdownStyle}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkDown;
