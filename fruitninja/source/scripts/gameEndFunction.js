function gameEnd() {
    let calcval = scoreNumber;
    if (scoreNumber >= aposta * 1.5) {
        location.href = "/bet.html?msg=win&value=" + calcval;
    } else {
        location.href = "/bet.html?msg=gameover";
    }
}
