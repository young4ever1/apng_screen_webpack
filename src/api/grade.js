import axios from "axios";
export default function grade() {
    return axios.get('http://www.bingjs.com:81/Grade/GetAll');
}
