import axios from 'axios';

const CUSTOMER_API_URL = 'http://localhost:8080/api/customers/';

const customer = {
    getAll: () => {
        return axios
        .get(CUSTOMER_API_URL)
        .then((res) => (res.data))
        .catch((err) => (err));
    },

    filterCustomer: (term) =>{
        return axios
        .get(`${CUSTOMER_API_URL}?term=${term}`)
        .then((res) => (res.data))
        .catch((err) => (err));
    },

    saveCustomer: (id, value) => {
        return axios
        .put(`${CUSTOMER_API_URL}${id}`, value)
        .then((res)=>(res.data))
        .catch((err)=>(err));

    }
}

export default customer;