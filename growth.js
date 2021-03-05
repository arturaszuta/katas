function nbYear(p0, percent, aug, p) {
    let currentPop = p0;
    let yearsPassed = 0;
    let popgrowth = 0;
    let ogPop = p0;
    while (currentPop <= p) {
        popgrowth = (currentPop * (percent * 0.01) + aug);
        currentPop = currentPop + popgrowth;
        console.log(popgrowth);
        yearsPassed++;
    }
    return yearsPassed;
}

nbYear(1500, 5, 100, 5000)