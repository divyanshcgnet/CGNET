import ChatSidebarItems from './ChatSidebarItems'

export default function ChatSidebar() {
  return (
    <div className="fixedHeight hidden min-h-full min-w-[250px] flex-col overflow-hidden bg-[#131722CC] mmd:flex">
      <ChatSidebarItems />
    </div>
  )
}
