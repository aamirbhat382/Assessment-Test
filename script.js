let URL = 'https://run.mocky.io/v3/d53400a3-6126-495e-9d16-0b4414b537b3'

function markUp(data) {
    return data.map(element => {
        return `<tr>
        <th scope="row" class="text-indigo fw-bold">${element.id}</th>
        <td>${element.name}</td>
        <td>${element.company}</td>
        <td>${element.orderId}</td>
        <td>${element.invoicepaid}</td>
        <td>${element.invoicePending}</td>
        <td> <i class=" ni ni-credit-card "></i></td>
    </tr>`
    }).join('')
}

fetch(URL, {
        headers: {
            "X-Requested-With": "XMLHttpRequest"
        }
    }).then(response => response.text())
    .then((data) => {
        // Convert to Valid JSON String
        let validString = JSON.stringify(data + '}')
            // Parse into JSON
            //  JSON.parse returns a String 
            // run Again JSON.parse
        let validJson = JSON.parse(JSON.parse(validString))

        // console.log(validJson.clients)

        let tableData = document.querySelector('.table-body')
            //  Call markUp Function
        let mark_up = markUp(validJson.clients)
        tableData.innerHTML = mark_up
    });