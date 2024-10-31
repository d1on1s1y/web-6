// import IMask from '.mask';

const regModal = document.getElementById('regModal');
const openReg = document.getElementById('openReg');
const closeReg = document.getElementById('closeReg');
const regForm = regModal.lastElementChild


const signInModal = document.getElementById('signInModal')
const openSignIn = document.getElementById('openSignIn')
const closeSignIn = document.getElementById('closeSignIn')
const signInForm = signInModal.lastElementChild






console.log();

const maskInput = regForm.querySelector('#phone');
const maskOptions = {
  mask: '+{38}(000)000-00-00'
};
const mask = IMask(maskInput, maskOptions);


const hideForm = (modal, form) => {
  modal.classList.remove('open');
  form.reset()
}

const addEvtListeners = (modal, openBtn, closeBtn, form) => {
openBtn.addEventListener('click', ()=> {
    modal.classList.add('open');
  });
  closeBtn.addEventListener('click', ()=> {
    hideForm(modal,form)
  });
  modal.addEventListener('click', (evt)=> {
    if (evt.target === modal) {
      hideForm(modal,form)
    }
  });
  document.addEventListener('keydown', (evt)=> {
    if (evt.key === 'Escape') {
      hideForm(modal,form)
    }
  });
}

addEvtListeners(regModal, openReg, closeReg, regForm)
addEvtListeners(signInModal, openSignIn, closeSignIn,signInForm)


//приметка для меня: сделаны в лабе пункты 1,2