import {
  BookOpen,
  Shield,
  MessageCircle,
  Puzzle,
  HeartHandshake,
} from 'lucide-react'

import { NavLink } from 'react-router-dom'

const menus = [
  {
    label: '학습 대시보드',
    icon: BookOpen,
    path: '/',
  },
  {
    label: '질문 조립기',
    icon: Puzzle,
    path: '/prompt-builder',
  },
  {
    label: '문해력 사전',
    icon: MessageCircle,
    path: '/dictionary',
  },
  {
    label: '위험 대화 훈련',
    icon: Shield,
    path: '/safety',
  },
  {
    label: '가디언 대시보드',
    icon: HeartHandshake,
    path: '/guardian',
  },
]

export default function Sidebar() {
  return (
    <aside className="glass hidden w-[280px] rounded-[32px] p-5 lg:block">
      <div className="mb-10">
        <h1 className="text-3xl font-black text-sky-700">
          AI 디딤
        </h1>

        <p className="mt-2 text-sm text-slate-600">
          AI 기반 느린학습자 자립 플랫폼
        </p>
      </div>

      <div className="space-y-3">
        {menus.map((menu) => {
          const Icon = menu.icon

          return (
            <NavLink
              key={menu.label}
              to={menu.path}
              className={({ isActive }) =>
                `
                  big-touch
                  flex
                  items-center
                  gap-3
                  rounded-2xl
                  px-4
                  text-lg
                  font-semibold
                  transition
                  ${
                    isActive
                      ? 'bg-sky-400 text-white'
                      : 'bg-white/60 hover:bg-white'
                  }
                `
              }
            >
              <Icon />

              {menu.label}
            </NavLink>
          )
        })}
      </div>
    </aside>
  )
}