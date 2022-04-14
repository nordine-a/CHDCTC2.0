let hardSkillsContainer= document.querySelector("[data-hard-skills-container] > .skills-cards");
let softSkillsContainer= document.querySelector("[data-soft-skills-container] > .skills-cards");


function createNewSkill(title, hard, imgSrc, scoreBarLevel, scoreBarColor, position){
  let skillCard= document.createElement("div");
  skillCard.classList.add("card");

  let skillTitle= document.createElement("h2");
  skillTitle.innerHTML= title;

  let skillImage= document.createElement("img");
  skillImage.setAttribute("src", imgSrc);

  let scoreBar= document.createElement("div");
  scoreBar.classList.add("score-bar");

  let skillScoreBarLevel= document.createElement("div");
  skillScoreBarLevel.classList.add("score-bar-level");
  skillScoreBarLevel.style.width= scoreBarLevel+"%";
  skillScoreBarLevel.style.backgroundColor= scoreBarColor;
  skillScoreBarLevel.dataset.skillCard="";


  scoreBar.append(skillScoreBarLevel);

  skillCard.append(skillTitle);
  skillCard.append(skillImage);
  skillCard.append(scoreBar);

  if (hard){
    placeSkill(skillCard, position, hardSkillsContainer);
  }

  else {
    placeSkill(skillCard, position, softSkillsContainer);
  }

  // if (hard) hardSkillsContainer.append(skillCard);
  // else softSkillsContainer.append(skillCard);

}

function placeSkill(skill, position, container){
  let cards= container.querySelectorAll("[data-skill-card]");

  if (!position || position>cards.length) {
    container.append(skill);
    return;
  }
  if (position==1) {
    container.prepend(skill);
    return;
  }

  let previusCard= cards[position-2];
  previusCard.after(skill);

}


//creation of javascript skill

createNewSkill("java" , true, "assets/img/skills/Java-Logo.png", 55, "#F27405", 3);


createNewSkill("javascript" , true, "assets/img/skills/JavaScript-Logo.png", 55, "#F1BF25", 3);
