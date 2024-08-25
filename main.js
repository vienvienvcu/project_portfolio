const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
           nav = document.getElementById(navId)

           if(toggle && nav){
            toggle.addEventListener('click', ()=>{
                nav.classList.toggle('show')
            })
           }
}
showMenu('nav-toggle','nav-menu')
// ======REMOVE MENU MOBILE

 const navLink = document.querySelectorAll('.nav--link')
 function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
 }
 navLink.forEach(n => n.addEventListener('click', linkAction))

 // ------SCROLL SECTIONS ACTIVE LINK

//  const sections = document.querySelectorAll('section[id]');
//  window.addEventListener('scroll', scrollActive);
 
//  function scrollActive (){
//     const scrollY = Window.pageYoffset
    
//     sections.forEach(current =>{
//         const sectionHeight = current.offsetHeight
//         const sectionTop = current.offsetTop - 50;
//         sectionId = current.getAttribute('id')
//         if(scrollY >= sectionTop && scrollY < sectionTop + sectionHeight){
//             document.querySelector('.nav--menu a[href*=' + sectionId +']').classList.add('active')
//         }else{
//         document.querySelector('.nav--menu a[href*=' + sectionId +']').classList.remove('active')
//         }
//         console.log(sections)
//     })
//  }
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav--link');
window.onscroll = () => {
    sections.forEach(sec =>{
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');
        if(top >= offset && top < offset + height){
            navLinks.forEach(link =>{
                link.classList.remove('active');
                document.querySelector('.nav--link[href*=' + id +']').classList.add('active')
            });
             
        };
    });
};
//  ================SCROLL REVEAL ANIMATION 
const sr = ScrollReveal({
    origin: 'top',
    distance: '88px',
    duration: 2000,
    reset: true
})
// ＝＝SCROLL HOME
 sr.reveal ('.hometittle',{})
 sr.reveal('.homescroll', {delay: 200})
 sr.reveal('.homeimg', {origin: 'right', delay: 400 })
 
 // SCROLL ABOUT 
 sr.reveal ('.aboutimg',{delay: 500})
 sr.reveal ('.aboutsubtitle',{delay: 300})
 sr.reveal ('.aboutprofesstion',{delay: 400})
 sr.reveal ('.abouttext',{delay: 500})
 
 //SCROLL SKILL 
 sr.reveal ('.skillssubtitle',{})
 sr.reveal ('.skillsname',{distance: '20px', delay: 50 ,interval: 100})
 sr.reveal ('.skillsimg',{delay: 400})

 //SCROLL PORTFOLIO 
 sr.reveal ('.portfolioimg',{interval: 200})

 //SCROLL CONTACT 
 sr.reveal ('.contacsubtitle',{})
 sr.reveal ('.contacttext',{interval:200})
 sr.reveal ('.contactinput',{delay:400})
 sr.reveal ('.contactbutton',{delay:600})