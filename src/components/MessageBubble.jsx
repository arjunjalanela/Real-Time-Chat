function MessageBubble({ message }) {

  const isMe = message.sender === "me"

  return (
    <div
      className={`flex ${isMe ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`
          max-w-xs px-4 py-2 rounded-xl text-sm
          ${isMe
            ? "bg-blue-600 text-white"
            : "bg-slate-700 text-gray-200"}
        `}
      >

        {message.text}

        <p className="text-xs text-gray-400 text-right mt-1">
          {message.time}
        </p>

      </div>
    </div>
  )
}

export default MessageBubble