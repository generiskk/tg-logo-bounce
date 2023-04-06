let speed = 10;
let scale = 0.43;
let canvas;
let ctx;
let logoColor;

let dvd = {
    x: Math.round(Math.random() * (window.innerWidth - 544)),
    y: Math.round(Math.random() * (window.innerHeight - 528)),
    xspeed: 3,
    yspeed: 3,
    img: new Image()
};

(function drawstuff() {
    canvas = document.getElementById("dvdlogo");
    ctx = canvas.getContext("2d");
    window.addEventListener('resize', resizeCanvas, false);
    dvd.img.src = 'tg-wide.png';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    pickColor();
    update();
})();

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function update() {
    setTimeout(() => {
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = logoColor;
        ctx.fillRect(dvd.x, dvd.y, dvd.img.width * scale, dvd.img.height * scale);
        ctx.drawImage(dvd.img, dvd.x, dvd.y, dvd.img.width * scale, dvd.img.height * scale);
        dvd.x += dvd.xspeed;
        dvd.y += dvd.yspeed;
        checkHitBox();
        update();
    }, speed)
}

function checkHitBox() {
    if (dvd.x + dvd.img.width * scale >= canvas.width || dvd.x <= 0) {
        dvd.xspeed *= -1;
        pickColor();
    }

    if (dvd.y + dvd.img.height * scale >= canvas.height || dvd.y <= 0) {
        dvd.yspeed *= -1;
        pickColor();
    }
}

function pickColor() {
    r = Math.random() * (254 - 0) + 0;
    g = Math.random() * (254 - 0) + 0;
    b = Math.random() * (254 - 0) + 0;

    logoColor = 'rgb(' + r + ',' + g + ', ' + b + ')';
}
