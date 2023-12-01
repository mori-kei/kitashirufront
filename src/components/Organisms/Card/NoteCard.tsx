
import React from "react";

type Props = {
  src: string;
};
export const NoteCard = ({ src }: Props) => {
  return (
    <div>
      <iframe
        title="Embedded Note"
        className="note-embed"
        src={src}
        style={{
          border: "0",
          display: "block",
          maxWidth: "99%",
          width: "100%",
          padding: "0px",
          margin: "10px 0px",
          position: "static",
          visibility: "visible",
          height:"200px"
        }}
        
      ></iframe>
    </div>
  );
};
