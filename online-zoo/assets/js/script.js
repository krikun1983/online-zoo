///////КАРУСЕЛЬ Первая///////
const carousel = document.querySelector('.friends__carts_carousel');
const content = document.querySelector('.friends__carts_content');
const next = document.querySelector('.friends__right');
const prev = document.querySelector('.friends__left');
const gap = () => {
  if (carousel.offsetWidth === 1920) {
    return 480;
  }
  if (carousel.offsetWidth === 1200) {
    return 475;
  }
}

next.addEventListener('click', (event) => {
  carousel.scrollBy(gap(), 0)
  if (carousel.scrollWidth !== 0) {
    prev.classList.remove('opacity');
  }
  if (content.scrollWidth - (width - gap() / 2) <= carousel.scrollLeft + gap()) {
    next.classList.add('opacity');
  }
});

prev.addEventListener('click', (event) => {
  carousel.scrollBy(-(gap()), 0);
  const cof = carousel.scrollLeft + gap();
  if (cof - gap() <= 0) {
    prev.classList.add('opacity');
  }
  if (!content.scrollWidth - width <= carousel.scrollLeft + width) {
    next.classList.remove('opacity');
  }
});

let width = carousel.offsetWidth;
window.addEventListener('resize', (event) => (width = carousel.offsetWidth));
///////КАРУСЕЛЬ Вторая///////
const gap2 = 30;
const carouselThink = document.querySelector('.users_think__cards_carousel');
const contentThink = document.querySelector('.users_think__cards_content');
const nextThink = document.querySelector('.users_think__right');
const prevThink = document.querySelector('.users_think__left');

let slideIndex = 0;
let slideCoefficient = 2;

let cardWidth = document.querySelector('.users_think__card').offsetWidth;
window.addEventListener('resize', (event) => {
  cardWidth = document.querySelector('.users_think__card').offsetWidth;
});

nextThink.addEventListener("click", (event) => {
  delayAuto();
  slideIndex += 2;
  carouselThink.scrollTo((cardWidth + gap2) * slideIndex, 0);
  if (slideIndex > 0) {
    prevThink.classList.remove('opacity');
  }
  if (slideIndex >= 6) {
    nextThink.classList.add('opacity');
  }
});

prevThink.addEventListener("click", (event) => {
  delayAuto()
  slideIndex -= 2;
  carouselThink.scrollTo((cardWidth + gap2) * slideIndex, 0);
  if (slideIndex < 6) {
    nextThink.classList.remove('opacity');
  }
  if (slideIndex <= 0) {
    prevThink.classList.add('opacity');
  }
});

const slideFunction = () => {
  slideIndex += 2;
  if (slideIndex > 0) {
    prevThink.classList.remove('opacity');
  }
  if (slideIndex >= 6) {
    nextThink.classList.add('opacity');
  }
  if (slideIndex > 6) {
    if (!(slideIndex < 8)) {
      slideIndex = 0;
    }
    prevThink.classList.add('opacity');
    nextThink.classList.remove('opacity');
  }
  carouselThink.scrollTo((cardWidth + gap2) * slideIndex, 0);
}

let autoInterval = setInterval(slideFunction, 15000);
let autoTimeout = null;

const delayAuto = () => {
  clearTimeout(autoTimeout);
  clearInterval(autoInterval);
  autoInterval = null;
  autoTimeout = setTimeout(() => {
    clearInterval(autoInterval);
    autoInterval = setInterval(slideFunction, 15000);
  }, 45000);
}

carouselThink.addEventListener('click', delayAuto)

