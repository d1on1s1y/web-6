const regModal = document.getElementById('regModal');
const openReg = document.getElementById('openReg');
const closeReg = document.getElementById('closeReg');

const signInModal = document.getElementById('signInModal')
const openSignIn = document.getElementById('openSignIn')
const closeSignIn = document.getElementById('closeSignIn')


const addEvtListeners = (modal, openBtn, closeBtn) => {
openBtn.addEventListener('click', ()=> {
    modal.classList.add('open');
  });
  closeBtn.addEventListener('click', ()=> {
    modal.classList.remove('open');
  });
  modal.addEventListener('click', (evt)=> {
    if (evt.target === modal) {
      modal.classList.remove('open');
    }
  });
  document.addEventListener('keydown', (evt)=> {
    if (evt.key === 'Escape') {
      modal.classList.remove('open');
    }
  });
}

addEvtListeners(regModal, openReg, closeReg)
addEvtListeners(signInModal, openSignIn, closeSignIn)




console.log('hello world');

