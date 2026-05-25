interface Props {
  label: string
  selected: boolean
  onClick: () => void
}

export default function Chip({
  label,
  selected,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className={`
        big-touch
        rounded-full
        px-5
        text-lg
        font-bold
        transition
        ${
          selected
            ? 'bg-sky-500 text-white shadow-xl'
            : 'bg-white/70 hover:bg-white'
        }
      `}
    >
      {label}
    </button>
  )
}