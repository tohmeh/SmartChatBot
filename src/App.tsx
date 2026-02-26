import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChatPage } from "./Pages/ChatPage/ChatPage";
import { KnowledgeBasePage } from "./Pages/KnowledgeBasePage/KnowledgeBasePage";
import { ManageAssistantPage } from "./Pages/ManageAssistantPage/ManageAssistantPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChatPage />} />
        <Route path="/ManageAssistant" element={<ManageAssistantPage />} />
        <Route path="/KnowledgeBasePage" element={<KnowledgeBasePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
