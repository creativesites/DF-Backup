import { createServer } from "http";
import { Server } from "socket.io";
import { v4 as uuidv4 } from 'uuid';
const httpServer = createServer();

const io = new Server(httpServer, {
  cors: {
      origin: "http://localhost:3000"
  }
});
let errMsg = {
  id: uuidv4(),
  title: 'testing',
  time: new Date(),
  type: 'order4',
}
io.on("connection", (socket) => {
  console.log(`⚡: ${socket.id}  connected!`);
  io.emit('logUpdateMsg', errMsg);
  socket.on('message', (data) => {
    console.log(data);
  });

    socket.on('disconnect', () => {
      console.log('🔥: disconnected');
    });
});

httpServer.listen(4000);


