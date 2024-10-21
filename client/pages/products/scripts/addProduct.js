import api from '../../../config/apiConfig.js';

let form = document.querySelector('form')
let salerSelect = document.getElementById('salerSelect')

form.addEventListener('submit', handleSubmitForm)

function handleSubmitForm(event) {
    event.preventDefault()

    let form = event.target

    let addUserForm = new FormData(form)

    addUserForm.forEach((value,key)=>{
        console.log('key:', key);
        console.log('value:', value);
    })
    
    api.post('/sales', addUserForm).then((data)=>{
        console.log('deu certo', data);
    }).catch((erro)=>{
        console.log('deu tudo errado', erro);
    })
}

function getUsersData() {
    api.get('/products').then((response)=>{
        updateUserSelect(response.data)
        console.log(response);
    })
}

function updateUserSelect(Users) {
    Users.map((user)=>{
        let userOption = document.createElement('option')
        userOption.innerText = user.name
        userOption.value = user.id
        salerSelect.appendChild(userOption)            
    })
}

getUsersData()

//disabilitar o botão antes de carregar