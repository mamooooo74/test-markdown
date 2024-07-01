import ReactMarkdown from "react-markdown";
import styles from "./markdown.module.css";
import remarkGfm from "remark-gfm";
import matter from "gray-matter";
import "github-markdown-css/github-markdown.css";

import { markdownStyle } from "./parts/MarkdownStyle";
import rehypeRaw from "rehype-raw";
type props = {
  markdown: string;
};

const MarkDown: React.FC<props> = ({ markdown }) => {
  const { content } = matter(markdown);
  return (
    <div className={styles.container}>
      <ReactMarkdown
        className={`markdown-body ${styles.markdown}`}
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
