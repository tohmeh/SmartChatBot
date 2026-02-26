import { NavBar } from "../../Layouts/header/NavBar";
import { ChatChannel } from "./ChatChannel";

export function ChatPage() {

  return (
    <div className="flex flex-row w-screen h-screen overflow-hidden">
      <div className="w-full flex flex-col h-screen">
        <NavBar/>
        <div className="flex-1 overflow-hidden">
          <ChatChannel />
        </div>
      </div>
    </div>
  );
}
