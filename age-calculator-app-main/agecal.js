
// var currentDate = new Date()
// var day = currentDate.getDate()
// var month = currentDate.getMonth() + 1
// var year = currentDate.getFullYear()

//  console.log(`${day}/${month}/${year} `)

/*

window.onload = function(){
    const day = document.getElementById("day");
    const month = document.getElementById("month");
    const year = document.getElementById("year");
    const labels = document.getElementsByTagName("label");
    const error = document.getElementsByClassName("error");
    const submitButton = document.getElementById("submit");
    const spans = document.getElementsByTagName("span");

    const date = new Date();

    let currentDay = date.getDate();
    let currentMonth = date.getMonth() + 1;
    let currentYear = date.getFullYear();

    const typeOfError = [
        "",
        "This field is required",
        "Must be a valid day",
        "Must be a valid month",
        "Must be a valid year",
        "Must be a valid date"
    ];

    const errorState = (numberOfError, typeOfDate, typeOfError, color) => {
        error[numberOfError].innerHTML = typeOfError;
        labels[numberOfError].style.color = color;
        typeOfDate.style.borderColor = color;
    }

    const isLeapYear = (day, month, year) => {
        month = month - 1;
        fullDate = new Date(year,month,day);
        if (day == fullDate.getDate() && month === fullDate.getMonth() && year == fullDate.getFullYear())
          return true;
        else
          return false
    }

    const substractAge = () => {
        let newYear = Math.abs(currentYear - year.value);

        let newMonth = 0;
        if(currentMonth >= month.value){
            newMonth = currentMonth - month.value;
        }
        else{
            newYear--;
            newMonth = 12 + currentMonth - month.value;
        }

        let newDay = 0;
        if(currentDay >= day.value){
            newDay = currentDay - day.value;
        }
        else{
            newMonth--;
            if(isLeapYear(day.value, month.value, year.value)){
                newDay = 30 + currentDay - day.value;
            }
            else{
                newDay = currentDay - day.value;
            }

            if(newMonth < 0){
                newMonth = 11;
                newYear--;
            }
            if(newMonth < currentMonth){
                newDay++;
            }
        }

        spans[0].innerHTML = newYear;
        spans[1].innerHTML = newMonth;
        spans[2].innerHTML = newDay;
    }

    const isDayCorrect = () => {
        if(day.value == ""){
            errorState(0, day, typeOfError[1], "#ff5757");
            return false;
        }
        else if(day.value <= 0 || day.value > 31){
            errorState(0, day, typeOfError[2], "#ff5757");
            return false;
        }
        else if(isLeapYear(day.value, month.value, year.value) == false){
            errorState(0, day, typeOfError[5] , "#ff5757");
            return false;
        }
        else{
            errorState(0, day, typeOfError[0], "");
            return true;
        }
    }

    const isMonthCorrect = () => {
        if(month.value == ""){
            errorState(1, month, typeOfError[1], "#ff5757");
            return false;
        }
        else if(month.value <= 0 || month.value > 12){
            errorState(1, month, typeOfError[3], "#ff5757");
            return false;
        }
        else if(isLeapYear(day.value, month.value, year.value) == false){
            errorState(1, month, typeOfError[0], "#ff5757");
            return false;
        }  
        else{
            errorState(1, month, typeOfError[0], "");
            return true;
        }
    }

    const isYearCorrect = () => {
        if(year.value == ""){
            errorState(2, year, typeOfError[1], "#ff5757");
            return false;
        }
        else if(year.value > currentYear){
            errorState(2, year, typeOfError[4], "#ff5757");
            return false;
        }
        else if(year.value == currentYear && month.value > currentMonth){
            errorState(1, month, typeOfError[3], "#ff5757");
            return false;
        }
        else if(year.value == currentYear && month.value == currentMonth && day.value > currentDay){
            errorState(0, day, typeOfError[2], "#ff5757");
            return false;
        }
        else if(isLeapYear(day.value, month.value, year.value) == false){
            errorState(2, year, typeOfError[0], "#ff5757");
            return false;
        }   
        else{
            errorState(2, year, typeOfError[0], "");
            return true;
        }
    }

    submitButton.addEventListener("click", () => {
        isDayCorrect();
        isMonthCorrect();
        isYearCorrect();
        if(isDayCorrect() && isMonthCorrect() && isYearCorrect()){
            substractAge();
        }
    })
}  

*/


