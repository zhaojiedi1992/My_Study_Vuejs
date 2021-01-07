
import originAxios from "axios";

export default function axios(option){
  let  defaultInstance = originAxios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
  })
  return defaultInstance(option)
}
