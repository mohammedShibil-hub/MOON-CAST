
document.addEventListener('DOMContentLoaded', () =>{
let logoIntro = document.getElementById('logo-intro');
let websiteContent = document.getElementById('website-content');

setTimeout(() => {
    logoIntro.style.display = 'none';
    websiteContent.classList.add('content-visible');
    //
},5000 );
});
