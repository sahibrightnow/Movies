import axios from 'axios'

import { APP_KEY, BASE_URL } from '../config/api_config';

export const getTitles = async (category,type) => {
    try {
        
        const url = BASE_URL + category + '/' + type + '?api_key=' + APP_KEY + '&language=en-US';
        
        const response = await axios.get(url)
    
        const titles = response.data.results;
       
    
        return titles;

    }

    catch (err) {
        throw err;
    }


}

export const getSearch = async (category,type, query) => {
    try {
        
        const url = BASE_URL + category + '/' + type + '?api_key=' + APP_KEY + '&language=en-US&query=' + query;
        
        const response = await axios.get(url)
    
        const titles = response.data.results;
       
    
        return titles;

    }

    catch (err) {
        throw err;
    }


}
