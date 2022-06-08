import React from "react";
import { FlipBookPage } from "@/bookflip/FlipBookPage";
import { MarkdownPage } from "@/bookflip/MarkdownPage";

export const PlainPage: React.FC<{
  content: string;
}> = ({ content }) => {
  return (
    <MarkdownPage>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </MarkdownPage>
  );
};

export const insertMarkdownPage = ({ content }: { content: string }) => {
  FlipBookPage({ element: <PlainPage content={content} /> });
};
