import io from 'socket.io';
import onWaitingRoom from './waitingRoom';
import onChat from './chat';
import exitRoom from './exitRoom';

const socketIO = io();

socketIO.on('connection', (socket) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`User connected ${socket.id}`);
  }

  onWaitingRoom(socket);
  onChat(socket);
  exitRoom(socket);
});

export default socketIO;
