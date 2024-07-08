const circle = document.querySelectorAll(".circle");

const line = document.querySelectorAll('.line');

const next = document.querySelector('#next');

const prev = document.querySelector('#prev');

let currentActive = 1;
let lineActive = 0;
next.addEventListener('click', () => {
    currentActive++
    lineActive++
    if (currentActive > circle.length){
        currentActive = circle.length
    }
    if(lineActive > line.length){
        lineActive = line.length
    }
    update()
})

prev.addEventListener('click', () => {
    currentActive--
    lineActive--
    
    update()
})


function update() {
    circle.forEach((circle,index) => {
        if(index < currentActive){
            circle.classList.add('active')
        }
        else {
            circle.classList.remove('active')
        }
    });
    line.forEach((line,index) => {
        if(index < lineActive){
            line.classList.add('line_active')
        }
        else {
            line.classList.remove('line_active')
        }
    })

    if(currentActive === 1){
        prev.disabled = true;
    }
    
    else if(currentActive === circle.length){
        next.disabled = true;
    }
    else {
        prev.disabled=false;
        next.disabled=false;
    }
}


