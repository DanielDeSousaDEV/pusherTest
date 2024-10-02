import api from '../config/apiConfig.js';

api.get('https://jsonplaceholder.typicode.com/posts').then((data)=>{
    console.log(data);
    
})

