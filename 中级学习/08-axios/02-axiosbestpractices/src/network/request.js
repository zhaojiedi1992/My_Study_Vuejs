import defaultAxios  from "axios";

import qs from 'qs'

export default  function axios(option){
  const instance = defaultAxios.create({
    baseUrl: 'http://152.136.185.210:7878/api/m5/',
    timeout: 5000,
  })
  return instance(option)
}
