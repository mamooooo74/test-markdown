import { NextResponse } from "next/server";
import fs from "fs";

export const GET = (req: Request) => {
  const markdown = fs.readFileSync("docs/home.mdx", "utf-8");
  return new NextResponse(JSON.stringify({ markdown }));
};
