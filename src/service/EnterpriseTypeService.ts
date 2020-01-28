import { EnterpriseType } from '@/models/EnterpriseType'
import { BasePath, GET, POST, Request, RequestParam } from '@/utils/Http'

@BasePath('/enterprise-type')
export class EnterpriseTypeService {

  @Request({ method: GET, path: '/get' })
  public static getAllType(): Promise<Array<EnterpriseType>> {
    // @ts-ignore
    return null
  }

  @Request({ method: POST, path: '/add' })
  public static addType(
    @RequestParam('id') id: string,
    @RequestParam('name') name: string
  ): Promise<boolean> {
    // @ts-ignore
    return null
  }

}
