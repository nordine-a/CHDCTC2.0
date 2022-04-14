// let currentScroll;
//
// let skillsCards= document.querySelectorAll("[data-skill-card]");
//
// for (skillCard of skillsCards){
//   skillCard.animationPoint= skillCard.getBoundingClientRect().top + window.pageYOffset;
//
//
//   let maxWidth= skillCard.querySelector(".score-bar-level").clientWidth;
//
//   skillCard.maxWidth= maxWidth;
//
//   skillCard.querySelector(".score-bar-level").style.width= 0 + "px";
// }
//
// function animate(card, scoreBar){
//   let width=0;
//   while(parseInt(scoreBar.clientWidth)<card.maxWidth)
//   setInterval(function(){
//     width+= 20;
//     console.log(width);
//     scoreBar.style.width= width +"%";
//   }, )
// }
//
//
// window.addEventListener('scroll', function() {
//   currentScroll = window.pageYOffset;
//   for (let skillCard of skillsCards){
//     if(currentScroll>=skillCard.animationPoint){
//       animate(skillCard, skillCard.querySelector(".score-bar-level"));
//     }
//
//   }
// });
