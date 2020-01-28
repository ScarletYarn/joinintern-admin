import { Major } from '@/models/Major'
import { BasePath, GET, POST, Request, RequestParam } from '@/utils/Http'

@BasePath('/major')
export class MajorService {

  @Request({ method: GET, path: '/get' })
  public static getAllMajor(): Promise<Array<Major>> {
    // @ts-ignore
    return null
  }

  @Request({ method: POST, path: '/add' })
  public static addMajor(
    @RequestParam('id') id: string,
    @RequestParam('name') name: string
  ): Promise<boolean> {
    // @ts-ignore
    return null
  }

}