/*
// working on an alternative solution - the leap year function from previous exercise
function isLeap(year) {
    

        
        //Write your code here.    
        if (year % 4 === 0) {
            if (year % 100 === 0) {
                if (year % 400 === 0) {
                    return 'Leap year.';
                }else {
                    return 'Not a leap year.';
                }
            } else {
                return 'Leap year.';
                }
            }else {
                return 'Not a leap year.';}
        
        }
        console.log(isLeap(1998));  

//  code to work with

const DayError = document.querySelector('.day-error');
const MonthError = document.querySelector('.month-error');
const YearError = document.querySelector('.year-error');
const YearResult = document.querySelector('.year-result');
const MonthResult = document.querySelector('.month-result');
const DayResult = document.querySelector('.day-result');
const SubmitBtn = document.querySelector('.btn');
const InputDay = document.getElementById('day');
const InputMonth = document.getElementById('month');
const InputYear = document.getElementById('year');
const InputRequiredError = 'This field is required';
const InputDayError = 'Must be a valid day';
const InputMonthError = 'Must be a valid month';
const InputYearError = 'Must be in the past';
const Canvas = document.querySelector('.can');



function CheckDayInput()
{
    let value = InputDay.value;
    if(value == '')
    {
        DayError.innerHTML = InputRequiredError;
        return false;
    }
    else if(value < 1 || value > 31)
    {
        DayError.innerHTML = InputDayError;
        return false;
    }
    else
    {
        DayError.innerHTML = '';
        return true;
    }
}

function CheckMonthInput()
{
    let value = InputMonth.value;
    if(value == '')
    {
       MonthError.innerHTML = InputRequiredError;
        return false;
    }
    else if(value < 1 || value > 12)
    {
        MonthError.innerHTML = InputMonthError;
        return false;
    }
    else
    {
        MonthError.innerHTML = '';
        return true;
    }
}



function CheckYearInput() {
    let value = InputYear.value;
    let currentYear = new Date().getFullYear();
    console.log(currentYear);
    if (value == '') {
        YearError.innerHTML = InputRequiredError;
        return false;
    }
    else if (value > currentYear) {
        YearError.innerHTML = InputYearError;
        return false;
    }
    else {
        YearError.innerHTML = '';
        return true;
    }
}


function calculateAge(birthday){
	 var birthdate = new Date(birthday);
     var today = new Date();

     var years = today.getFullYear() - birthdate.getFullYear();
  var months = today.getMonth() - birthdate.getMonth();
  var days = today.getDate() - birthdate.getDate();
 // If the birthdate month and day are after the current month and day,
  // subtract one year from the age


  if (months < 0 || (months === 0 && days < 0)) {
    years--;
    if (months === 0) {
      months = 11;
    } else {
      months = 12 + months;
    }
    days = 30 + days;
  }

    YearResult.innerHTML = years;
    MonthResult.innerHTML = months;
    DayResult.innerHTML = days;
}



SubmitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    let day = CheckDayInput();
    let month = CheckMonthInput();
    let year = CheckYearInput();
    if(!day || !month || !year) return
    let birthday = ${InputMonth.value}/${InputDay.value}/${InputYear.value};
    calculateAge(birthday);
    Canvas.style.display = 'block';
    setTimeout(function () {
        Canvas.style.display = 'none';
    }, 8000);

})


    
*/  

// const userDayInput = document.querySelector('#day');
// const userMonthInput = document.querySelector('#month');
// const userYearInput = document.querySelector('#year');
// const error = document.getElementsByClassName("error");
// const submitButton = document.getElementById("submit");
// const spans = document.getElementsByTagName("span");

// let dayValue = userDayInput.value;
// let monthValue = userMonthInput.value;
// let yearValue = userYearInput.value;

// // getiing current date

// const date = new Date();

// let currentDay = date.getDate();
// let currentMonth = date.getMonth() + 1;
// let currentYear = date.getFullYear();

