//SPA functionality
const homeBtn = document.querySelector('.home-btn');
const galaxyBtn = document.querySelector('.galaxy-btn');
const favoritesBtn = document.querySelector('.favorites-btn');

let curPage = document.querySelector('.home');

const changePage = (e) => {
  const page = e.target.className.split('-')[0];

  if (page === curPage.className.split('-')[0]) return;

  curPage.classList.toggle('hide');
  curPage = document.querySelector(`.${page}`);
  curPage.classList.toggle('hide');
};

homeBtn.addEventListener('click', changePage);
galaxyBtn.addEventListener('click', changePage);
favoritesBtn.addEventListener('click', changePage);
