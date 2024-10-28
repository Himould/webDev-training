     const day = document.getElementById("day");
    const month = document.getElementById("month");
    const year = document.getElementById("year");
    const labels = document.getElementsByTagName("label");
    const error = document.getElementsByClassName("error");
    const submitButton = document.getElementById("submit");
    const spans = document.getElementsByTagName("span");
    const input = document.querySelectorAll(".inputed");
    const mainClose = document.querySelector(".main-content");
    const refresh = document.querySelector(".refresh");
    console.log(day);

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
        for (let err of error){err.innerHTML = typeOfError[1]; 
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
                for (let err of error){err.innerHTML = typeOfError[1];
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

//     function checkValidity(){
        
//         // check validity, also check if any of the functions is not valid, display should be none
//         let yearAge = (currentYear - year.value);
//     let monthAge = (currentMonth - month.value);
//     let dayAge = (currentDay - day.value);
//     if(monthAge < 0 || (monthAge === 0 && dayAge < 0 )){
//         yearAge--
//         if(monthAge === 0){
//             monthAge = 11
//         } else {monthAge = monthAge + 12 }
//                 dayAge = dayAge + 30;
//              } //else if (dayAge == (-dayAge)){
//                   //  return dayAge;
//            //  }
    
//     spans[0].innerHTML = yearAge;
//     spans[1].innerHTML = monthAge;
//     spans[2].innerHTML = dayAge;
// }

    function checkValidity(){
    let yearAge = Math.abs(currentYear - year.value);

    let monthAge = 0;
    if(currentMonth >= month.value){
        monthAge = currentMonth - month.value;
    } else {
        newYear--;
        monthAge = 12 + currentMonth - month.value;}

    let dayAge = 0;
    if(currentDay >= day.value){
        dayAge = currentDay - day.value;
    } else if(currentDay < day.value){
        monthAge--
        dayAge = currentDay + Math.abs(31 - day.value); // look into this condition
    } else{
        monthAge--;
        if(leapChecker(year)){
            dayAge = 30 + currentDay - day.value;
        }
        else{
            dayAge = currentDay - day.value;
        }

        if(monthAge < 0){
            monthAge = 11;
            yearAge--;
        }
        if(monthAge < currentMonth){
            dayAge++;
        }
    }

    spans[0].innerHTML = yearAge;
    spans[1].innerHTML = monthAge;
    spans[2].innerHTML = dayAge;
}

function leapChecker(year){
    if(year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)){
        true;
    }
    else{
        false;
    }
}

submitButton.addEventListener('click', function calAge() {
  
   
    CheckDayInput();
    checkMonthInput();
    checkYearInput();
    checkValidity();
    
    if(!checkYearInput() || !CheckDayInput() || !checkMonthInput()){
        for(let spaned of spans){spaned.innerHTML = "--";}
        for(let inp of input){inp.style.borderColor = "red";}
    }  
})
refresh.addEventListener('click', ()=>{location.reload();})

