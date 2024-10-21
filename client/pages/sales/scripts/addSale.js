import api from '../../../config/apiConfig.js';

let form = document.querySelector('form')
let salerSelect = document.getElementById('salerSelect')
let productSelect = document.getElementById('productSelect')

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



function getProductsData() {
    api.get('/products').then((response)=>{
        updateProductsSelect(response.data)
    })
}

function updateProductsSelect(Products) {
    Products.map((product)=>{
        let productOption = document.createElement('option')
        productOption.innerText = product.name
        productOption.value = product.id
        productSelect.appendChild(productOption)
    })
}

getProductsData()

function getUsersData() {
    api.get('/users').then((response)=>{
        updateUsersSelect(response.data)
    })
}

function updateUsersSelect(Users) {
    console.log(Users);
    
    Users.map((user)=>{
        let userOption = document.createElement('option')
        userOption.innerText = user.name
        userOption.value = user.id
        salerSelect.appendChild(userOption)
    })
}

getUsersData()

//disabilitar o botão antes de carregar