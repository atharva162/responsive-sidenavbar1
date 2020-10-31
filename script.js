var navSlide=() =>{
  const toggle= document.querySelector('.toggle');
  const nav= document.querySelector('.nav-links');
  const navLinks= document.querySelectorAll('.nav-links li');

  toggle.addEventListener('click',() =>{
    nav.classList.toggle('nav-active');
    navLinks.forEach((link, index) => {
       if(link.style.animate){
         link.style.animation=''
       } else{
         link.style.animation= `navLinkFade 0.5s ease forwards ${index /7 + 0.5}s`;
       }
    });
  });
}

navSlide();