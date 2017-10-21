import axios from 'axios';

export function getName() {
  return {
    type: "GET_DATA",
    payload: axios.get("http://mysafeinfo.com/api/data?list=presidents&format=json")
  }
}


export function setName(nm, pp, tm) {
  return {
    type: "SET_DATA",
    payload: axios.post('http://mysafeinfo.com/api/data?list=presidents&format=json', {nm: nm, pp: pp, tm: tm})
  }
}
