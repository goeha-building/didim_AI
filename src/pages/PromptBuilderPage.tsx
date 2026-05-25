import { useState } from 'react'
import { motion } from 'framer-motion'

import Chip from '../components/Chip'

import { generateEasyResponse } from '../ai/mockGemini'

const targets = [
  '알바 사장님에게',
  '주민센터 직원에게',
  '버스 기사님에게',
]

const places = [
  '편의점에서',
  '창구에서',
  '버스 안에서',
]

const purposes = [
  '시급 물어보기',
  '등본 발급받기',
  '내릴 곳 말하기',
]

interface ResultData {
  title: string
  summary: string[]
  image: string
}

export default function PromptBuilderPage() {
  const [target, setTarget] = useState('')
  const [place, setPlace] = useState('')
  const [purpose, setPurpose] = useState('')

  const [loading, setLoading] = useState(false)

  const [result, setResult] =
    useState<ResultData | null>(null)

  async function handleGenerate() {
    if (!target || !place || !purpose) return

    setLoading(true)

    const response =
      await generateEasyResponse({
        target,
        place,
        purpose,
      })

    setResult(response)

    setLoading(false)
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-black">
          유니버셜 질문 조립기
        </h1>

        <p className="mt-3 text-lg text-slate-600">
          버튼만 눌러서 쉽게 질문을 만들 수 있어요.
        </p>
      </div>

      <div className="glass rounded-[30px] p-6">
        <h2 className="mb-5 text-2xl font-black">
          누구에게 말하나요?
        </h2>

        <div className="flex flex-wrap gap-3">
          {targets.map((item) => (
            <Chip
              key={item}
              label={item}
              selected={target === item}
              onClick={() => setTarget(item)}
            />
          ))}
        </div>
      </div>

      <div className="glass rounded-[30px] p-6">
        <h2 className="mb-5 text-2xl font-black">
          어디에서 말하나요?
        </h2>

        <div className="flex flex-wrap gap-3">
          {places.map((item) => (
            <Chip
              key={item}
              label={item}
              selected={place === item}
              onClick={() => setPlace(item)}
            />
          ))}
        </div>
      </div>

      <div className="glass rounded-[30px] p-6">
        <h2 className="mb-5 text-2xl font-black">
          무엇을 하고 싶나요?
        </h2>

        <div className="flex flex-wrap gap-3">
          {purposes.map((item) => (
            <Chip
              key={item}
              label={item}
              selected={purpose === item}
              onClick={() => setPurpose(item)}
            />
          ))}
        </div>
      </div>

      <button
        onClick={handleGenerate}
        disabled={loading}
        className="
          big-touch
          w-full
          rounded-[24px]
          bg-gradient-to-r
          from-sky-500
          to-cyan-300
          text-2xl
          font-black
          text-white
          shadow-2xl
          transition
          hover:scale-[1.01]
        "
      >
        {loading
          ? 'AI가 쉽게 설명하는 중...'
          : 'AI 설명 만들기'}
      </button>

      {result && (
        <motion.div
          initial={{
            opacity: 0,
            y: 12,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="glass overflow-hidden rounded-[34px]"
        >
          <img
            src={result.image}
            className="h-[280px] w-full object-cover"
          />

          <div className="p-7">
            <div className="mb-4 inline-flex rounded-full bg-cyan-100 px-4 py-2 font-bold text-cyan-700">
              AI 쉬운 설명
            </div>

            <h2 className="text-3xl font-black">
              {result.title}
            </h2>

            <div className="mt-5 space-y-4">
              {result.summary.map((line) => (
                <div
                  key={line}
                  className="
                    rounded-2xl
                    bg-white/70
                    p-5
                    text-xl
                    font-semibold
                  "
                >
                  {line}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}