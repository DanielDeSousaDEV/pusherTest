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
    
    api.post('/users', addUserForm).then((data)=>{
        console.log('deu certo', data);
    }).catch((erro)=>{
        console.log('deu tudo errado', erro);
    })
}



function getUsersData() {
    api.get('/users').then((response)=>{
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

getUsersData()

//disabilitar o botão antes de carregar