import axios from "axios";
const url="api/tasklist/";
export default class Task{
    static get(){
        return axios.get(`${url}`)
    }
    static addtask(text){
        return axios.post(`${url}`,{text})
    }
    static delete(id){
        return axios.delete(`${url}${id}`)
    }
}