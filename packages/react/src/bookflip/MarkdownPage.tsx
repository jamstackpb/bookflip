import React from "react";
export const MarkdownPage: React.FC = ({ children }) => {
  return (
    <div className="max-w-none flex justify-center">
      <div className={`prose flex flex-col w-max p-8 m-0`}>{children}</div>
    </div>
  );
};
