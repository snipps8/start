function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var amPM = (h > 11) ? "pm" : "am";

  if (h > 12) {
    h -= 12;
    } else if (h === 0) {
       h = 12;
    }
  // add a zero in front of numbers<10
  m = checkTime(m);
  document.getElementById('time').innerHTML = "the time is " + h + ":" + m + " " + amPM;
  t = setTimeout(function() {
    startTime()
  }, 500);
}

function weatherCheck() {
    let xhr = new XMLHttpRequest();
            // Request to open weather map
            xhr.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=4168139&units=imperial&appid=53bf5450df113634f465373dd85fbd1c');
            xhr.onload = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        let json = JSON.parse(xhr.responseText);
                        console.log(json);
                        document.getElementById("temp").innerHTML = "it's " + json.main.temp.toFixed(0) + " degrees outside";

                    } else {
                        console.log('error msg: ' + xhr.status);
                    }
                }
            }
            xhr.send();
            // Set up the clock
            document.getElementById("clock").innerHTML = getTime();
            // Set clock interval to tick clock
            setInterval( () => {
                document.getElementById("clock").innerHTML = getTime();
            },5000);
}

function changeImg(imgNumber)   {
            var myImages = ["bg1.jpg", "bg2.jpg", "bg3.jpg", "bg4.jpg", "bg5.jpg"]
            var imgShown = document.body.style.backgroundImage;
            var newImgNumber =Math.floor(Math.random()*myImages.length);
            document.body.style.backgroundImage = 'url('+myImages[newImgNumber]+')';
        }

window.onload=changeImg;

startTime();
weatherCheck();