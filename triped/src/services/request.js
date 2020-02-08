import axios from 'axios';

const host = 'http://127.0.0.1:5000';


function get(url, params){
    url = host + url;
    return axios.get(url, { params });
}


export default { get };