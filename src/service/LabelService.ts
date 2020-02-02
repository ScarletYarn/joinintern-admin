import { Label } from '@/models/Label'
import { BasePath, GET, POST, Request, RequestParam } from '@/utils/Http'

@BasePath('/label')
export class LabelService {

  @Request({ method: GET, path: '/get' })
  public static getLabels(): Promise<Array<Label>> {
    // @ts-ignore
    return null
  }

  @Request({ method: POST, path: '/add' })
  public static addLabel(
    @RequestParam('user_id') user_id: string,
    @RequestParam('name') name: string
  ): Promise<boolean> {
    // @ts-ignore
    return null
  }

  @Request({ method: GET, path: '/get-post' })
  public static getPostLabels(): Promise<Array<Label>> {
    // @ts-ignore
    return null
  }

}
