import { useState } from "react"

function MessageInput({ setMessages }) {

  const [text, setText] = useState("")

  function sendMessage() {

    if (!text.trim()) return

    setMessages(prev => [
      ...prev,
      {
        id: Date.now(),
        sender: "me",
        text,
        time: "Now"
      }
    ])

    setText("")
  }

  return (
    <div className="p-4 border-t border-slate-800 flex gap-2">

      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Type a message..."
        className="flex-1 bg-slate-800 rounded-full px-4 py-2 outline-none"
      />

      <button
        onClick={sendMessage}
        className="bg-blue-600 px-5 rounded-full hover:bg-blue-700"
      >
        ➤
      </button>

    </div>
  )
}

export default MessageInput