// ,,,,,,,Menu scroll
window.addEventListener('scroll', function () {

  let headerBody = document.querySelector('.header__body');
  let windowPosition = window.scrollY > 0;

  headerBody.classList.toggle('scrolling-active', windowPosition);
  
});
// .......SEARCH dropdown
const selectElement = document.querySelector('[data-select]');
const selectReal = document.querySelector('[data-select-real]');
selectElement.addEventListener('click', function (event) {
  if (event.target.hasAttribute('data-select-item')) {
    const itemTitle = event.target.getAttribute('data-select-item');
    event.target.closest('[data-select]').querySelector('[data-select-top]').textContent = itemTitle;
    event.target.closest('[data-select]').querySelector('.intro__select-dropdown').classList.toggle('hidden');
    selectReal.value = itemTitle;
  } else {
    this.querySelector('.intro__select-dropdown').classList.toggle('hidden');
  }
});
// ....BUTTON date..
document.querySelector('#intbtn').onclick = function () { 
  // let dateOn = document.querySelector('#on-date').value;
  // let dateOff = document.querySelector('#off-date').value;

  // dateOn = Date.parse(dateOn);
  // dateOff = Date.parse(dateOff);
  // for (let i = dateOn; i < dateOff; i = i + 24 * 60 * 60 * 1000) {
  //   console.log(new Date(i).toISOString());
    
  // }
  // console.log(dateOn);
  
 };
//  ....MENU....
const checkbtn = document.querySelector('.checkbtn');
    const headerMenu = document.querySelector('.header__nav');
    const link = document.querySelector('.header__link');
    const body = document.querySelector('body');


    checkbtn.addEventListener('click', () => {
      headerMenu.classList.toggle('open');
      body.classList.toggle('lock');
    })