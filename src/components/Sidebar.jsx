function Sidebar({ chats, onSelect }) {

  return (
    <div className="w-1/4 bg-slate-950 border-r border-slate-800 p-4 hidden md:block">

      <h2 className="text-xl font-bold mb-4">💬 TailChat</h2>

      {chats.map(chat => (

        <div
          key={chat.id}
          onClick={() => onSelect(chat)}
          className="p-3 rounded-lg hover:bg-slate-800 cursor-pointer mb-2"
        >
          <p className="font-semibold">{chat.name}</p>
          <p className="text-sm text-gray-400 truncate">
            {chat.lastMessage}
          </p>
        </div>

      ))}

    </div>
  )
}

export default Sidebar