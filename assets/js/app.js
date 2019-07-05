const slider = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const unicorn = document.querySelector('.nav-links .sideIconMenu');
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
        unicorn.classList.toggle('sideIcon-active');
    });
}
slider();