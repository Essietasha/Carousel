
window.addEventListener('DOMContentLoaded', () => {
    timer.classList.add ('timerfont');
    timer.innerHTML = 'TIMER:';

});


let slideIndex = 1;
showSlides(slideIndex);

function addSlides(n) {
    const titleTxt = document.querySelector(".titleText")
    titleTxt.style.fontSize = '12px';
    titleTxt.style.color = 'red';
    setTimeout(() =>{
        showSlides(slideIndex += n);
    }, 1000)
  };
//setTimeout(addSlides, 50000);


function showSlides(n) {
    let i;
    let slide = document.getElementsByClassName("slides");

    if (n > slide.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slide.length }

    for (i = 0; i < slide.length; i++){
        slide[i].style.display = "none";
    }
    
    slide[slideIndex-1].style.display = "block";
}


const timer = document.querySelector('.time');
const runDate = () =>{
    let thisDate = new Date();
    const currentDate = thisDate.toLocaleTimeString('default', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    });
    timer.classList.add ('timerfont');
    timer.innerHTML = `TIMER: ${currentDate}`
};
setInterval(runDate, 1000);



// window.addEventListener('DOMContentLoaded', () => {
//     const timer = document.querySelector('.time');
//     let thisDate = new Date();
//     const currentDate = thisDate.toLocaleTimeString('default', {
//         hour: 'numeric',
//         minute: 'numeric',
//         second: 'numeric',
//     });
//     timer.classList.add ('timerfont');
//     timer.innerHTML = `TIMER: ${currentDate}`
//     setInterval(() =>{
//         timer.classList.add ('timerfont');
//         timer.innerHTML = `TIMER: ${currentDate}`
//     }, 1000)
// });








