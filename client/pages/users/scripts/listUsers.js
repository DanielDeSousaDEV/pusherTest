import api from "../../../config/apiConfig.js";

const table = document.getElementById('usersTable')

async function getUsersData() {
    let data = await api.get('/users')
    console.log(data);
    
    updateTable(await data.data)
}
function updateTable(data) {
    data.forEach(user => {
        let tableRow = document.createElement('tr')
        let tableIdCell = document.createElement('td')
        tableIdCell.innerText = user.id
        
        let tableNameCell = document.createElement('td')
        tableNameCell.innerText = user.name

        let tableEmailCell = document.createElement('td')
        tableEmailCell.innerText = user.email

        tableRow.append(tableIdCell, tableNameCell, tableEmailCell)

        table.append(tableRow)
    });
}

getUsersData()