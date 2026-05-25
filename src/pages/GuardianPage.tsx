import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  Tooltip,
} from 'recharts'

import { useAppStore } from '../stores/appStore'
import { useSafetyStore } from '../stores/safetyStore'

const chartData = [
  {
    day: '월',
    value: 20,
  },
  {
    day: '화',
    value: 35,
  },
  {
    day: '수',
    value: 48,
  },
  {
    day: '목',
    value: 62,
  },
  {
    day: '금',
    value: 81,
  },
]

export default function GuardianPage() {
  const seedPoints = useAppStore(
    (s) => s.seedPoints,
  )

  const severityScore = useSafetyStore(
    (s) => s.severityScore,
  )

  return (
    <div className="space-y-7">
      <div>
        <h1 className="text-4xl font-black">
          가디언 대시보드
        </h1>

        <p className="mt-3 text-lg text-slate-600">
          보호자는 위험 상황만 요약해서 확인할 수 있어요.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        <div className="glass rounded-[30px] p-6">
          <div className="text-lg font-bold text-slate-500">
            현재 Seed
          </div>

          <div className="mt-4 text-5xl font-black text-sky-600">
            {seedPoints}
          </div>
        </div>

        <div className="glass rounded-[30px] p-6">
          <div className="text-lg font-bold text-slate-500">
            위험 감지 점수
          </div>

          <div
            className={`
              mt-4
              text-5xl
              font-black
              ${
                severityScore >= 70
                  ? 'text-red-500'
                  : 'text-green-500'
              }
            `}
          >
            {severityScore}
          </div>
        </div>

        <div className="glass rounded-[30px] p-6">
          <div className="text-lg font-bold text-slate-500">
            보호자 알림 상태
          </div>

          <div className="mt-4 text-2xl font-black">
            {severityScore >= 70
              ? '보호자 알림 필요'
              : '안전 상태'}
          </div>
        </div>
      </div>

      <div className="glass rounded-[32px] p-6">
        <h2 className="mb-5 text-2xl font-black">
          학습 참여 성장 그래프
        </h2>

        <div className="h-[320px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <XAxis dataKey="day" />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="value"
                strokeWidth={4}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="glass rounded-[32px] p-7">
        <h2 className="mb-5 text-2xl font-black">
          개인정보 보호 원칙
        </h2>

        <div className="space-y-4 text-xl leading-relaxed">
          <p>
            • AI 디딤은 모든 대화를 저장하지 않아요.
          </p>

          <p>
            • 위험 점수가 높을 때만 보호자에게
            요약 알림을 보내요.
          </p>

          <p>
            • 사용자의 자율성과 사생활을 가장
            중요하게 생각해요.
          </p>
        </div>
      </div>
    </div>
  )
}