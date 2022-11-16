var btn = document.querySelector(".initial-content");
var counterContent = document.querySelector(".counter-content");
var counter = document.querySelectorAll(".counter");

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
