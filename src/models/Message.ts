export class Message {

  public messageId: number

  public hasRead: boolean

  public messageTime: string

  public messageContent: string

  public binaryContent: string

  public senderId: string

  public receiverId: string

  constructor(
    messageId: number,
    hasRead: boolean,
    messageTime: string,
    messageContent: string,
    binaryContent: string,
    senderId: string,
    receiverId: string
  ) {
    this.messageId = messageId
    this.hasRead = hasRead
    this.messageTime = messageTime
    this.messageContent = messageContent
    this.binaryContent = binaryContent
    this.senderId = senderId
    this.receiverId = receiverId
  }
}
