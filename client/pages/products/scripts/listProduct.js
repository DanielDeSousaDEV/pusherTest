import api from "../../../config/apiConfig.js";

const table = document.getElementById('productsTable')

function getProductsData() {
    api.get('/products').then((response)=>{
        updateTable(response.data)
    })
}
async function updateTable(data) {
    data.forEach(product => {
        let tableRow = document.createElement('tr')
        let tableIdCell = document.createElement('td')
        tableIdCell.innerText = product.id
        
        let tableUser = document.createElement('td')
        tableUser.innerText = product.name

        let tableProduct = document.createElement('td')
        tableProduct.innerText = product.price
        
        let tableSalerName = document.createElement('td')
        tableSalerName.innerText = product.user.name

        tableRow.append(tableIdCell, tableUser, tableProduct, tableSalerName)

        table.append(tableRow)
    });
}

getProductsData()