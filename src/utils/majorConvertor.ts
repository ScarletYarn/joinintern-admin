import { Major } from '@/models/Major'

let majorList: Major[] = []

export function initMajor(majors: Major[]) {
  majorList = [...majors]
}

export function convertMajor(index: number) {
  return majorList[index].majorName
}
