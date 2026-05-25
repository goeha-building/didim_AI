import dictionary from '../data/easy_korean.json'

export default function DictionaryPage() {
  function speak(text: string) {
    const utterance =
      new SpeechSynthesisUtterance(text)

    utterance.lang = 'ko-KR'

    speechSynthesis.speak(utterance)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-black">
          터치-풀이 문해력 사전
        </h1>

        <p className="mt-3 text-lg text-slate-600">
          어려운 말을 누르면 쉽게 설명해줘요.
        </p>
      </div>

      <div className="glass rounded-[32px] p-7">
        <p className="text-2xl leading-relaxed">
          금일 제출 서류를 숙지하시고 소정의
          절차에 따라 발급받으시기 바랍니다.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {dictionary.map((item) => (
          <button
            key={item.hard}
            onClick={() =>
              speak(
                `${item.hard} 뜻은 ${item.easy}`,
              )
            }
            className="
              glass
              rounded-[28px]
              p-6
              text-left
              transition
              hover:scale-[1.02]
            "
          >
            <div className="text-3xl font-black text-sky-700">
              {item.hard}
            </div>

            <div className="mt-3 text-xl font-semibold">
              {item.easy}
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}