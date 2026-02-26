import { TextField } from "../../Components/TextField";
import { useState } from "react";
import { WelcomeMessage } from "./WelcomeMessage";
import { OldMessages } from "./OldMessages";
import { initialMessages } from "../../../Data/InitialMessages";
import { motion, AnimatePresence } from "framer-motion";

type Message = { role: string; content: string };

export function ChatChannel() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newChat, setNewChat] = useState(true);
  const [isLoading, SetIsLoading] = useState(false);

  const botResponse = ["Hello, how can I assist you today ?"];

  function SimulatingApiCall() {
    SetIsLoading(true);
    setTimeout(() => {
      SetIsLoading(false);
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "ai", content: botResponse[0] },
      ]);
    }, 2000);
  }

  function handleSendMessage(newMessage: string) {
    SimulatingApiCall();
    setMessages([...messages, { role: "user", content: newMessage }]);
    setNewChat(false);
  }

  return (
    <div className="flex flex-col p-4 items-center space-y-4 justify-between h-screen w-full sm:justify-center sm:space-y-6 bg-[#f8f4f1] pb-16 sm:pb-20">
      <AnimatePresence mode="wait">
        {newChat ? (
          <WelcomeMessage key="welcome" />
        ) : (
          <OldMessages key="messages" messages={messages} isLoading={isLoading} />
        )}
      </AnimatePresence>
      <TextField onSendMessage={handleSendMessage} />
    </div>
  );
}