////////////////////// Модальные окна //////////////////////////
///////Дефолтная/////////////////////
const bodyPage = document.body;
const showModalBtn = document.querySelector('.payfeed__btn');
const showModalBtnTwo = document.querySelector('.btn-transparent_link');
const modal = document.querySelector('.pop-ap-wrapper-container');
const closeModal = document.querySelector('.pop-ap-wrapper-close');
const inputDonatOne = document.querySelector('.form-block__input');
const scroll = window.innerWidth - document.documentElement.clientWidth;
//Открыть первое окно
const openModal = () => {
  modal.classList.remove('hidden');
  bodyPage.style.overflow = 'hidden';
  bodyPage.style.paddingRight = scroll + 'px';
}
//Закрыть первое окно
const hiddenModal = () => {
  modal.classList.add('hidden');
  bodyPage.style.overflow = '';
  bodyPage.style.paddingRight = '0px';
}
//Открыть первое окно нажатием на кнопку блока payfeed
showModalBtn.addEventListener('click', () => {
  openModal();
})
//Открыть первое окно нажатием на кнопку блока футер
showModalBtnTwo.addEventListener('click', (e) => {
  e.preventDefault();
  openModal();
})
//Закрыть первое окно нажатием на крестик
closeModal.addEventListener('click', () => {
  hiddenModal();
})
//Закрыть первое окно нажатием на свободное поле
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    hiddenModal();
  }
})
//Кнопка в блоке донаты
const showModalDonatOneBtn = document.querySelector('.donation__btn');
const inputPageDonat = document.querySelector('.donation__input');
//Модальное окно донаты №1
const modalDonatOne = document.querySelector('.form-donation-wrapper-container');
//Открыть первое окно донатов
const openModalDonatOne = () => {
  modalDonatOne.classList.remove('hidden');
  bodyPage.style.overflow = 'hidden';
  bodyPage.style.paddingRight = scroll + 'px';
}
//Закрыть первое окно донатов
const hiddenModalDonatOne = () => {
  modalDonatOne.classList.add('hidden');
  bodyPage.style.overflow = '';
  bodyPage.style.paddingRight = '0px';
}

//Переходим из первого окна на окно донаты №1
const modalBtnsNumbersParent = document.querySelector('.pop-ap-wrapper-btn');
const modalBtnsDonatNumbersParent = document.querySelector('.form-block__pop-ap-wrapper-btn');
const modalBtnsDonatNumbers = document.querySelectorAll('.form-block__pop-ap-btn');

modalBtnsNumbersParent.addEventListener('click', (event) => {
  event.preventDefault();
  inputDonatOne.value = event.target.value;
  if (event.target.contains(modalBtnsNumbersParent)){
    return;
  } else {
    hiddenModal();
    openModalDonatOne();
  }

  if (event.target.value == '') {
    inputDonatOne.focus();
    modalBtnDonatOther.style.opacity = '1';
  } else {
    modalBtnsDonatNumbers.forEach((btn) => {
      if (btn.value == event.target.value) {
        btn.classList.add('btn-active');
      } else {
        btn.classList.remove('btn-active');
      }
    })
  }
});

//Открываем первое окно донаты нажатием на кнопку в блоке донаты
showModalDonatOneBtn.addEventListener('click', (event) => {
  event.preventDefault();
  if (inputPageDonat.value == '') {
    modalBtnsDonatNumbersParent.firstElementChild.classList.add('btn-active');
    inputPageDonat.value = 10;
  } else {
    modalBtnDonatOther.style.opacity = '1';
  }
  inputDonatOne.value = inputPageDonat.value;
  openModalDonatOne();

  modalBtnsDonatNumbers.forEach((btn) => {
      if (btn.value == inputPageDonat.value) {
        btn.classList.add('btn-active');
        modalBtnDonatOther.style.opacity = '0.5';
      } else {
        btn.classList.remove('btn-active');
        inputDonatOne.focus();
      }
  })
})
//Закрываем первое окно донаты нажатием на мимо окна
modalDonatOne.addEventListener('click', (event) => {
  if (event.target === modalDonatOne) {
    hiddenModalDonatOne();
    inputPageDonat.value = '';
    bodyPage.style.overflow = '';
    bodyPage.style.paddingRight = '0px';
    modalBtnsDonatNumbers.forEach((btn) => {
      btn.classList.remove('btn-active')
    })
  }
})
//При вводе в поле input other убираю активность кнопок
inputDonatOne.addEventListener('input', () => {
  modalBtnsDonatNumbers.forEach((btn) => {
    btn.classList.remove('btn-active')
  })
  //ограничиваю поле input 4 знаками
  let val = inputDonatOne.value.split('');
  if (val.length > 4) {
    inputDonatOne.value = val.slice(0, 4).join('');
  }
});
const modalBtnDonatOther = document.querySelector('#OtherAmount');
//Делаю, чтобы кнопки переносили данные в поле ввода первого окна днатов
modalBtnsDonatNumbersParent.addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.contains(modalBtnsDonatNumbersParent)){
    return;
  } else {
  inputDonatOne.value = event.target.value;
  modalBtnsDonatNumbers.forEach((btn) => {
    btn.classList.remove('btn-active')
    if (btn.value == event.target.value) {
      btn.classList.add('btn-active');
    }
  })
  modalBtnDonatOther.style.opacity = '0.5';
  }

});

