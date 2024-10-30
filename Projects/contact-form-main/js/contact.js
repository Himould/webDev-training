const formElem = document.getElementById('form')
const formAlert = document.querySelector('.formAlert')

console.log(formElem);
console.log(formElem[6])


formElem[6].addEventListener('change', function(){
  if (formElem[6].checked) {
      formElem[7].disabled = false;
      formElem[7].style.backgroundColor = 'rgb(60, 60, 60)';
  }else{
    formElem[7].disabled = true;
      formElem[7].style.backgroundColor = 'hsl(169, 82%, 27%)';
  }
});


const form = document.getElementById('form');
const successMsg = document.getElementById('successMsg');
console.log(form);

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    
    const firstName = document.getElementById('fName').value.trim()
    const lastName = document.getElementById('lName').value.trim()
    const email = document.getElementById('email').value.trim()
    const querryType = document.querySelector('input[name="same"]:checked') // note how to select radio input
    const message = document.getElementById('msg').value.trim()
    // const consent = document.getElementById('consent').checked

    const formAlert = document.getElementsByClassName('formAlert')
  
    let isValid = true;
    

    // first name validation
    if(firstName === ''){
        isValid = false;
    
        document.querySelector('#fName + .formAlert').style.display = 'block';
        document.querySelector('#fName').style.border = '1px solid red';
    } else {
        document.querySelector('#fName + .formAlert').style.display = 'none';
        document.querySelector('#fName').style.border = '1px solid grey';
    }
    // last name validation
    if(lastName === ''){
        isValid = false;
            
        document.querySelector('#lName + .formAlert').style.display = 'block';
        document.querySelector('#lName').style.border = '1px solid red';
    } else {
        document.querySelector('#lName + .formAlert').style.display = 'none';
        document.querySelector('#lName').style.border = '1px solid grey';
    }

    // Email validation
    if(!email){
        isValid = false;
            
        document.querySelector('#email + .formAlert').style.display = 'block';
        document.querySelector('#email').style.border = '1px solid red';
    } else {
        document.querySelector('#email + .formAlert').style.display = 'none';
        document.querySelector('#email').style.border = '1px solid grey';
    }

        // Query type validation
    if(!querryType){
        isValid = false

        document.querySelector('.new + .formAlert').style.display = 'block';
    } else {
        document.querySelector('.new + .formAlert').style.display = 'none';
    }

     // Message Validation
     if(message === ''){
        isValid = false;
            
        document.querySelector('#msg + .formAlert').style.display = 'block';
        document.querySelector('#msg').style.border = '1px solid red';
    } else {
        document.querySelector('#msg + .formAlert').style.display = 'none';
        document.querySelector('#msg').style.border = '1px solid grey';
    }

});