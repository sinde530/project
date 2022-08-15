import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

import { Server } from 'socket.io';

@WebSocketGateway(8080, { transports: ['websocket'] })
export class EventsGateWay {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('ClientToServer')
  async handleMessage(@MessageBody() data) {
    this.server.emit('ServerToClient', data);
  }
}
