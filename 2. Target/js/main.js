window.onload = function () {
    var result = 0;
    function shootHandler() {
        var x = document.getElementById('x').value;
        var y = document.getElementById('y').value;
        result += shoot(x, y);
        document.getElementById('result').innerHTML = 'Результат: ' + result;
    }
    function resetHandler() {
        result = 0;
        document.getElementById('result').innerHTML = 'Результат: ' + result;
        document.getElementById('x').value = '';
        document.getElementById('y').value = '';
        document.getElementById('z').value = '';
    }
    var button = document.getElementById('pressMe');
    button.addEventListener('click', shootHandler);
    var buttonReset = document.getElementById('reset');
    buttonReset.addEventListener('click', resetHandler);
};