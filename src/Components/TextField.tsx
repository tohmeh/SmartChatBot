import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

type TextFieldProps = {
  onSendMessage: (message: string) => void;
};

export function TextField({ onSendMessage }: TextFieldProps) {
  const [text, setText] = useState("");

  function handleSend() {
    if (!text.trim()) return;
    onSendMessage(text);
    setText("");
  }

  return (
    <div className="flex h-auto justify-center items-center border-3 border-white rounded-3xl shadow-2xl p-1 bg-gradient-to-b from-gray to-white min-h-[13vh] w-full max-w-[90vh] mx-2 mb-6 sm:mb-4 md:mb-2">
      <div className="w-full bg-white rounded-3xl flex items-center px-5 space-x-3 min-h-[100%] h-auto">
        <TextareaAutosize
          minRows={1}
          maxRows={6}
          placeholder="Message AI"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-grow bg-transparent resize-none outline-none border-none placeholder-gray-400 placeholder:text-base font-medium text-[#091C58]"
        />


        <input id="fileInput" type="file" className="hidden" />

        <div
          className="text-[#091C58] text-base font-medium cursor-pointer hover:text-blue-700"
          onClick={handleSend}
        >
          send
        </div>
      </div>
    </div>
  );
}
