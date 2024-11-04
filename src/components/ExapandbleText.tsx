import { useState } from "react";

export default function ExapandableText({ text }: { text: string }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const limit = 255;
  if (text.length <= limit) return <article>{text}</article>;
  return (
    <div>
      {isExpanded ? (
        <article>{text}</article>
      ) : (
        <article>{text.substring(0, limit)}...</article>
      )}
      <button className="btn" onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "Show Less" : "Show More"}
      </button>
    </div>
  );
}
