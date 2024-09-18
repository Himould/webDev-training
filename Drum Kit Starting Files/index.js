let numberOfDrum = document.querySelectorAll('.drum').length
for (let i = 0; i < numberOfDrum; i++){
    document.querySelectorAll('.drum')[i].addEventListener("click", handleClick);

    function handleClick(){
        alert('i got clicked');
    }};

//  document.querySelector('.drum').onclick = () => {
//     alert('i got clicked');
//  }