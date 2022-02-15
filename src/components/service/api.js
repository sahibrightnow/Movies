import axios from 'axios'

import { APP_KEY, BASE_URL } from '../config/api_config';

export const getMovies = async type => {
    try {
        const url = BASE_URL + type + '?api_key=' + APP_KEY + '&language=en-US';
        


        


        const response = await axios.get(url)
    
        const movies = response.data.results;
       
    
        return movies

    }

    catch (err) {
        throw err;
    }


}