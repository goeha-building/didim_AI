import {
  Contrast,
  Plus,
  Minus,
  Sparkles,
} from 'lucide-react'

import { useAppStore } from '../stores/appStore'

export default function Topbar() {
  const {
    seedPoints,
    toggleContrast,
    increaseFont,
    decreaseFont,
  } = useAppStore()

  return (
    <div className="glass mb-4 flex flex-wrap items-center justify-between gap-4 rounded-[28px] p-4">
      <div>
        <h2 className="text-2xl font-black">
          오늘도 천천히 함께 배워봐요 🌱
        </h2>

        <p className="text-slate-600">
          AI 디딤이 생활 속 자립을 도와드려요.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 rounded-2xl bg-sky-100 px-4 py-3 font-black text-sky-700">
          <Sparkles size={18} />

          {seedPoints} Seed
        </div>

        <button
          onClick={toggleContrast}
          className="big-touch rounded-2xl bg-white/70 px-4"
        >
          <Contrast />
        </button>

        <button
          onClick={decreaseFont}
          className="big-touch rounded-2xl bg-white/70 px-4"
        >
          <Minus />
        </button>

        <button
          onClick={increaseFont}
          className="big-touch rounded-2xl bg-white/70 px-4"
        >
          <Plus />
        </button>
      </div>
    </div>
  )
}