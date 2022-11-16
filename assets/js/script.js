var btn = document.querySelector(".initial-content");
var counterContent = document.querySelector(".counter-content");
var counter = document.querySelectorAll(".counter");

counter[0].classList.add("active");

btn.addEventListener('click',myFunction);

function myFunction(){
    btn.classList.add('hide');
    counterContent.classList.add('show');

    var num = 1;
    var interval = setInterval(function () {
        if (num > 3) {
            clearInterval(interval);
            btn.classList.remove('hide');
            counterContent.classList.remove('show');
        } else {
            for(var i=0; i<counter.length; i++) {
                counter[i].classList.remove("active");
            }
        
            counter[num].classList.add("active");
        }

        num++;
    }, 1000);
};

    
//     let num = 2;

//     counter.innerText = 3;

//     var interval = setInterval(function(){
//         if(num < 0) {
//             console.log('abc');
//             clearInterval(interval);
//             btn.classList.remove('hide');
//             counterContent.classList.remove('show');
//         }
//         else{
//             console.log('here');
//         counter.classList.add('counter');
//         counter.innerText = num;
//         num--; 
//         }
//     }, 1000)
