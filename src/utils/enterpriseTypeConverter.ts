import { EnterpriseType } from '@/models/EnterpriseType'

let typeList: EnterpriseType[] = []

export function initType(types: EnterpriseType[]) {
  typeList = [...types]
}

export function convertType(index: number) {
  return typeList[index].enterpriseTypeName
}
