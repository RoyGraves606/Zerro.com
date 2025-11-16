
const navUl = document.getElementById('navul');

const list = document.querySelectorAll('.li')

document.getElementById('wrap').addEventListener('click',()=>{
        navUl.id='none';
        navUl.classList.toggle('nav')
        navUl.style.animation='fadeIn 0.5s ease'
        list.forEach((l)=>{
            l.classList.toggle('list')
        })
        document.querySelector('nav').addEventListener('mouseleave',()=>{
            navUl.style.animation='fadeOut 0.5s ease'
            setTimeout(()=>{
                navUl.classList.remove('nav')
                navUl.id='wrap'
                list.forEach((l)=>{
                l.classList.remove('list')

                })
            },400)
            
        })
})

