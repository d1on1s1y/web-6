
import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'


let usersData = [
  {
  birthDate: "275760-03-31",
  email:  "dioniss8486@gmail.com",
  firstName: "333333333",
  gender:"male",
  group:"employee",
  id:"1111",
  lastName:"3333333333",
  middleName:"3333333",
  password:"111111111111",
  phone:"+38(222)222-22-22"},
  {
    birthDate: "275760-03-31",
    email:  "dioniss8486@gmail.com",
    firstName: "222222222",
    gender:"male",
    group:"employee",
    id:"2222",
    lastName:"22222222",
    middleName:"22222222",
    password:"111111111111",
    phone:"+38(222)222-22-22"},
    {
      birthDate: "275760-03-31",
      email:  "dioniss8486@gmail.com",
      firstName: "5555555555",
      gender:"male",
      group:"employee",
      id:"55555555",
      lastName:"5555555555",
      middleName:"5555555555",
      password:"55555555",
      phone:"+38(222)222-22-22"}]



const regModal = document.getElementById('regModal');
const openReg = document.getElementById('openReg');
const closeReg = document.getElementById('closeReg');
const regForm = regModal.lastElementChild


const signInModal = document.getElementById('signInModal')
const openSignIn = document.getElementById('openSignIn')
const closeSignIn = document.getElementById('closeSignIn')
const signInForm = signInModal.lastElementChild



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


const errorMessage = document.querySelector('.error-message')
const emailInput = document.getElementById('email')
const submitBtn = document.getElementById('submit-btn')
const pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/


emailInput.addEventListener('change',()=>{
  
  if(pattern.test(emailInput.value)){
    return
  }
  errorMessage.classList.add('incorrect-input')
  submitBtn.setAttribute('disabled','')
})

emailInput.addEventListener('input', ()=>{
  if(!pattern.test(emailInput.value)){
    return
  }
  errorMessage.classList.remove('incorrect-input')
  submitBtn.removeAttribute('disabled','')
})

//приметка для меня: сделаны в лабе пункты 1,2,3


const getData = (form) => {
const formData = new FormData(form)
const data = Object.fromEntries(formData.entries());
data.id = nanoid()
return data;
}

regForm.addEventListener('submit',(evt)=>{
evt.preventDefault()
usersData.push(getData(regForm))
regForm.reset()
renderTable(usersData)

console.log(usersData);
})


const renderTable = (data) =>{
  document.querySelector('tbody').innerHTML = createTableMarkup(data)
  document.querySelectorAll('.del-btn').forEach(btn => btn.addEventListener('click', deleteRow))
  document.querySelectorAll('.copy-btn').forEach(btn => btn.addEventListener('click', copyRow))
}

const createTableMarkup = (data) => {
let markup = ''
data.forEach(el => {
  const dataRow = `<tr id = '${el.id}'>
                <td>${el.email}</td>
                <td>${el.password}</td>
                <td>${el.phone}</td>
                <td>${el.lastName}</td>
                <td>${el.firstName}</td>
                <td>${el.middleName}</td>
                <td>${el.birthDate}</td>
                <td>${el.gender}</td>
                <td>${el.group}</td>
                <td><button id = '${el.id}' class = 'del-btn'>Delete</button><button id = '${el.id}' class = 'copy-btn'>Copy</button></td>
              </tr>`
  markup+=dataRow
});
return markup
}

const deleteRow = (event)=>{
usersData = usersData.filter(el => el.id !== event.target.id)
renderTable(usersData)
}

const copyRow = (event)=>{
const newRow = Object.assign({},usersData.find(el => el.id === event.target.id))
newRow.id = nanoid()
usersData.push(newRow)
renderTable(usersData)
}

// renderTable(usersData)