import GameList from '@game/GameList';
import nickname from './nickname.json';

const generateRandomString = () =>
  Math.random().toString(36).substr(2, 5).toUpperCase();

const randomFunctions = {
  nickname: () => {
    const { adjective: adj, noun } = nickname;
    const randomAdj = adj[Math.floor(Math.random() * adj.length)];
    const randomNoun = noun[Math.floor(Math.random() * noun.length)];
    return `${randomAdj} ${randomNoun}`;
  },
  color: () => '#222222',
  roomID: () => {
    const randomString = generateRandomString();
    if (GameList.hasGame(randomString)) return randomFunctions.roomID();
    return randomString;
  },
  pickFromArray: (array) => {
    return array[Math.floor(Math.random() * array.length)];
  },
};

export default randomFunctions;
