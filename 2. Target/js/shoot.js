function shoot(x, y) {
    if (!isNaN(x) && !isNaN(y)) {
        return checkCenter(x, y) || checkStar(x, y) || checkBetweenCircleAndSquare(x, y) || checkBetweenRhombAndCircle(x, y) || checkBetweenStarAndRhomb(x, y);
    }
    return 0;
}

function checkOutTarget(x, y) {
    return ((Math.abs(x) >= 1) && (Math.abs(y) >= 1)) ? 0 : 0;
}
function checkBetweenCircleAndSquare(x, y) {
    return (((x ** 2 + y ** 2) >= 1) && (((x <= 1 && x >= -1) && (y <= 1 && y >= -1)))) ? 1 : 0;
}
function checkBetweenRhombAndCircle(x, y) {
    return (((x ** 2 + y ** 2) <= 1) && ((Math.abs(x) + Math.abs(y)) >= 1)) ? 2 : 0;
}
function checkBetweenStarAndRhomb(x, y) {
    return (((Math.sqrt(1 - (Math.sqrt(1 - (Math.abs(x))) ** 4))) + Math.abs(y) >= 1) && ((Math.abs(x) + Math.abs(y)) <= 1)) ? 3 : 0;
}
function checkStar(x, y) {
    return (((Math.sqrt(1 - (Math.sqrt(1 - (Math.abs(x))) ** 4))) + Math.abs(y) < 1) && (x != 0 && y != 0)) ? 4 : 0;
}
function checkCenter(x, y) {
    return (x == 0 && y == 0) ? 10 : 0;
}