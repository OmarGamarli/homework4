const paddleheight = 80
const paddleSpeed = 10

let paddleTop = 160
let paddleTop2 = 160

let padup = false
let paddown = false
let padup2 = false
let paddown2 = false

let ballXSpeed = 5
let ballYSpeed = 5

let balltop = 200
let ballleft = 400
let ballright = 400

function movepaddle() {
    document.addEventListener('keydown', (e) => {
        if (e.key == 'w') {
            padup = true

        } else if (e.key == 's') {
            paddown = true
        }

    })
    document.addEventListener('keyup', (e) => {
        if (e.key == 'w') {
            padup = false

        } else if (e.key == 's') {
            paddown = false
        }


    })
    document.addEventListener('keydown', (e) => {
        if (e.key == 'ArrowUp') {
            padup2 = true

        } else if (e.key == 'ArrowDown') {
            paddown2 = true
        }

    })
    document.addEventListener('keyup', (e) => {
        if (e.key == 'ArrowUp') {
            padup2 = false

        } else if (e.key == 'ArrowDown') {
            paddown2 = false
        }


    })
    if (paddown && paddleTop < 320) {
        paddleTop += paddleSpeed;
    } else if (padup && paddleTop > 0) {
        paddleTop -= paddleSpeed;
    }

    if (paddown2 && paddleTop2 < 320) {
        paddleTop2 += paddleSpeed;
    } else if (padup2 && paddleTop2 > 0) {
        paddleTop2 -= paddleSpeed;
    }

}

function moveball() {
    if (balltop > 384) {
        ballYSpeed = -ballYSpeed;
    } else if (balltop < 0) {
        ballYSpeed = -ballYSpeed;
    }
    if (ballleft >784 && balltop > paddleTop && 400 - 16 - balltop > 400 - paddleheight - paddleTop) {
        ballXSpeed = -ballXSpeed;
    }

    if (ballleft <= 10 && balltop >= paddleTop && 400 - 16 - balltop > 400 - paddleheight - paddleTop) {
        ballXSpeed = -ballXSpeed;
    }
    if (ballleft < -5) {
        location.reload()
    }
    if (ballleft > 780) {
        location.reload()
    }
    // if (
    //     ballright < 10 &&
    //     balltop + 16 > paddleTop &&
    //     balltop < paddleTop+ paddleheight
    //   ) {
    //     ballXSpeed = -ballXSpeed;
    //   }
    //   if (
    //     ballleft > 774 &&
    //     balltop + 16 > paddleTop2 &&
    //     balltop < paddleTop2 + paddleheight
    //   ) {
    //     ballXSpeed = -ballXSpeed;
    //   }

    //   // Ball collision with walls
    //   if (balltop < 0 || balltop > 384) {
    //     ballYSpeed = -ballYSpeed
    //   }

    ballleft += ballXSpeed;
    balltop += ballYSpeed;
    ballright += ballXSpeed
}

function update() {
    movepaddle();
    moveball();
    document.getElementById('paddle1').style.top = paddleTop + 'px';
    document.getElementById('paddle2').style.top = paddleTop2 + 'px';
    document.getElementById('ball').style.top = balltop + 'px';
    document.getElementById('ball').style.left = ballleft + 'px';
    document.getElementById('ball').style.right = ballright + 'px'
}

function startgame() {
    setInterval(update, 1000 / 60);
}
startgame();