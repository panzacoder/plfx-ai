import { MessageContentImageFile, MessageContentText, ThreadMessage } from "openai/resources/beta/threads/messages/messages";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { Markdown } from "./markdown";

const chatVariants = tv({
  variants: {
    role: {
      assistant: `bg-gray-900 text-gray-100 self-start prose-dark`,
      user: `text-gray-900 bg-gray-100 self-end border-2 prose`,
    },
  },
});

export const Message = ({ content, role }: ThreadMessage) => {

  return (
    <div
      className={chatVariants({
        role,
        className: "rounded-lg px-3 py-2 max-w-sm",
      })}
    >
      {content.map((msg, index) => {
        if (msg.type === "text") {
          msg satisfies MessageContentText
          return <Markdown key={index} markdown={msg.text} />;
        } else {
          msg satisfies MessageContentImageFile
          return (
            <div>
              image: {msg.image_file.file_id}
            </div>
          )
        }
      })}
    </div>
  );
};
