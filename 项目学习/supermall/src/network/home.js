import axios from "@/network/request";
export function HomeMultiData(){
  return axios({
    url: '/home/multidata',
  })
}
export function HomeProductData(type,page){
  return axios({
    url: '/home/data',
    params: {
      type,
      page,
    }
  })
}
