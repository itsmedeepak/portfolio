// Showing menu
const toggle = document.querySelector('.bx-menu');


toggle.addEventListener('click', function () {
    const add_class = document.querySelector('.header-items');
    const del = document.querySelector('.show-nav');
    add_class.classList.toggle('show-nav');

    const nav = document.querySelector('.bx-menu');
    nav.classList.toggle('uil-times')
    
})

//notified

const notified=document.querySelector('.take-info');
const contact_btn=document.querySelector('.get-contacted');
const give_info=document.querySelector('.give-info');
contact_btn.addEventListener('click',()=>{
    notified.style.display="none";
    give_info.style.display="block";

})

// SKILLS
const tap_btn = document.querySelectorAll('.uil-angle-down')
const fst_skill = document.querySelectorAll('#show-menu')

fst_skill[0].classList.toggle("show-menu");
fst_skill[1].classList.toggle("show-menu");
fst_skill[2].classList.toggle("show-menu");
fst_skill[3].classList.toggle("show-menu");
tap_btn[0].addEventListener('click', function () {
    fst_skill[0].classList.toggle("show-menu");
});
tap_btn[1].addEventListener('click', function () {
    fst_skill[1].classList.toggle("show-menu");
});
tap_btn[2].addEventListener('click', function () {
    fst_skill[2].classList.toggle("show-menu");
});
tap_btn[3].addEventListener('click', function () {
    fst_skill[3].classList.toggle("show-menu");
});


// on scrolling














//scroll reveal

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});
// scroll home
sr.reveal('.section-items', {})
sr.reveal('.home-text', {
    
})
sr.reveal('.home-icon1', {
    delay: 400
})
sr.reveal('.isx', {
    delay: 600
})
sr.reveal('.img-home', {
    delay: 800
})

/*SCROLL ABOUT*/

sr.reveal('.isx-resume', {
    delay: 400
});
sr.reveal('.about', {
  
});


/*SCROLL Edu*/

sr.reveal('.public-edu-diagram-dot', {
 
});
sr.reveal('.education', {
 
});
sr.reveal('.edu-layout-1', {
    interval: 200
});
sr.reveal('.edu-layout-2', {
    interval: 200
});
sr.reveal('.public-edu', {
    interval: 200
})

//skills
sr.reveal('.skills', {});
sr.reveal('.protect-items', {
    delay: 200
});

/*SCROLL WORK*/
sr.reveal('.achievement', {
    delay: 120
});
sr.reveal('.project', {
    interval: 200
});
sr.reveal('.project-content', {
    delay: 200
});
/*SCROLL CONTACT*/

sr.reveal('.info-con', {
    interval: 200
});

sr.reveal('.contact-btn', {
    delay: 200
});
