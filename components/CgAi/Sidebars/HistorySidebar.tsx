import HistorySidebarItems from './HistorySidebarItems'

export default function HistorySidebar() {
  return (
    <div className="fixedHeight hidden min-h-full min-w-[250px] flex-col gap-4 bg-[#131722CC] mmd:flex">
      <HistorySidebarItems />
    </div>
  )
}
