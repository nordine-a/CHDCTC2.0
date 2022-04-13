let menu= document.querySelector("[data-menu]");
let mobileMenu= document.querySelector("[data-mobile-menu]");

function otherButton(butt){
  if (butt=="opener") return document.querySelector("[data-menu-button='closer']");
  else return document.querySelector("[data-menu-button='opener']")
}

menu.addEventListener("click", function(event){
  let target= event.target;
  if (!target.dataset.menuButton) return;
  mobileMenu.classList.toggle("hidden");
  target.classList.toggle("hidden");
  console.log(otherButton(target.dataset.menuButton));
  otherButton(target.dataset.menuButton).classList.toggle("hidden");
})
