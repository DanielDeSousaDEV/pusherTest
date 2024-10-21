import api from "../../../config/apiConfig.js";

const table = document.getElementById('salesTable')

async function getSalesData() {
    let data = await api.get('/sales')
    console.log(data);
    
    updateTable(await data.data)
}
function updateTable(data) {
    data.forEach(sale => {
        let tableRow = document.createElement('tr')
        let tableIdCell = document.createElement('td')
        tableIdCell.innerText = sale.id
        
        let tableUser = document.createElement('td')
        tableUser.innerText = sale.id_user

        let tableProduct = document.createElement('td')
        tableProduct.innerText = sale.id_product

        let tableDataDaVenda = document.createElement('td')
        tableDataDaVenda.innerText = sale.date_of_sale

        tableRow.append(tableIdCell, tableUser, tableProduct, tableDataDaVenda)

        table.append(tableRow)
    });
}

getSalesData()