// console.log(modalBtnDonatOther);
modalBtnDonatOther.addEventListener('click', (event) => {
  event.preventDefault();
  modalBtnDonatOther.style.opacity = '1';
  // inputDonatOne.value = '';
  inputDonatOne.focus();
  modalBtnsDonatNumbers.forEach((btn) => {
    btn.classList.remove('btn-active')
    // if (btn.value == event.target.value) {
    //   btn.classList.add('btn-active');
    // }
  })
})

//Переход из первой модлаки донатов во вторую по кнопке NEXT
const nextBtnOne = document.querySelector('.form-block__button_arrow');
const backBtnOne = document.querySelector('.win-donation-two__form-buttom_back');
const modalDonatTwo = document.querySelector('.win-donation-two');
const summaField = document.getElementById('summa');
const animalField = document.getElementById('animal');
//Открыть второе окно донатов
const openModalDonatTwo = () => {
  modalDonatTwo.classList.remove('hidden');
  bodyPage.style.overflow = 'hidden';
  bodyPage.style.paddingRight = scroll + 'px';
}
//Закрыть второе окно донатов
const hiddenModalDonatTwo = () => {
  modalDonatTwo.classList.add('hidden');
  bodyPage.style.overflow = 'hidden';
  bodyPage.style.paddingRight = scroll + 'px';
}
//Проверка на валидацию поля сумма и животные
const validatetSum = () => {
  if (summaField.validity.valid && animalField.validity.valid) {
    nextBtnOne.classList.remove('invalid');
  } else {
    nextBtnOne.classList.add('invalid');
  }
}
//Кнопка NEXT - не работает пока поля не валидны
nextBtnOne.addEventListener('click', () => {
  if (nextBtnOne.classList.contains('invalid')) return;
})
//Проверка на валидацию поля сумма
summaField.addEventListener('input', () => {
  validatetSum();
})
//Проверка на валидацию поля животные
animalField.addEventListener('input', () => {
  validatetSum();
})

//Переход из первого окна донатов во второе окно донатов
nextBtnOne.addEventListener('click', (event) => {
  if (nextBtnOne.classList.contains('invalid')) return;
  event.preventDefault();
  hiddenModalDonatOne();
  openModalDonatTwo();
})
//Возврат из второго окна донатов в первое окно донатов
backBtnOne.addEventListener('click', () => {
  hiddenModalDonatTwo();
  openModalDonatOne();
})
//Закрытие поля вокруг второй модалки донатов
modalDonatTwo.addEventListener('click', (event) => {
  if (event.target === modalDonatTwo) {
    hiddenModalDonatTwo();
    inputPageDonat.value = '';
    bodyPage.style.overflow = '';
    bodyPage.style.paddingRight = '0px';
    modalBtnsDonatNumbers.forEach((btn) => {
      btn.classList.remove('btn-active')
    })
  }
})

const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const nextBtnTwo = document.querySelector('.win-donation-two__form-buttom_next');

//Проверка на валидацию полей name и email
const validatet = () => {
  if (nameField.validity.valid && emailField.validity.valid) {
    nextBtnTwo.classList.remove('invalid');
  } else {
    nextBtnTwo.classList.add('invalid');
  }
}

