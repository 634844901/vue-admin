import axios from 'axios'

// 创建axios实例
const request = axios.create({
  baseURL: 'http://localhost:5757', // api 的 base_url,
  // headers: 'Access-Control-Allow-Origin:*',
  timeout: 5000 // 请求超时时间
})
export default request
