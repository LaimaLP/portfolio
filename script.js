console.log("labas");

const modalOpen = document.querySelectorAll(".show-modal");

const modal = document.querySelector(".modal");
const modalClose = document.querySelector("[modal-close]");

const modalTitle = document.getElementById('modalTitle');
const modalImg = document.getElementById('modalImg');
const modalImgText = document.getElementById('modalImgText');
const modalLinkToGit = document.getElementById('modalLinkToGit');
const modalLinkToPage = document.getElementById('modalLinkToPage');


const projectData = [
    {
        title: "Game with JS",
        img: "/img/game.png",
        imgText: "text about JS game",
        linkToGit: "https://github.com/LaimaLP/CatchSquare",
        linkToPage: "https://laimalp.github.io/CatchSquare/",
      },
  
  {
    title: "Landing Page with JS",
    img: "/img/collab.png",
    imgText: "text about",
    linkToGit: "https://github.com/LaimaLP/Collab-project",
    linkToPage: "https://laimalp.github.io/Collab-project/",
  },
 
  {
    title: "Tic Tac Toe game",
    img: "/img/tictac.png",
    imgText: `This Tic Tac Toe game was crafted with HTML, CSS, and React. The main focus explore React's
    component-based architecture, emphasizing the using of props for data and functionality
    exchange between components.`,
    
    linkToGit: "https://github.com/LaimaLP/tiktaktoe",
    linkToPage: "https://laimalp.github.io/tiktaktoe/",
  },
];

modalClose.addEventListener("click", (_) => {
  modal.style.display = "none";
});

modalOpen.forEach((item) => {
  item.addEventListener("click", function () {
    if (item.getAttribute("modal-data") == "game") {
        modalTitle.innerHTML= projectData[0].title;
        modalImg.setAttribute('src', projectData[0].img);
        modalImgText.innerHTML= projectData[0].imgText;
        modalLinkToGit.setAttribute('href', projectData[0].linkToGit);
        modalLinkToPage.setAttribute('href', projectData[0].linkToPage);
    }else  if (item.getAttribute("modal-data") == "collab") {
        modalTitle.innerHTML= projectData[1].title;
        modalImg.setAttribute('src', projectData[1].img);
        modalImgText.innerHTML= projectData[1].imgText;
        modalLinkToGit.setAttribute('href', projectData[1].linkToGit);
        modalLinkToPage.setAttribute('href', projectData[1].linkToPage);
    }else  if (item.getAttribute("modal-data") == "tictac") {
        modalTitle.innerHTML= projectData[2].title;
        modalImg.setAttribute('src', projectData[2].img);
        modalImgText.innerHTML= projectData[2].imgText;
        modalLinkToGit.setAttribute('href', projectData[2].linkToGit);
        modalLinkToPage.setAttribute('href', projectData[2].linkToPage);
    }
    modal.style.display = "block";
  });
});
