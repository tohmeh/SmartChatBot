# SmartChatBot

A chat interface that connects to an AI API and lets you shape how the assistant behaves through custom instructions and an uploadable knowledge base.

## Features

- Chat with an AI assistant through a clean, responsive interface
- Customize the assistant's name, role, and behavior with plain text instructions
- Upload and manage files that the assistant can draw knowledge from
- Smooth animated transitions between the welcome screen and conversation view

## Getting Started

```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173` by default.

## Project Structure

```
src/
  Pages/
    ChatPage/           # Main chat interface and message rendering
    ManageAssistantPage/ # Assistant name, role, and instructions config
    KnowledgeBasePage/  # Upload and manage knowledge base files
  Components/           # Shared UI components
  Layouts/              # Navigation and page layout
data/                   # Initial messages and chat history
```
