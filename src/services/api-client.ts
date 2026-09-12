import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '346fe412c82845c5b1d7b97d97a19b4b'
    }
})