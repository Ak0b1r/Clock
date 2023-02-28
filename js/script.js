const soat = document.querySelector('.soat')
const minute = document.querySelector('.minut')
const sekund = document.querySelector('.sekund')
const hours = document.querySelector('.hours')
const minutes = document.querySelector('.minutes')

function clock() {
    const date = new Date()
    const csekund = date.getSeconds() / 60
    const cminute = (csekund + date.getMinutes()) / 60
    const csoat = (cminute + date.getHours()) / 12
    setRotation(sekund, csekund) 
    setRotation(minute, cminute) 
    setRotation(soat, csoat)
    hours.innerHTML = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
    minutes.innerHTML = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    setTimeout(clock, 1000)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}
clock()