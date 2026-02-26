import { motion } from "framer-motion";

type Message = {
  role: string;
  content: string;
};

type OldMessagesProps = {
  messages: Message[];
  isLoading: boolean;
};

export function OldMessages({ messages, isLoading }: OldMessagesProps) {
  return (
    <div className="custom-scroll h-screen w-[90%] max-w-[90vh] pt-2 flex flex-col space-y-3 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-blue-100">
      {messages.map((msg, index) => {
        const isUser = msg.role === "user";

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 2 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.15, delay: index * 0.05 }}
            className={`max-w-[70%] px-5 py-3 rounded-2xl break-words whitespace-pre-wrap
              ${
                isUser
                  ? "self-end bg-[#091C58] from-blue-500 to-blue-600 text-white shadow-md"
                  : "self-start text-[#091C58]"
              }
            `}
          >
            {msg.content}
          </motion.div>
        );
      })}

      {isLoading && (
        <motion.div
          id="typing-div"
          className="max-w-[70%] px-5 py-3 rounded-2xl text-gray-500 transition-opacity delay-200 duration-500"
          initial={{ opacity: 0, y: 2 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.15 }}
        >
          Typing...
        </motion.div>
      )}
    </div>
  );
}
