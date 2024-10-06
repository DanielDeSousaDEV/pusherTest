import api from '../config/apiConfig.js';

api.get('http://localhost:1234/users').then((data)=>{
    console.log(data);
    
})

