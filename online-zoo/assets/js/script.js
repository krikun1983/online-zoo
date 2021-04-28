////////////////////// реализация модалки //////////////////////////
///////ПЕРВАЯ МОДАЛКА/////////////////////
let showModalOne = document.querySelector('.payfeed__btn');
let showModalOneTwo = document.querySelector('.btn-transparent_link');
let modalOneWindow = document.querySelector('.pop-ap-wrapper-container');
let closeModalOne = document.querySelector('.pop-ap-wrapper-close');
const scroll = window.innerWidth - document.documentElement.clientWidth;

function openModalOneFn() {
  modalOneWindow.style.display = 'block';
  document.body.style.overflow = 'hidden';
  document.body.style.paddingRight = scroll + 'px';
}
function closeModalOneFn() {
  modalOneWindow.style.display = 'none'
  document.body.style.overflow = ''
  document.body.style.paddingRight = '0px';
}
showModalOne.addEventListener('click', function () {
  openModalOneFn();
})
showModalOneTwo.addEventListener('click', function (e) {
  e.preventDefault();
  openModalOneFn();
})
closeModalOne.addEventListener('click', function () {
  closeModalOneFn();
})
modalOneWindow.addEventListener('click', (e) => {
  if (e.target === modalOneWindow) {
    closeModalOneFn();
  }
})

//Переход на модлаку №2>
let bottonsModalOne = document.querySelector('.pop-ap-wrapper-btn');
bottonsModalOne.addEventListener('click', function (event) {
  event.preventDefault();
  document.querySelector('.form-block__input').value = event.target.value;

  modalOneWindow.style.display = 'none';
  openModalDonatOneFn();
  if (event.target.value == '') {
    document.querySelector('.form-block__input').focus();
  } else {
    let donatBtns = document.querySelectorAll('.form-block__pop-ap-btn');
    donatBtns.forEach((btn) => {
      if (btn.value == event.target.value) {
        btn.classList.add('btn-active')
      }
    })
  }
});
console.log(bottonsModalOne)
///////Конец первой модалки////////////

///////ВТОРАЯ МОДАЛКА/////////////////////
let showModalDonatOne = document.querySelector('.donation__btn');
let modalDonatOne = document.querySelector('.form-donation-wrapper-container');

function openModalDonatOneFn() {
  modalDonatOne.style.display = 'block';
  document.body.style.overflow = 'hidden';
  document.body.style.paddingRight = scroll + 'px';
}

function closeModalDonatOneFn() {
  modalDonatOne.style.display = 'none'
  document.body.style.overflow = ''
  document.body.style.paddingRight = '0px';
}

showModalDonatOne.addEventListener('click', function (e) {
  e.preventDefault();
  let inputValue = document.querySelector('.donation__input');
  let inputOtherValue = document.querySelector('.form-block__input');
  if (inputValue.value == '') {
    let formInput = document.querySelector('.form-block__pop-ap-wrapper-btn');
    formInput.firstElementChild.classList.add('btn-active');
    inputValue.value = 10;
  }
  inputOtherValue.value = inputValue.value;
  openModalDonatOneFn();
})

modalDonatOne.addEventListener('click', (event) => {
  if (event.target === modalDonatOne) {
    let inputValue = document.querySelector('.donation__input');
    closeModalDonatOneFn();
    inputValue.value = '';
  }
})

document.querySelector('.form-block__input').addEventListener('input', function () {
  let donatBtns = document.querySelectorAll('.form-block__pop-ap-btn');
  donatBtns.forEach((btn) => {
    btn.classList.remove('btn-active')
  })

  let number = document.querySelector('.form-block__input');
  let val = number.value.split("");
  if (val.length > 4) {
    number.value = val.slice(0, 4).join("");
  }
});

//Делаю, чтобы кнопки переносили данные в поле ввода
let bottons = document.querySelector('.form-block__pop-ap-wrapper-btn');
bottons.addEventListener('click', function (event) {
  event.preventDefault();
  document.querySelector('.form-block__input').value = event.target.value;
  let donatBtns = document.querySelectorAll('.form-block__pop-ap-btn');
  donatBtns.forEach((btn) => {
    btn.classList.remove('btn-active')
    if (btn.value == event.target.value) {
      btn.classList.add('btn-active')
    }
  })
});

///////Конец второй модалки////////////

///////ТРЕТЬЯ МОДАЛКА/////////////////////
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const nextButton = document.querySelector('.win-donation-two__form-buttom_next');
//Проверка на валидацию полей name и email
const validatet = () => {
  if (nameField.validity.valid && emailField.validity.valid) {
    nextButton.classList.remove('invalid');
  } else {
    nextButton.classList.add('invalid');
  }
}
//Кнопка NEXT - не работает пока поля не валидны
nextButton.addEventListener('click', () => {
  if (nextButton.classList.contains('invalid')) return;
})
//Проверка на валидацию поля name
nameField.addEventListener('input', () => {
  validatet();
})
//Проверка на валидацию поля email
emailField.addEventListener('input', () => {
  validatet();
})

///////Конец третьей модалки/////////////////////
//Ограничеваю форму с донатом в 4 символа
document.querySelector('.donation__input').addEventListener('input', function () {
  let number = document.querySelector('#donations');
  let val = number.value.split("");
  if (val.length > 4) {
    number.value = val.slice(0, 4).join("");
  }
});

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