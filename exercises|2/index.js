
let formDOM = document.querySelector("#userForm")
formDOM.addEventListener('submit', formHandler)

function formHandler(event) {
    event.preventDefault()
    const saniye = document.querySelector("#secondd")
    dakikayaCevir(saniye.value)
}


let saniyeListDOM = document.querySelector("#userList")
const dakikayaCevir = (SANIYE) => {

    let dakika = Math.floor(SANIYE / 60)

    let kalanSaniye = SANIYE % 60

    let liDOM = document.createElement('li')
    liDOM.innerHTML = `${dakika} Dakika ${kalanSaniye} Saniye`
    liDOM.classList.add(`list-group-item`, `d-flex`, `justify-content-between`, `align-items-center`)
    saniyeListDOM.appendChild(liDOM)
}

