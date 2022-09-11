import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

@WebSocketGateway(8001, { cors: '*' })
export class ChatGateway {
  @WebSocketServer()
  server;
  @SubscribeMessage('message')
  handleMessage(@MessageBody() data: string): void {
    // console.log(data);

    this.server.emit('message', data);
  }
  @SubscribeMessage('username')
  handleUsername(@MessageBody() username: string): void {
    // console.log(username);
    this.server.emit('username', username);
  }
}
