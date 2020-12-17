
// menu hamburger styles

const hamburger      = document.querySelector('.header .nav .nav-items .hamburger');
const menu           = document.querySelector('.header .nav .nav-items ul');

    hamburger.addEventListener('click',()=>{
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
    }); 

// main slider styles