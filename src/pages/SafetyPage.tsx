import { useState } from 'react'
import { motion } from 'framer-motion'

import { safetyScenario } from '../mock/safetyScenario'

import { useSafetyStore } from '../stores/safetyStore'
import { useAppStore } from '../stores/appStore'

export default function SafetyPage() {
  const [selected, setSelected] =
    useState<number | null>(null)

  const { setResult, severityScore, latestFeedback } =
    useSafetyStore()

  const addSeed = useAppStore((s) => s.addSeed)

  function handleChoice(
    severity: number,
    feedback: string,
    safe: boolean,
    id: number,
  ) {
    setSelected(id)

    setResult(severity, feedback)

    if (safe) {
      addSeed(15)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-black">
          위험 대화 모의 훈련
        </h1>

        <p className="mt-3 text-lg text-slate-600">
          위험한 상황을 연습하며 안전하게 배우는 공간이에요.
        </p>
      </div>

      <div className="mx-auto max-w-[420px] overflow-hidden rounded-[38px] border-[10px] border-slate-900 bg-[#dff6ff] shadow-2xl">
        <div className="bg-[#b8e7ff] p-4 text-center text-lg font-black">
          {safetyScenario.npc}
        </div>

        <div className="space-y-4 p-5">
          {safetyScenario.messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{
                opacity: 0,
                y: 8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="
                max-w-[85%]
                rounded-[24px]
                bg-white
                p-4
                text-lg
                shadow
              "
            >
              {message.text}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {safetyScenario.choices.map((choice) => (
          <button
            key={choice.id}
            onClick={() =>
              handleChoice(
                choice.severity,
                choice.feedback,
                choice.safe,
                choice.id,
              )
            }
            className={`
              big-touch
              glass
              w-full
              rounded-[28px]
              p-5
              text-left
              text-xl
              font-bold
              transition
              ${
                selected === choice.id
                  ? 'ring-4 ring-sky-400'
                  : ''
              }
            `}
          >
            {choice.text}
          </button>
        ))}
      </div>

      {latestFeedback && (
        <motion.div
          initial={{
            opacity: 0,
            y: 12,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="
            glass
            rounded-[32px]
            p-7
          "
        >
          <div className="mb-4 flex items-center gap-3">
            <div
              className={`
                rounded-full
                px-4
                py-2
                text-sm
                font-black
                ${
                  severityScore >= 70
                    ? 'bg-red-100 text-red-700'
                    : 'bg-green-100 text-green-700'
                }
              `}
            >
              위험도 {severityScore}점
            </div>
          </div>

          <p className="text-2xl font-semibold leading-relaxed">
            {latestFeedback}
          </p>
        </motion.div>
      )}
    </div>
  )
}