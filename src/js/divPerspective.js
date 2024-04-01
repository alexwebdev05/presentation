// Left
document.addEventListener('DOMContentLoaded', function () {
    let curX = 0
    let curY = 0
    let winWidth = window.innerWidth;
    let winHeight = window.innerHeight;
    let posX = 0
    let posY = 0

    function move() {
        let divRight = document.getElementById('divLeft-content')
        posX = curX / (winWidth/100)
        posY = curY / (winHeight/100)
        divRight.style.transform = `rotateX(${-posY/6+10}deg) rotateY(${posX/6-10}deg)`;
        requestAnimationFrame(function () {
            move();
        });
    }
    window.addEventListener('mousemove', function (event) {
        curX = event.clientX;
        curY = event.clientY;
    });
    move();
});

// Right
document.addEventListener('DOMContentLoaded', function () {
    let curX = 0
    let curY = 0
    let winWidth = window.innerWidth;
    let winHeight = window.innerHeight;
    let posX = 0
    let posY = 0

    function move() {
        let divRight = document.getElementById('divRight-content')
        posX = curX / (winWidth/100)
        posY = curY / (winHeight/100)
        divRight.style.transform = `rotateX(${-posY/6+10}deg) rotateY(${posX/6-10}deg)`;
        requestAnimationFrame(function () {
            move();
        });
    }
    window.addEventListener('mousemove', function (event) {
        curX = event.clientX;
        curY = event.clientY;
    });
    move();
});