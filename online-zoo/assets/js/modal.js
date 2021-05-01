//Sidebar

const btnArrowShowHidden = document.querySelector('.sidebar__link_brackets');

const sidebar = document.querySelector('.sidebar');
const sidebarLinkBrackets = document.querySelector('.sidebar__link_brackets');
const sidebarArrow = document.querySelector('.sidebar__arrow');

const sidebarLifeAll = document.querySelectorAll('.sidebar__life');
const sidebarItemBgAll = document.querySelectorAll('.sidebar__item_bg');
const sidebarItemLinkAll = document.querySelectorAll('.sidebar__item_link');

const sidebarItemBgActive = document.querySelector('.sidebar__item_active');

btnArrowShowHidden.addEventListener('click', () => {

    const arr = [sidebar, sidebarLinkBrackets, sidebarArrow];
    arr.forEach(elem => {
        elem.classList.toggle('show');
    })

    sidebarItemBgActive.classList.toggle('show_active');

    sidebarLifeAll.forEach(elem => {
        elem.classList.toggle('show');
    })
    sidebarItemBgAll.forEach(elem => {
        elem.classList.toggle('show');
    })
    sidebarItemLinkAll.forEach(elem => {
        elem.classList.toggle('show');
    })

})

///////КАРУСЕЛЬ САЙДБАР///////
const btnArrowShowBottomSlider = document.querySelector('.sidebar__arrow');
const images = document.querySelectorAll('.sidebar__list_content_img');
btnArrowShowBottomSlider.addEventListener('click', () => {
    images.forEach(elem => {
        elem.classList.toggle('hidden');
    })
})



