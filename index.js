const botaoMenu = document.querySelector('.cabecalhoMenu')
const menu = document.querySelector('.menu-lateral')

botaoMenu.addEventListener('click', () =>{
        menu.classList.toggle("menu-lateral--ativo")
    })