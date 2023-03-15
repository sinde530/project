import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { createServer } from 'http';
import { NodeMediaServer } from 'node-media-server';

@WebSocketGateway({ namespace: 'camera' })
export class CameraGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;
  private nms: NodeMediaServer;

  constructor() {
    const httpServer = createServer();
    this.nms = new NodeMediaServer(
      {
        logType: 0,
        http: {
          port: 8000,
          allow_origin: '*',
        },
        mediaroot: './media',
        rtmp: {
          port: 1935,
          chunk_size: 60000,
          gop_cache: true,
          ping: 30,
          ping_timeout: 60,
        },
      },
      httpServer,
    );
    this.nms.run();
  }

  handleConnection(client: any, ...args: any[]) {
    const streamPath = 'live/stream';
    this.nms.on('preConnect', (id: any, args: any) => {
      if (args.app != 'live') {
        console.log(`Rejected stream ${id} from app ${args.app}`);
        this.nms.getSession(id).reject();
      }
    });
    this.nms.on('postPublish', (id: any, StreamPath: any, args: any) => {
      console.log(`Stream ${StreamPath} has started`);
      this.server.emit('streamStarted', streamPath);
    });
    client.join(streamPath);
  }

  handleDisconnect(client: any) {
    console.log(`Client ${client.id} disconnected`);
  }
}
