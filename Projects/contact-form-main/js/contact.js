// const formElem = document.getElementById('form')
// const formAlert = document.querySelector('.formAlert')

// console.log(formElem);
// console.log(formElem[6])


// formElem[6].addEventListener('change', function(){
//   if (formElem[6].checked) {
//       formElem[7].disabled = false;
//       formElem[7].style.backgroundColor = 'rgb(60, 60, 60)';
//   }else{
//     formElem[7].disabled = true;
//       formElem[7].style.backgroundColor = 'hsl(169, 82%, 27%)';
//   }
// });


const form = document.getElementById('form');
const successMsg = document.getElementById('successMsg');

form.addEventListener('submit', (e)=>{
    e.preventDefault()

    const firstName = document.getElementById('fName').value.trim()
    const lastName = document.getElementById('lName').value.trim()
    const email = document.getElementById('email').value.trim()
    const querryType = document.querySelectorAll('.sameQuerry')
    const consent = document.getElementById('consent').checked

    const formAlert = document.getElementsByClassName('formAlert')

    let isValid = true;
    

    // first name validation
    if(firstName === ''){
        isValid = false;
            alert('what wrong');
        document.querySelector('#fName + .formAlert').style.display = 'block';
        document.querySelector('#fName').style.border = '1px solid red';
    } else {
        document.querySelector('#fName + .formAlert').style.display = 'none';
        document.querySelector('#fName').style.border = '1px solid grey';
    }
});







// formElem.addEventListener('submit', contactus);

// function contactus(event) {
//     e.preventDefault()
//     const fName = event.currentTarget.fName.value.tirm();
//     const lName = event.currentTarget.lName.value.tirm();
//     const email = event.currentTarget.email.value.tirm();
//     const msg = event.currentTarget.msg.value.tirm();

//     if(fName === ""){
//      return(formAlert.classList.add('click'))
//     }

//     const info = {
//         fName,
//         lName,
//         email,
//         msg,
//         agree: formElem[6].Value,
//     };}












//     const formAlert = document.querySelectorAll('.formAlert')

//     let isValid = true


//     // first name validation
//     if(fName === '') {
//       isValid = false

//       document.querySelector('.fName + .formAlert').style.display = 'block'
//       document.querySelector('.fName').style.border = '1px solid red'
//     }else {
//       document.querySelector('.fName + .formAlert').style.display = 'none'
//       document.querySelector('.fName').style.border = '1px solid grey'
//     }


//      // last name validation
//      if(lName === '') {
//       isValid = false

//       document.querySelector('.lName + .formAlert').style.display = 'block'
//       document.querySelector('.lName').style.border = '1px solid red'
//     }else {
//       document.querySelector('.lName + .formAlert').style.display = 'none'
//       document.querySelector('.lName').style.border = '1px solid grey'
//     }

// }




// const form = document.querySelector('form')
// const successMsg = document.querySelector('.success_msg')

// console.dir(form);

// form.addEventListener('onsubmit', (e) => {
//   e.preventDefault()

//   const fName = fName.value.trim()
//   const lName = lName.value.trim()
//   const email = email.value.trim()
//   const msg = msg.value.trim()


//   const formAlert = document.querySelectorAll('.formAlert')

//   let isValid = true

//   //first name validation
//   if(fName==='') {
//     isValid = false

//     document.getElementsByClassName('.fName + .formAlert').style.display = 'block'
//     document.getElementsByClassName('.fName').style.border = '1px solid red'
//   }else {
//     document.getElementsByClassName('.fName + .formAlert').style.display = 'none'
//     document.getElementsByClassName('.fName').style.border = '1px solid grey'}

//   // last name validation
//      if(lName === '') {
//      isValid = false

//     document.getElementsByClassName('.lName + .formAlert').style.display = 'block'
//       document.getElementsByClassName('.lName').style.border = '1px solid red'
//     }else {
//       document.getElementsByClassName('.lName + .formAlert').style.display = 'none'
//       document.getElementsByClassName('.lName').style.border = '1px solid grey'}

//     //Email validation
//   if(email ==='') {
//     isValid = false

//     document.getElementsByClassName('.email + .formAlert').style.display = 'block'
//     document.getElementsByClassName('.email').style.border = '1px solid red'
//   }else {
//     document.getElementsByClassName('.email + .formAlert').style.display = 'none'
//     document.getElementsByClassName('.email').style.border = '1px solid grey'}

//     // consent validation
//     if(!con) {
//       isValid = false

//       formAlert[6].classList.add('form-error')
//     }else {
//       formAlert[6].classList.remove('form-error')
//     }

// // form is valid
// if(isValid) {
//   successMsg.classList.add('active')
//   form.reset()
// }
// })




// function validate() {
//   const fName = document.getElementById('fName')
//   const lName = document.getElementById('lName')

//   if(fName.value == '' ||lName.value ==''){
//     alert('No Blank Values allowed')
//   }
// }