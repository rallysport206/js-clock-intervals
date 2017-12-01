var secHand = document.getElementById('second');
var minHand = document.getElementById('minutes');
var hourHand = document.getElementById('hour');
var secDegress = 0;
var minDegress = 0;
var hourDegress = 0;

setInterval(function () {
  // console.log('tick');
    secDegress = secDegress + 6;
    secHand.style.transform = "rotate(" + secDegress + "deg)";
  }, 1000);
setInterval(function() {
  // console.log('min');
        minDegress += 6;
        minHand.style.transform = "rotate(" + minDegress + "deg)";
    }, 60000);
setInterval(function() {
      // console.log('hr');
        hourDegress += 30;
        hourHand.style.transform = "rotate(" + hourDegress + "deg)";
    }, 300000);


// secondRotation(0); // returns 0
// secondRotation(59); // returns (59 / 60) * 360
//
// hourRotation(12); // returns 0
// hourRotation(5); // returns (5 / 12) * 360