//Проверка на валидацию поля name
nameField.addEventListener('input', () => {
  validatet();
})
//Проверка на валидацию поля email
emailField.addEventListener('input', () => {
  validatet();
})
//Переход на третью модалку донатов
const backBtnTwo = document.querySelector('.win-donation-three__form-buttom_back');
const modalDonatThree = document.querySelector('.win-donation-three');
//Открыть третью модалку донатов
const openModalDonatThree = () => {
  modalDonatThree.classList.remove('hidden');
  bodyPage.style.overflow = 'hidden';
  bodyPage.style.paddingRight = scroll + 'px';
}
//Закрыть третью модалку донатов
const hiddenModalDonatThree = () => {
  modalDonatThree.classList.add('hidden');
  bodyPage.style.overflow = 'hidden';
  bodyPage.style.paddingRight = scroll + 'px';
}
//переход из второй модалки донатов в третью
nextBtnTwo.addEventListener('click', (event) => {
  if (nextBtnTwo.classList.contains('invalid')) return;
  event.preventDefault();
  hiddenModalDonatTwo();
  openModalDonatThree();
})
//Возврат из третьей модалки донатов во вторую
backBtnTwo.addEventListener('click', () => {
  hiddenModalDonatThree();
  openModalDonatTwo();
})
////4 модалка////
const cardField = document.getElementById('card');
const cvvField = document.getElementById('cvv');
const monthField = document.getElementById('month');
const yearField = document.getElementById('year');
const completeButton = document.querySelector('.win-donation-three__form-buttom_complete');
//Закрытие поля вокруг третьей модалки донатов
modalDonatThree.addEventListener('click', (event) => {
  if (event.target === modalDonatThree) {
    hiddenModalDonatThree();
    inputPageDonat.value = '';
    bodyPage.style.overflow = '';
    bodyPage.style.paddingRight = '0px';
    modalBtnsDonatNumbers.forEach((btn) => {
      btn.classList.remove('btn-active')
    })
  }
})
const validatetComplete = () => {
  if (cardField.validity.valid && cvvField.validity.valid && monthField.validity.valid && yearField.validity.valid) {
    completeButton.classList.remove('invalid');
  } else {
    completeButton.classList.add('invalid');
  }
}
const validatetCard = () => {
  if (cardField.validity.valid) {
    cardField.classList.remove('invalidInput');
  } else {
    cardField.classList.add('invalidInput');
  }
}
const validatetCvv = () => {
  if (cvvField.validity.valid) {
    cvvField.classList.remove('invalidInput');
  } else {
    cvvField.classList.add('invalidInput');
  }
}

//Кнопка Complete - не работает пока поля не валидны
completeButton.addEventListener('click', () => {
  if (completeButton.classList.contains('invalid')) return;
})
cvvField.addEventListener('input', () => {
  validatetComplete();
})
monthField.addEventListener('input', () => {
  validatetComplete();
})
yearField.addEventListener('input', () => {
  validatetComplete();
})

cardField.addEventListener('input', () => {
  let matrix = '____-____-____-____',
    i = 0,
    def = matrix.replace(/\D/g, ''),
    val = cardField.value.replace(/\D/g, '')

  if (def.length >= val.length) {
    val = def
  }

  cardField.value = matrix.replace(/./g, function (a) {
    return /[_\d]/.test(a) && i < val.length
      ? val.charAt(i++)
      : i >= val.length
        ? ''
        : a
  })
  validatetCard();
  validatetComplete();
});

cvvField.addEventListener('keydown', (event) => {
  let num = event.key;
  // Разрешаем: backspace, delete, tab
  if (event.code == 'Backspace' || event.code == 'Delete' || event.code == 'Tab' ||
    // Разрешаем: Ctrl+A
    (event.code == 'KeyA' && event.code === 'ControlLeft') ||
    // Разрешаем: home, end, влево, вправо
    (event.code == 'Home' || event.code == 'End' || event.code == 'ArrowLeft' || event.code == 'ArrowRight')) {

    // Ничего не делаем
    return;
  } else {
    // Запрещаем все, кроме цифр на основной клавиатуре, а так же Num-клавиатуре
    if (isNaN(+num)) {
      event.preventDefault();
    }
  }
});

cvvField.addEventListener('input', () => {
  let number = cvvField;
  let val = number.value.split('');
  if (val.length > 3) {
    number.value = val.slice(0, 3).join('');
  }
  validatetCvv();
});
////конец 4 модалка////
//Ограничеваю форму с донатом в 4 символа
inputPageDonat.addEventListener('input', function () {
  let number = document.querySelector('#donations');
  let val = number.value.split('');
  if (val.length > 4) {
    number.value = val.slice(0, 4).join('');
  }
});

//Выдвижение меню в header на 640
document.querySelector('.burger-header').onclick = function () {
  let header = document.querySelector('.nav-header');
  let burgerHeader = document.querySelector('.burger-header');
  burgerHeader.classList.toggle('burger-header-active');
  header.classList.toggle('nav-header-show');
}