const form = document.getElementById('form');
const formAlert = document.querySelector('.formAlert')


form[6].addEventListener('change', ()=>{
  if (form[6].checked) {
      form[7].disabled = false;
      form[7].style.backgroundColor = 'rgb(60, 60, 60)';
  }else{
    form[7].disabled = true;
      form[7].style.backgroundColor = 'hsl(169, 82%, 27%)';
  }
});






form.addEventListener('submit', (e)=>{
    e.preventDefault()
    
    const firstName = document.getElementById('fName').value.trim()
    const lastName = document.getElementById('lName').value.trim()
    const email = document.getElementById('email').value.trim()
    const querryType = document.querySelector('input[name="same"]:checked') // note how to select radio input
    const message = document.getElementById('msg').value.trim()

    const formAlert = document.getElementsByClassName('formAlert')
    const formAlertC = document.getElementById('formError')
    const successMsg = document.getElementById('successMsg');
    let isValid = true;
    

    // first name validation
    if(firstName === ''){
        isValid = false;
    
        document.querySelector('#fName + .formAlert').style.display = 'block';
        document.querySelector('#fName').style.border = '1px solid brown';
        // return false
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

    // consent validation

    if(form[6].checked){
        isValid = false;
        
        formAlertC.classList.add('formError')
    } else {
        formAlertC.classList.remove('formError')
    }
   
    // Form is Valid
    if(isValid = true){
         successMsg.style.display = 'block'
        successMsg.classList.add("success_msg")
        form.rest();
    } else {
        successMsg.style.display = 'none'
    }

    

});