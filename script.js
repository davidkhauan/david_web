let btnMenu = document.getElementById ('btn-menu')
let menuMobile = document.getElementById ('menu-mobile')
let overlay = document.getElementById ('overlay-menu')

btnMenu.addEventListener ('click', () => {
    menuMobile.classList.add ('abrir-menu')
})
menuMobile.addEventListener ('click', () => {
    menuMobile.classList.remove ('abrir-menu')
})
overlay.addEventListener ('click', () => {
    menuMobile.classList.remove ('abrir-menu')
})
window.onscroll = () => {
    funcaoScroll()
}

function funcaoScroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById ('scroll').style.display = "block"
    } else {
        document.getElementById ('scroll').style.display = "none"
    }
}

document.getElementById ('scroll').onclick = () => {
    funcaoTopo()
}

function funcaoTopo() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}