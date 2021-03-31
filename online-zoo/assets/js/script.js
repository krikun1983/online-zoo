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