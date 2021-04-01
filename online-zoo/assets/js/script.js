//Ограничеваю фрму с донатом в 4 символа
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

//меняю стрелку у кнопок

// document.querySelector('.friends__left').onclick = arrow;
// document.querySelector('.friends__right').onclick = arrow;

// function arrow(cls, img, color) {
//   document.querySelector(`${cls} img`).setAttribute('src', img);
//   document.querySelector(cls).style.backgroundColor = color;
// }

// arrow('.friends__left', '../assets/icons/UnionLeftInvert.svg', '#20113D');
// arrow('.friends__right', '../assets/icons/UnionRightInvert.svg', '#20113D');