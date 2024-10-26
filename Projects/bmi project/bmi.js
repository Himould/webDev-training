
const btn = document.querySelector('.btn');
btn.addEventListener('click', function(){
    let height = document.querySelector('.height').value;
    let weight = document.querySelector('.weight').value;
    let result = document.querySelector('#bmiOutput');
    let status = document.querySelector('.health');
    let maleCheck = document.querySelector('.Mmale').checked;
    let femaleCheck = document.querySelector('.fmale').checked;
    let age = document.querySelector('#ageInput').value;
    let modeAlert = document.querySelector('.modal');

    // age validation
    if(!age){
        modeAlert.style.display = 'block';
        modeAlert.innerHTML = 'kindly input your age <br> click to cancel';
        return;
    }

    // gender validation
    if(maleCheck === false && femaleCheck === false){
        modeAlert.style.display = 'block';
        modeAlert.innerHTML = 'Select a gender <br> click to cancel';
        return;
    } 
    // weight and height validation
    if(height === '' || weight === ''){
        modeAlert.style.display = 'block';
        modeAlert.innerHTML = 'please fill-in the required field <br> click to cancel';
        return;
    }
        height = height / 100
        let BMI = (weight / (height * height)).toFixed(2);
      result.innerHTML = BMI
        // range and category 
        if(BMI < 18.5){
            status.innerText = 'Underweight'
            status.style.color = 'red';
        } else if (BMI >= 18.5 && BMI <= 24.9){
            status.innerText = 'Healthy'
            status.style.color = 'green';
        } else if (BMI >= 25 && BMI <= 29.9){
            status.innerText = 'Overweight'
            status.style.color = 'red';
        } else {status.innerText = 'Obese'
            status.style.color = 'red';
        }
})

let modeAlert = document.querySelector('.modal');
modeAlert.addEventListener('click', ()=>{location.reload();})
// modeAlert.addEventListener('click', function(){
//     modeAlert.style.display = "none";
// })

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modeAlert) {
//       modeAlert.style.display = "none";
//     }
//   }