const sideBar = document.querySelector('.sidebar')

const crossBtn = document.querySelector('.sidebar .top .bx-x')
crossBtn.addEventListener('click', ()=>{
    sideBar.style.display = 'none'
})

const menuBtn = document.querySelector('.bx-menu')
menuBtn.addEventListener('click', ()=> {
    sideBar.style.display = 'inline-block'
})