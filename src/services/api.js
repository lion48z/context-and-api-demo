import axios from "axios";

const BASE_URL = 'https://randomuser.me/api/'

const API_KEY = process.env.REACT_APP_API_KEY;

const fetchRandomUser = async () => {
    try{
        //anything in here will be ran and if there is error it will run the code in the catch block instead of stopping
        const response = await axios.get(BASE_URL);
       
        return response.data.results[0];
    } catch (error) {
       console.error("failed to fetch user", error); //console.error is specific way to log out errors
       return null;
    }
}

export default fetchRandomUser;