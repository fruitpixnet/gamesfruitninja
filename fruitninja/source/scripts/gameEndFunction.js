function gameEnd() {
    let calcval = scoreNumber;
    if (scoreNumber >= aposta * 1.5) {
        location.href = "/index.html?msg=win&value=" + calcval;
    } else {
        location.href = "/index.html?msg=gameover";
    }
}