// // type of error of each input
// const typeOfError = [
//     "",
//     "This field is required",
//     "Must be a valid day",
//     "Must be a valid month",
//     "Must be a valid year",
//     "Must be a valid date"
// ];

// // Input validation
// function checkDayInput()
// {
//     if(dayValue == '')
//     {
//         error.innerHTML = typeOfError[1];
//         return false;
//     }
//     else if(dayValue < 1 || dayValue > 31)
//     {
//         error.innerHTML = typeOfError[2];
//         return false;
//     }
//     else
//     {
//         error.innerHTML = typeOfError[0];
//         return true;
//     }
// }

// function checkMonthInput()
// {
//     if(monthValue == '')
//     {
//         error.innerHTML = typeOfError[1];
//         return false;
//     }
//     else if(monthValue < 1 || monthValue > 12)
//     {
//         error.innerHTML = typeOfError[3];
//         return false;
//     }
//     else
//     {
//         error.innerHTML = typeOfError[0];
//         return true;
//     }
// }

// function checkYearInput() {
//     // let currentYear;
//     if (yearValue == '') {
//         error.innerHTML = typeOfError[1];
//         return false;
//     }
//     else if (yearValue > currentYear) {
//         error.innerHTML = typeOfError[4];
//         return false;
//     }
//     else {
//         error.innerHTML = typeOfError[0];
//         return true;
//     }
// }

// // calculate required dates
// // const date = new Date();
// // let currentDay = date.getDate();
// // let currentMonth = date.getMonth() + 1;
// // let currentYear = date.getFullYear();
// function calculateDate(birthday){
//     let years = currentYear - yearValue;
//     let months = currentMonth - monthValue;
//     let days = currentDay - dayValue;
// // If the birthdate month and day are after the current month and day,
//  // subtract one year from the age


//  if (months < 0 || (months === 0 && days < 0)) {
//    years--;
//    if (months === 0) {
//      months = 11;
//    } else {
//      months = 12 + months;
//    }
//    days = 30 + days;
//  }

//  spans[0].innerHTML = years;
//  spans[1].innerHTML = months;
//  spans[2].innerHTML = days;
// }

// submission 

// submitButton.addEventListener('click', function (e) {
//     e.preventDefault();
//     let day = checkDayInput();
//     let month = checkMonthInput();
//     let year = checkYearInput();
//     if(!day || !month || !year) return
//     let birthday = `${monthValue}/${dayValue}/${yearValue}`;
//     calculateDate(birthday);
// })

    const day = document.getElementById("day");
    const month = document.getElementById("month");
    const year = document.getElementById("year");
    const labels = document.querySelector(".label");
    const error = document.getElementById("error1");
    const submitButton = document.getElementById("submit");
    const spans = document.getElementsByTagName("span");

    const date = new Date();

    let currentDay = date.getDate();
    let currentMonth = date.getMonth() + 1;
    let currentYear = date.getFullYear();

    const typeOfError = [
        "",
        "This field is required",
        "Must be a valid day",
        "Must be a valid month",
        "Must be a valid year",
        "Must be a valid date"
    ];

// Check Day input
function CheckDayInput()
{
    alert('I ran when clicked')
    let dayValue = day.value;
    if(dayValue == ''){
        error.innerHTML = typeOfError[1];
        error.style.color = 'red';
        labels.style.color = 'red';
        return false;
    } else if(dayValue < 1 || dayValue > 31)
    {
        error.innerHTML = typeOfError[2];
        error.style.color = 'red';
        labels.style.color = 'red';
        alert('what is wrong')
        return false;
    } else{
        return true;
    }
}

submitButton.addEventListener('click', function calAge(e) {
  
    CheckDayInput();

    // check validity
    let yearAge = currentYear - year.value;
    let monthAge = currentMonth - month.value;
    let dayAge = currentDay - day.value;
    if(monthAge < 0 || (monthAge == 0 && dayAge < 0 )){
        yearAge--
        if(monthAge === 0){
            monthAge === 11
        } else {monthAge = monthAge + 12 }
        dayAge = dayAge + 30;

        // Display Result
        spans[0].innerHTML = yearAge;
        spans[1].innerHTML = monthAge;
        spans[2].innerHTML = dayAge;
        alert(`you are ${yearAge} old`)
    }
})