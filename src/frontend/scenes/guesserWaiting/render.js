import './guesserWaiting.scss';
import TextObject from '@engine/TextObject';
import ProgressBarObject from '@engine/ProgressBarObject';
import DuckObject from '@engine/DuckObject';
import TEXT from '@utils/text';
import TIME from '@type/time';
import { createCards } from '@utils/card';
import { GUESSER_WAITING } from '@type/scene';
import PlayerManager from '@utils/PlayerManager';

const renderGuesserWaiting = () => {
  const NotifyingTellerText = new TextObject();
  const tellerText = TEXT.WAIT_TELLER_SELECT;
  NotifyingTellerText.addClass('notify-teller');
  NotifyingTellerText.addClass('other');
  NotifyingTellerText.attachToRoot();
  NotifyingTellerText.setContent(tellerText);
  NotifyingTellerText.move(50, 100, 0);
  NotifyingTellerText.move(50, 70, TIME.ONE_SECOND);

  const ProgressBar = new ProgressBarObject();
  ProgressBar.createElement();
  ProgressBar.attachToRoot();
  ProgressBar.setTime(TIME.SELECT_CARD);
  ProgressBar.start();

  PlayerManager.getPlayers().forEach((player) => player.duck.setVisible(false));
  const tellerColor = PlayerManager.getTeller().color;
  const TellerDuck = new DuckObject({ color: tellerColor, width: 200 });
  TellerDuck.addClass('teller-duck-wrapper');
  TellerDuck.attachToRoot();
  TellerDuck.move(50, 0, 0);
  TellerDuck.setHat(true);
  TellerDuck.move(50, 10, TIME.ONE_SECOND);
  const { CardsWrapper, cards } = createCards(GUESSER_WAITING);
  CardsWrapper.attachToRoot();

  const arrayToBeRemoved = [
    NotifyingTellerText,
    ProgressBar,
    TellerDuck,
    CardsWrapper,
    ...cards,
  ];

  return {
    arrayToBeRemoved,
  };
};

export default renderGuesserWaiting;
