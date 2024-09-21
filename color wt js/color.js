const button =  document.querySelector('button');
button.addEventListener('click', function(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const randColor = `rgb(${r}, ${g}, ${b})`;
    document.body.style.backgroundColor = randColor;
    document.querySelector('h1').innerText = randColor;
    let sumOfColor = (r + g + b);
    if (sumOfColor < 200){
         document.querySelector('h1').style.color = 'white';
    } else {
        document.querySelector('h1').style.color = 'black';
    }
})