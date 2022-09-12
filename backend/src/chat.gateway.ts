import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

@WebSocketGateway({ cors: '*' })
export class ChatGateway {
  @WebSocketServer()
  server;
  @SubscribeMessage('message')
  handleMessage(@MessageBody() data: string): void {
    this.server.emit('message', data);
  }
  @SubscribeMessage('username')
  handleUsername(@MessageBody() username: string): void {
    this.server.emit('username', username);
  }
}
