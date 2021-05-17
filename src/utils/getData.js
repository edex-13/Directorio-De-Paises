const API = 'https://restcountries.eu/rest/v2/all'
const getData = async () => {
    try{
        const response = await fetch(API);
        const data = await response.json()
        return data; 
    }
    catch(error){
        console.error(error)
        return null;
    }
};
export default getData
