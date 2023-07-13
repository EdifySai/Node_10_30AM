setInterval(function () {
    var date = new Date();
    var time = addZero(date.getHours()) + ":" + addZero(date.getMinutes()) + ":" + addZero(date.getSeconds());
    console.log(time);
}, 1000);

function addZero(input) {
    if (input < 10) {
        input = "0" + input;
    }
    return input;
}