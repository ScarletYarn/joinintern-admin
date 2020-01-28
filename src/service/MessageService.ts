import { Message } from '@/models/Message'
import { BasePath, GET, POST, Request, RequestParam } from '@/utils/Http'

@BasePath('/message')
export class MessageService {

  @Request({ method: POST, path: '/get' })
  public static getMessage(
    @RequestParam('user_id') user_id: string
  ): Promise<Array<Message>> {
    // @ts-ignore
    return null
  }

}
