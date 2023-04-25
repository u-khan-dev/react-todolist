const API_KEY = process.env.REACT_APP_API_KEY;

export const getQuote = async () => {
    return fetch('https://api.api-ninjas.com/v1/quotes?category=inspirational', {
        headers: {
            'X-Api-Key': API_KEY
        }
    })
    .then(res => {
        if (res.ok) return res.json();
        throw res;
    })
    .then(data => {
        return data[0];
    });
};