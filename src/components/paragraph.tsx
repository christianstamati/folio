import React from "react";

const Paragraph = ({ children }: { children: React.ReactNode }) => {
  return <p className="py-10 leading-relaxed text-paragraph">{children}</p>;
};

export default Paragraph;
