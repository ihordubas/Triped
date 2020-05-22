import axios from 'axios';

const host = 'http://127.0.0.1:5000';


function get(url, params){
    url = host + url;
    return axios.get(url, { params });
}

function post(url, body){
    url = host + url;
    return axios.post(url,  body );
}

function remove(url){
    url = host + url;
    return axios.delete(url);
}

function put(url, body){
    url = host + url;
    return axios.put(url,  body );
}

export default { get, post, remove, put };