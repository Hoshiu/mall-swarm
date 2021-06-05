import axios from 'axios'
export const post: unknown = (url: string, data = {}) => {
  return new Promise((resolve, reject) => {
    axios.post(url, data, {
      baseURL: 'http://localhost:3000/',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res: unknown) => {
      resolve(res)
    }, (err: unknown) => {
      reject(err)
    })
  })
}
