

const btns = document.querySelectorAll('.js-modal-btn');
const arrow = document.querySelector('.arrow');
const modal = document.querySelector('.modal');
const modalWrapper = document.querySelector('.modal-wrapper');
const closeBtn = document.querySelector('.close');


function open() {
  modalWrapper.classList.add('visible');

  // This prevents the small body jump
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

    // Just a simple test to get element's ID
    // The modal will need to be populated from backend
    // Basically you can get an ID of clicked element by e.target.id, then call the API with said ID and populate the Modal
    // In this example I change the gray subtitle to the ID
    document.querySelector('.info-wrapper .subtitle').innerHTML = e.target.id;

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

