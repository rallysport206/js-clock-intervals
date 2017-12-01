var secHand = getElementById('second');
var minHand = getElementById('minutes');
var hourHand = getElementById('hour');

var secHand() = setInterval(function () {
        degrees = degrees + 6;
        secHand.style.transform = "rotate(" + counter + "deg)";
      }, 1000);
secHand();
function minHand() {
    var counter = 0;
    setInterval(function() {
        counter = +6
        minHand.style.transform = "rotate(" + counter + "deg)";
    }, 6000);
}
minHand();
function hourHand() {
    var counter = 0;
    setInterval(function() {
        counter = +30
        hourHand.style.transform = "rotate(" + counter + "deg)";
    }, 30000);
}
hrHand();

// secondRotation(0); // returns 0
// secondRotation(59); // returns (59 / 60) * 360
//
// hourRotation(12); // returns 0
// hourRotation(5); // returns (5 / 12) * 360
