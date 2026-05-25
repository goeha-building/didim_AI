interface PromptPayload {
  target: string
  place: string
  purpose: string
}

export async function generateEasyResponse(
  payload: PromptPayload,
) {
  await new Promise((r) => setTimeout(r, 1200))

  return {
    title: `${payload.place}에서 ${payload.purpose}`,
    summary: [
      `${payload.target}에게 천천히 말해보세요.`,
      `모르는 것이 있으면 다시 물어봐도 괜찮아요.`,
      `짧고 간단하게 말하면 더 이해하기 쉬워요.`,
    ],
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
  }
}