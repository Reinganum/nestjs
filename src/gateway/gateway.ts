import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer, ConnectedSocket} from "@nestjs/websockets";
import { Server, Socket } from 'socket.io'
import { MessageDTO } from "./dto/message.dto";
const chat=[]

@WebSocketGateway()
export class ChatGateway{
    @WebSocketServer() 
    server: Server

    onModuleInit() {
        this.server.on('connection',(socket)=>{
            console.log(`New user connected on socket: ${socket.id}`)
        })
    }
    @SubscribeMessage('newMsg')
    onNewMsg(
        @MessageBody() data: string,
        @ConnectedSocket() client: Socket)
    {
        const newMsg={socketID:client.id,message:data}
        chat.push(newMsg)
        this.server.emit('newChat',chat)
    }

    @SubscribeMessage('userWriting')
    onUserWriting(
        @MessageBody() data: string,
        @ConnectedSocket() client: Socket){
        return `${client.id} is writing a message`
    }
    @SubscribeMessage('changeUsername')
    changeUsername(
        @MessageBody() data: string,
        @ConnectedSocket() client: Socket){
        console.log(`${client.id} has the new nickname: ${data}`)
    }
}