import { LOGIN, LOGOUT } from '@/store/mutation-types'

export const mutation = {
  [LOGIN](state: any, uid: string) {
    state.uid = uid
  },

  [LOGOUT](state: any) {
    state.uid = null
  }
}
