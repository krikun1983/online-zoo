const cardField = document.getElementById('card');
const cvvField = document.getElementById('cvv');
const monthField = document.getElementById('month');
const yearField = document.getElementById('year');
const completeButton = document.querySelector('.win-donation-three__form-buttom_complete');

const validatet = () => {
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

completeButton.addEventListener('click', () => {
    if (completeButton.classList.contains('invalid')) return;
})

cardField.addEventListener('input', () => {
    validatet();
})
cvvField.addEventListener('input', () => {
    validatet();
})
monthField.addEventListener('input', () => {
    validatet();
})
yearField.addEventListener('input', () => {
    validatet();
})
cardField.addEventListener('keydown', function (event) {
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

function createMask(event) {
    let matrix = '____-____-____-____',
        i = 0,
        def = matrix.replace(/\D/g, ''),
        val = this.value.replace(/\D/g, '')

    if (def.length >= val.length) {
        val = def
    }

    this.value = matrix.replace(/./g, function (a) {
        return /[_\d]/.test(a) && i < val.length
            ? val.charAt(i++)
            : i >= val.length
                ? ''
                : a
    })
    validatetCard();
}

cardField.addEventListener('input', createMask);

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