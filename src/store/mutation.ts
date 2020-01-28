import { LOGIN } from '@/store/mutation-types'

export const mutation = {
  [LOGIN] (state: any, uid: string) {
    state.uid = uid
  }
}
