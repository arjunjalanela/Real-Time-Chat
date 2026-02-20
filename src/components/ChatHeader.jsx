function ChatHeader({ chat }) {

  return (
    <div className="flex items-center justify-between p-4 border-b border-slate-800">

      <div>
        <h3 className="font-bold">{chat.name}</h3>
        <p className="text-sm text-green-400">Online</p>
      </div>

      <div className="flex gap-4 text-xl">
        📞 🎥 ⋮
      </div>

    </div>
  )
}

export default ChatHeader