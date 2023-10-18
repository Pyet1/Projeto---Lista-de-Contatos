let idRow = 0
const form = document.querySelector('#input-data')
const inputBtn = document.querySelector('.input-btn')
function eventoForm(event) {
    event.preventDefault()
    const nome = document.querySelector('#nome').value
    const email = document.querySelector('#email').value
    const phone = document.querySelector('#phone').value
    const address = document.querySelector('#address').value
    const table = document.querySelector('#myTable')
   
    const row = table.insertRow(-1)
    const cell1 = row.insertCell(0)
    const cell2 = row.insertCell(1)
    const cell3 = row.insertCell(2)
    const cell4 = row.insertCell(3)
    const cell5 = row.insertCell(4)
    const cell6 = row.insertCell(5)

    idRow += 1
    row.id = `${idRow}`

    const btnCode = document.createElement('button');
    btnCode.classList.add('remove-btn');
    btnCode.textContent = 'Remover';

    btnCode.onclick = () => {
        const rowToRemove = document.getElementById(row.id)
        rowToRemove.parentNode.removeChild(rowToRemove)
    };

    cell1.innerHTML = idRow
    cell2.innerHTML = nome
    cell3.innerHTML = email
    cell4.innerHTML = phone
    cell5.innerHTML = address
    cell6.appendChild(btnCode)

    form.reset()
}

form.addEventListener('submit', eventoForm)