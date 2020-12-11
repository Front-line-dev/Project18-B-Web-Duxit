const TEXT = {
  WAIT_TELLER_SELECT:
    '이야기꾼이 카드를 고르고 있습니다.\n잠시만 기다려주세요.',
  WAIT_PLAYER_SELECT:
    '다른 플레이어들이 카드를 고르고 있습니다.\n잠시만 기다려주세요.',
  TELLER: {
    true: '당신은 이야기꾼입니다.\n어떤 카드로 이야기를 해볼까요?',
    false: '이야기꾼이 카드를 고르고 있습니다.\n잠시만 기다려주세요.',
  },
  GUESSER_SELECT_CARD: {
    TITLE: (topic) => `이 카드가 <${topic}>과 어울리나요?`,
    OK: '네',
    CANCLE: '아니에요',
  },
  TELLER_SELECT_CARD: {
    NOTIFY: '당신은 이야기꾼입니다.\n어떤 카드로 이야기를 해볼까요?',
    TITLE: () => '이 카드를 표현하는 단어를 적어주세요!',
    OK: '확인',
    CANCLE: '다시 선택',
  },
  GUIDE: {
    CONTENT: `DUXIT은 스토리텔링 보드게임 DIXIT을 웹으로 옮긴 온라인 게임입니다.
    각 플레이어는 번갈아가면서 스토리텔러가 되고, 자신이 가지고 있는 6장의 카드 중 하나를 고릅니다. 고른 카드에 대한 주제도 함께 정합니다.
    스토리텔러를 제외한 플레이어들은 자신이 갖고 있는 6장의 카드 중 주제와 가장 유사한 카드 한 장을 고릅니다. 모든 플레이어가 선택한 카드가 한번에 공개되면, 스토리텔러를 제외한 플레이어는 스토리텔러가 어떤 카드를 냈을까?를 추측하며 한 장의 카드를 고릅니다.
    
    점수를 얻는 조건은 다음과 같습니다.
  
    1. 정답을 맞힌 경우 : +3점 (이 때 출제자도 함께 +3점)
    2. 내 카드를 선택한 사람이 있는 경우 : +1 * (속인 사람의 수) 점
    3. 모두 정답을 맞힌 경우 : 출제자를 제외한 전원 +2점
    4. 정답자가 1명도 없는 경우 : 출제자를 제외한 전원 +2점
    5. 정답을 맞히지 못한 경우 : +0점
    `,
  },
};

export const GET_IMAGE_PATH = (cardID) => {
  return `${process.env.ASSET_URL}/${cardID}.png`;
};

export default TEXT;
