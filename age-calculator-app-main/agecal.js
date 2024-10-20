
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



    const day = document.getElementById("day");
    const month = document.getElementById("month");
    const year = document.getElementById("year");
    const labels = document.getElementsByTagName("label");
    const error = document.getElementsByClassName("error");
    const submitButton = document.getElementById("submit");
    const spans = document.getElementsByTagName("span");
    const input = document.getElementsByTagName("input")

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

    let yearAge = currentYear - year.value;
    let monthAge = currentMonth - month.value;
    let dayAge = currentDay - day.value;

// Check Day input
function CheckDayInput(){
    let dayValue = day.value;

    if(dayValue == ''){
        for (let err of error){err.innerHTML = typeOfError[1]; //This process is to iterate over all the error tag
            err.style.color = 'red'}
        for (let label of labels){label.style.color = 'red'}

        return false;
    } else if (dayValue < 1 || dayValue > 31) {

        
        error[0].innerHTML = typeOfError[2];
        error[0].style.color = 'red';
        labels[0].style.color = 'red';
        alert('what is wrong')
        return false;
    } else{
        error[0].innerHTML = typeOfError[0];
        return true;
    }
}

// Check Month Input
function checkMonthInput(){
    let monthValue = month.value;
    if(monthValue == ''){
        for (let err of error){err.innerHTML = typeOfError[1]; //This process is to iterate over all the error tag
            err.style.color = 'red'}
        for (let label of labels){label.style.color = 'red'}

        return false;
    }  else if (monthValue < 1 || monthValue > 12){
        error[1].innerHTML = typeOfError[3];
        error[1].style.color = 'red';
        labels[1].style.color = 'red';
        return false;
    } else {
            error[1].innerHTML = typeOfError[0];
            return true;}}

    // Year Input check

    function checkYearInput() {
            let yearValue = year.value;
            if (yearValue == '') {
                for (let err of error){err.innerHTML = typeOfError[1]; //This process is to iterate over all the error tag
                    err.style.color = 'red'}
                for (let label of labels){label.style.color = 'red'}
                return false;
              } else if (yearValue > currentYear) {
                error[2].innerHTML = typeOfError[4];
                error[2].style.color = 'red';
                labels[2].style.color = 'red';
                return false;
            } else {
                error[2].innerHTML = typeOfError[0];
                return true;
            }}

    // Check Validity

    function checkValidity(){
        
        // check validity, also check if any of the functions is not valid, display should be none
        let yearAge = parseInt(currentYear - year.value);
    let monthAge = parseInt(currentMonth - month.value);
    let dayAge = parseInt(currentDay - day.value);
    if(monthAge < 0 || (monthAge === 0 && dayAge < 0 )){
        yearAge--
        if(monthAge === 0){
            monthAge = 11
        } else {monthAge = monthAge + 12 }
                dayAge = dayAge + 30;
             } //else if (dayAge == (-dayAge)){
                  //  return dayAge;
           //  }
    
    spans[0].innerHTML = yearAge;
    spans[1].innerHTML = monthAge;
    spans[2].innerHTML = dayAge;
    alert(`you are ${yearAge} old`)
}


submitButton.addEventListener('click', function calAge() {
  
    checkValidity();
    CheckDayInput();
    checkMonthInput();
    checkYearInput();
    
    if(!checkYearInput() || !CheckDayInput() || !checkMonthInput()){
        for(let spaned of spans){spaned.innerHTML = "--";}}  
        input.style.borderColor = "red";
})


/*
function isLeap(year) {
        
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
*/