import { useState } from "react"

import Sidebar from "./components/Sidebar"
import ChatHeader from "./components/ChatHeader"
import Messages from "./components/Messages"
import MessageInput from "./components/MessageInput"

import chats from "./data/chats"

function App() {

  const [selectedChat, setSelectedChat] = useState(chats[0])
  const [messages, setMessages] = useState(chats[0].messages)

  return (
    <div className="h-screen flex">

      {/* Sidebar */}
      <Sidebar
        chats={chats}
        onSelect={setSelectedChat}
      />

      {/* Chat Area */}
      <div className="flex-1 flex flex-col bg-slate-900">
	  <h1>Hello Guys</h1>

        <ChatHeader chat={selectedChat} />

        <Messages messages={messages} />

        <MessageInput setMessages={setMessages} />

      </div>

    </div>
  )
}

export default App