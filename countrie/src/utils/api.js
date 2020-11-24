const getCountries = async (url) => {
    try {
        const response = await fetch(url);
        const data =  response.json();
        return data;
    } catch (error) {
        console.error(error.message);
    }
}
const getCountrie = async (url, param) => {
    try {
        const response = await fetch(`${url}/${param}`);
        const data =  response.json();
        return data;
    } catch (error) {
        console.error(error.message);
    }
}
export default {
    getCountries,
    getCountrie
}