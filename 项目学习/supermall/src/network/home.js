import axios from "@/network/request";
export function HomeMultiData(){
  return axios({
    url: '/home/multidata',
  })
}
