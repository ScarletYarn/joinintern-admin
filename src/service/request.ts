import axios from 'axios'

let baseURL
if (process.env.NODE_ENV === 'development')
  baseURL = 'http://47.103.194.103:8080'
else baseURL = 'https://www.joinintern.cn'

export const service = axios.create({
  baseURL: baseURL,
  timeout: 1000
})

service.interceptors.response.use(
  res => {
    if (res.status == 200) return res.data
    else return Promise.reject(res.status)
  },
  err => {
    return Promise.reject(err)
  }
)
