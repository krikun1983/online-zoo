
//Выдвижение меню в header на 640
document.querySelector('.burger-header').onclick = function () {
    let header = document.querySelector(".nav-header");
    let burgerHeader = document.querySelector(".burger-header");
    burgerHeader.classList.toggle("burger-header-active");
    header.classList.toggle("nav-header-show");
}