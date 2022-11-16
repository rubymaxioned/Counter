var btn = document.querySelector(".initial-content");
var counterContent = document.querySelector(".counter-content");
var counter = document.querySelector(".counter");

console.log(counter);

btn.addEventListener('click',myFunction);

function myFunction(){
    btn.classList.add('hide');
    counterContent.classList.add('show');

    let num = 2;

    counter.innerText = 3;

    var interval = setInterval(function(){
        if(num < 0) {
            clearInterval(interval);
            btn.classList.remove('hide');
            counterContent.classList.remove('show');
        }
        
        counter.innerText = num;
        num--; 
    }, 1000)

    // for(var i=0; i<3; i++){
    //     var result = 3 - i;
    //     console.log(result);
    // }
}