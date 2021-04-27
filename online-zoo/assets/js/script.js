////////////////////// реализация модалки //////////////////////////
///////ПЕРВАЯ МОДАЛКА/////////////////////
let showModal = document.querySelector('.payfeed__btn');
let showModalTwo = document.querySelector('.btn-transparent_link');
let closeModalWindow = document.querySelector('.pop-ap-wrapper-container');
let closeModal = document.querySelector('.pop-ap-wrapper-close');
const scroll = window.innerWidth - document.documentElement.clientWidth;

function openModalOne() {
  closeModalWindow.style.display = 'block'
  document.body.style.overflow = 'hidden';
  document.body.style.paddingRight = scroll + 'px';
}
function closeModalOne() {
  closeModalWindow.style.display = 'none'
  document.body.style.overflow = ''
  document.body.style.paddingRight = '0px';
}
showModal.addEventListener('click', function () {
  openModalOne();
})
showModalTwo.addEventListener('click', function (e) {
  e.preventDefault();
  openModalOne();
})
closeModal.addEventListener('click', function () {
  closeModalOne();
})
closeModalWindow.addEventListener("click", (e) => {
  if (e.target === closeModalWindow) {
    closeModalOne();
  }
})
///////Конец первой модалки////////////

//Ограничеваю форму с донатом в 4 символа
document.querySelector('.donation__input').onclick = numberLimitation;

function numberLimitation(input, limit) {

  let str;

  if (typeof input === "string") {
    str = document.querySelector(input);
  } else {
    input;
  }

  const limits = (e) => {
    let val = str.value.split("");
    if (val.length > limit) {
      str.value = val.slice(0, limit).join("");
    }
  };

  str.addEventListener("input", limits);
}

numberLimitation("#donations", 4);

//Выдвижение меню в header на 640
document.querySelector('.burger-header').onclick = function () {
  let header = document.querySelector(".nav-header");
  let burgerHeader = document.querySelector(".burger-header");
  burgerHeader.classList.toggle("burger-header-active");
  header.classList.toggle("nav-header-show");
}

//меняю стрелку у кнопок

// document.querySelector('.friends__left').onclick = arrow;
// document.querySelector('.friends__right').onclick = arrow;

// function arrow(cls, img, color) {
//   document.querySelector(`${cls} img`).setAttribute('src', img);
//   document.querySelector(cls).style.backgroundColor = color;
// }

// arrow('.friends__left', '../assets/icons/UnionLeftInvert.svg', '#20113D');
// arrow('.friends__right', '../assets/icons/UnionRightInvert.svg', '#20113D');