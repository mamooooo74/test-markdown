import MarkDown from "@/Cpmponents/markdown/MarkDown";
import fs from "fs";
import React from "react";

export default function Home() {
  const mdFile = "docs/home.mdx";
  const markdown = fs.readFileSync(mdFile, "utf-8");
  console.log(markdown);
  return (
    <div>
      <MarkDown markdown={markdown} />
    </div>
  );
}
