import api from "../../../config/apiConfig.js";

const table = document.getElementById('salesTable')

async function getSalesData() {
    let data = await api.get('/sales')
    console.log(data);
    
    updateTable(await data.data)
}
async function updateTable(data) {
    data.forEach(sale => {
        let tableRow = document.createElement('tr')
        let tableIdCell = document.createElement('td')
        tableIdCell.innerText = sale.id
        
        let tableUser = document.createElement('td')
        tableUser.innerText = sale.user.name

        let tableProduct = document.createElement('td')
        tableProduct.innerText = sale.product.name
        
        let tableDataDaVenda = document.createElement('td')
        tableDataDaVenda.innerText = new Date(sale.date_of_sale).toLocaleString('pt-br')

        tableRow.append(tableIdCell, tableUser, tableProduct, tableDataDaVenda)

        table.append(tableRow)
    });
}

getSalesData()