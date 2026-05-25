export const safetyScenario = {
  npc: '모르는 사람',

  messages: [
    {
      id: 1,
      sender: 'npc',
      text: '안녕하세요 😊 급하게 부탁이 있어요.',
    },
    {
      id: 2,
      sender: 'npc',
      text: '지금 부모님 대신 문화상품권 번호만 보내주실 수 있나요?',
    },
  ],

  choices: [
    {
      id: 1,
      text: '상품권 번호를 바로 보낸다',
      safe: false,
      feedback:
        '상품권 번호를 보내면 돈을 잃을 수 있어요. 모르는 사람에게 보내면 위험해요.',
      severity: 92,
    },
    {
      id: 2,
      text: '부모님께 먼저 물어본다',
      safe: true,
      feedback:
        '잘했어요. 보호자나 믿을 수 있는 어른에게 먼저 확인하는 것은 안전해요.',
      severity: 5,
    },
    {
      id: 3,
      text: '답장을 하지 않는다',
      safe: true,
      feedback:
        '좋아요. 이상한 부탁은 바로 답장하지 않아도 괜찮아요.',
      severity: 8,
    },
  ],
}