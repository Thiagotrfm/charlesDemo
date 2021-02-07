import axios from "axios";

const getKenieQuote = async () => {
    const response = await axios.get('http://api.kanye.rest/');

    return response?.data?.quote || '';
}

export default getKenieQuote;
