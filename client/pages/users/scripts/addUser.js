import api from '../../../config/apiConfig.js';

let form = document.querySelector('form')

form.addEventListener('submit', handleSubmitForm)

function handleSubmitForm(event) {
    event.preventDefault()

    let form = event.target

    let addUserForm = new FormData(form)

    addUserForm.forEach((value,key)=>{
        console.log('key:', key);
        console.log('value:', value);
    })
    
    api.post('/users', addUserForm).then((data)=>{
        console.log('deu certo', data);
    }).catch((erro)=>{
        console.log('deu tudo errado', erro);
    })
}
