
const btn = document.querySelector('.btn');
btn.addEventListener('click', function(){
    let height = document.querySelector('.height').value;
    let weight = document.querySelector('.weight').value;
    let result = document.querySelector('#bmiOutput');
    let status = document.querySelector('.health');
    let maleCheck = document.querySelector('.Mmale').checked;
    let femaleCheck = document.querySelector('.fmale').checked;
    let age = document.querySelector('#ageInput').value;

    // age validation
    if(!age){
        alert('please specify your age');
        return;
    }

    // gender validation
    if(maleCheck === false && femaleCheck === false){
        alert('select a gender');
        return;
    } 
    // weight and height validation
    if(height === '' || weight === ''){
        alert('please fill in the required field');
        return;
    }
        height = height / 100
        let BMI = (weight / (height * height)).toFixed(2);
      result.innerHTML = BMI
        // range and category 
        if(BMI < 18.5){
            status.innerText = 'Underweight'
        } else if (BMI >= 18.5 && BMI <= 24.9){
            status.innerText = 'Healthy'
        } else if (BMI >= 25 && BMI <= 29.9){
            status.innerText = 'Overweight'
        } else {status.innerText = 'Obese'}
})