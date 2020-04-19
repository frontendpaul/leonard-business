

const btns = document.querySelectorAll('.js-modal-btn');
const arrow = document.querySelector('.arrow');
const modal = document.querySelector('.modal');
const modalWrapper = document.querySelector('.modal-wrapper');
const closeBtn = document.querySelector('.close');


function open() {
  modalWrapper.classList.add('visible');
  let scrollBarWidth = window.innerWidth - document.body.offsetWidth;
  document.body.style.margin = '0px ' + scrollBarWidth + 'px 0px 0px';
  document.body.style.overflow = 'hidden';
}

function close() {
  modalWrapper.classList.remove('visible');
  document.body.style.margin = '';
  document.body.style.overflow = '';
}

for (const btn of btns) {
  btn.addEventListener('click', e => {
    open();  
    e.preventDefault();  
})};

closeBtn.addEventListener('click', e => {
  close();
  e.preventDefault();  
});

document.body.addEventListener('click', e => {
  if(e.target.classList.contains("modal-wrapper")) {
    close();
  } 
});