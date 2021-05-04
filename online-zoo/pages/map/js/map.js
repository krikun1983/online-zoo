//ссылки
const panda = document.getElementById('panda');
const gorilla = document.getElementById('gorilla');
const eagle = document.getElementById('eagle');
const lemur = document.getElementById('lemur');
panda.addEventListener('click', () => {
    window.location.href = '../../pages/zoos/panda.html';
})
gorilla.addEventListener('click', () => {
    window.location.href = '../../pages/zoos/gorilla.html';
})
eagle.addEventListener('click', () => {
    window.location.href = '../../pages/zoos/baldEagle.html';
})
lemur.addEventListener('click', () => {
    window.location.href = '../../pages/zoos/lemur.html';
})
////////////////////// Модальные окна //////////////////////////
///////Дефолтная/////////////////////
const bodyPage = document.body;
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
    hiddenModal();
    openModalDonatOne();
    if (event.target.value == '') {
        inputDonatOne.focus();
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
//Закрываем первое окно донаты нажатием на мимо окна
modalDonatOne.addEventListener('click', (event) => {
    if (event.target === modalDonatOne) {
        hiddenModalDonatOne();
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
    let val = inputDonatOne.value.split("");
    if (val.length > 4) {
        inputDonatOne.value = val.slice(0, 4).join("");
    }
});

//Делаю, чтобы кнопки переносили данные в поле ввода первого окна днатов
modalBtnsDonatNumbersParent.addEventListener('click', (event) => {
    event.preventDefault();
    inputDonatOne.value = event.target.value;
    modalBtnsDonatNumbers.forEach((btn) => {
        btn.classList.remove('btn-active')
        if (btn.value == event.target.value) {
            btn.classList.add('btn-active');
        }
    })
});
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
    let val = number.value.split("");
    if (val.length > 3) {
        number.value = val.slice(0, 3).join("");
    }
    validatetCvv();
});
////конец 4 модалка////


//Выдвижение меню в header на 640
document.querySelector('.burger-header').onclick = function () {
    let header = document.querySelector(".nav-header");
    let burgerHeader = document.querySelector(".burger-header");
    burgerHeader.classList.toggle("burger-header-active");
    header.classList.toggle("nav-header-show");
}