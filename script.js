console.log("labas");

const modalOpen = document.querySelectorAll(".show-modal");

const modal = document.querySelector(".modal");
const modalClose = document.querySelector("[modal-close]");

const modalTitle = document.getElementById("modalTitle");
const modalImg = document.getElementById("modalImg");
const modalImgText = document.getElementById("modalImgText");
const modalLinkToGit = document.getElementById("modalLinkToGit");
const modalLinkToPage = document.getElementById("modalLinkToPage");

const projectData = [
  {
    title: "Game with JS",
    img: "/img/game.png",
    imgText:
      "First-hand practice with JavaScript: Introducing a clicking game designed for practicing JavaScript skills.",
    linkToGit: "https://github.com/LaimaLP/CatchSquare",
    linkToPage: "https://laimalp.github.io/CatchSquare/",
  },

  {
    title: "Landing Page with JS",
    img: "/img/collab.png",
    imgText:
      "First landing page project practicing HTML and CSS, with added functionality implemented using JavaScript.",
    linkToGit: "https://github.com/LaimaLP/Collab-project",
    linkToPage: "https://laimalp.github.io/Collab-project/",
  },

  {
    title: "Tic Tac Toe game",
    img: "/img/tictac.png",
    imgText: `This Tic Tac Toe game was created with HTML, CSS, and React. The main focus explore React's
    component-based architecture, emphasizing the using of props for data and functionality
    exchange between components.`,

    linkToGit: "https://github.com/LaimaLP/tiktaktoe",
    linkToPage: "https://laimalp.github.io/tiktaktoe/",
  },
  {
    title: "Landing Page with React",
    img: "/img/BitMovie.png",
    imgText: `Landing page created for practicing HTML, CSS, and applying React's DRY (Don't Repeat Yourself) principle.`,

    linkToGit: "https://github.com/LaimaLP/Movie-landingpage-react-main",
    linkToPage: "https://github.com/LaimaLP/Movie-landingpage-react-main",
  },
  {
    title: "Bank Application with PHP",
    img: "/img/phpBank.png",
    imgText: `Bank Application with Flexible Data Storage (JSON file or MariaDB). The application incorporates 
    object-oriented programming principles and CRUD operations.`,

    linkToGit: "https://github.com/LaimaLP/bank_oop",
    linkToPage: "https://github.com/LaimaLP/bank_oop",
  },
];

modalClose.addEventListener("click", (_) => {
  modal.style.display = "none";
});

modalOpen.forEach((item) => {
  item.addEventListener("click", function () {
    if (item.getAttribute("modal-data") == "game") {
      modalTitle.innerHTML = projectData[0].title;
      modalImg.setAttribute("src", projectData[0].img);
      modalImgText.innerHTML = projectData[0].imgText;
      modalLinkToGit.setAttribute("href", projectData[0].linkToGit);
      modalLinkToPage.setAttribute("href", projectData[0].linkToPage);
    } else if (item.getAttribute("modal-data") == "collab") {
      modalTitle.innerHTML = projectData[1].title;
      modalImg.setAttribute("src", projectData[1].img);
      modalImgText.innerHTML = projectData[1].imgText;
      modalLinkToGit.setAttribute("href", projectData[1].linkToGit);
      modalLinkToPage.setAttribute("href", projectData[1].linkToPage);
    } else if (item.getAttribute("modal-data") == "tictac") {
      modalTitle.innerHTML = projectData[2].title;
      modalImg.setAttribute("src", projectData[2].img);
      modalImgText.innerHTML = projectData[2].imgText;
      modalLinkToGit.setAttribute("href", projectData[2].linkToGit);
      modalLinkToPage.setAttribute("href", projectData[2].linkToPage);
    } else if (item.getAttribute("modal-data") == "bitMovie") {
      modalTitle.innerHTML = projectData[3].title;
      modalImg.setAttribute("src", projectData[3].img);
      modalImgText.innerHTML = projectData[3].imgText;
      modalLinkToGit.setAttribute("href", projectData[3].linkToGit);
      modalLinkToPage.setAttribute("href", projectData[3].linkToPage);
    } else if (item.getAttribute("modal-data") == "bank") {
      modalTitle.innerHTML = projectData[4].title;
      modalImg.setAttribute("src", projectData[4].img);
      modalImgText.innerHTML = projectData[4].imgText;
      modalLinkToGit.setAttribute("href", projectData[4].linkToGit);
      modalLinkToPage.setAttribute("href", projectData[4].linkToPage);
    }
    modal.style.display = "block";
  });
});
