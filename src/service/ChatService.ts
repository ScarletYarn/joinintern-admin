import { Message } from '@/models/Message'
import { BasePath, GET, POST, Request, RequestParam } from '@/utils/Http'

@BasePath('/chatting')
export class ChatService {

  @Request({ method: POST, path: '/fetch' })
  public static fetch(
    @RequestParam('uid') uid: string,
    @RequestParam('offset') offset: number
  ): Promise<Array<Message>> {
    // @ts-ignore
    return null
  }

}
