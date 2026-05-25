import { motion } from 'framer-motion'
import Confetti from 'react-confetti'

import { Sparkles, Trophy } from 'lucide-react'

import { useState } from 'react'

import { useAppStore } from '../stores/appStore'

export default function DashboardPage() {
  const [completed, setCompleted] =
    useState(false)

  const addSeed = useAppStore((s) => s.addSeed)

  function completeQuest() {
    setCompleted(true)

    addSeed(25)

    setTimeout(() => {
      setCompleted(false)
    }, 4000)
  }

  return (
    <div className="space-y-6">
      {completed && <Confetti />}

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        className="
          glass
          rounded-[28px]
          p-8
        "
      >
        <div className="flex items-center gap-3">
          <Sparkles className="text-sky-600" />

          <h2 className="text-3xl font-black">
            오늘의 AI 디딤 학습
          </h2>
        </div>

        <p className="mt-4 text-lg text-slate-700">
          작은 단계로 천천히 배우며 스스로 생활할 수 있도록 도와드려요.
        </p>
      </motion.div>

      <div className="grid gap-5 lg:grid-cols-3">
        {[
          '편의점 스태프 배우기',
          '주민등록등본 발급하기',
          '버스 타는 방법 익히기',
        ].map((quest) => (
          <div
            key={quest}
            className="
              glass
              rounded-[28px]
              p-6
              transition
              hover:scale-[1.02]
            "
          >
            <div className="mb-4 inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-bold text-sky-700">
              추천 퀘스트
            </div>

            <h3 className="text-2xl font-black">
              {quest}
            </h3>

            <div className="mt-5 space-y-3">
              <div className="rounded-2xl bg-white/70 p-4 font-semibold">
                Level 1 → 상황 이해하기
              </div>

              <div className="rounded-2xl bg-white/70 p-4 font-semibold">
                Level 2 → 질문 연습하기
              </div>

              <div className="rounded-2xl bg-white/70 p-4 font-semibold">
                Level 3 → 실제 대화하기
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={completeQuest}
                className="
                  big-touch
                  w-full
                  rounded-2xl
                  bg-gradient-to-r
                  from-sky-400
                  to-cyan-300
                  text-lg
                  font-black
                  text-white
                "
              >
                퀘스트 완료하기
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="glass rounded-[32px] p-7">
        <div className="mb-5 flex items-center gap-3">
          <Trophy className="text-yellow-500" />

          <h2 className="text-3xl font-black">
            보상 → 참여 → 기여
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          <div className="rounded-[24px] bg-white/70 p-5">
            <div className="text-2xl font-black">
              🌱 보상
            </div>

            <p className="mt-3 text-lg">
              퀘스트를 완료하면 Seed를 받아요.
            </p>
          </div>

          <div className="rounded-[24px] bg-white/70 p-5">
            <div className="text-2xl font-black">
              🤝 참여
            </div>

            <p className="mt-3 text-lg">
              생활 속 연습을 스스로 계속해요.
            </p>
          </div>

          <div className="rounded-[24px] bg-white/70 p-5">
            <div className="text-2xl font-black">
              📊 기여
            </div>

            <p className="mt-3 text-lg">
              어려웠던 학습 데이터를 분석해 더 좋은 교육을 만들어요.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}