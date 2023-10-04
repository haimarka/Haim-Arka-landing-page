// smooth slide
document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener("click", function(e){
        e.preventDefault(); 
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});


// smooth elements apperens

const sr = ScrollReveal({
    distance: '30px',
    duration: 1800,
    reset: true
});

sr.reveal(`.about-me, .footer_container`, {
    origin: 'top',
    interval: 150
})

sr.reveal(`.container__left, .projects`, {
    origin: 'left'
})

sr.reveal(`.image, .contact`, {
    origin: 'right'
})


// go back button
// const btn = document.getElementById("goBackBtn");
// if(btn){
//     btn.addEventListener("click", goBack);
// }
// function goBack() {
//     history.back();
// }