import { Children } from '@/types/generics'

interface IMintPageBtn extends Children {
  active: boolean
  className?: string
  onClick: () => void
}

const MintPageBtn = ({
  active,
  className,
  onClick,
  children,
}: IMintPageBtn) => {
  return (
    <button
      onClick={onClick}
      className={`${
        active
          ? 'border-2 border-themeBorderBlue bg-themeDialogBlack font-semibold'
          : 'bg-themeMintBg border-themeMintBg border-2'
      } h-14 w-full rounded-xl text-lg px-2 transition-all ${className}`}
    >
      {children}
    </button>
  )
}

export default MintPageBtn
