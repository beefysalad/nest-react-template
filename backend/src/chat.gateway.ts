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
  handleMessage(
    @MessageBody() message: string,
    client: any,
    payload: any,
  ): void {
    console.log(message);
    this.server.emit('message', message);
  }
}
