var Infected = 0;
var DailyConfirmed = 0;
var Deceased = 0;
getStats()

function getStats() {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://api.apify.com/v2/key-value-stores/KWLojgM5r1JmMW4b4/records/LATEST?disableRedirect=true');
    ourRequest.onload = function() {
        var covidData = JSON.parse(ourRequest.responseText);
        Infected = covidData.infected;
        DailyConfirmed = covidData.dailyConfirmed;
        Deceased = covidData.deceased;
    };
    ourRequest.send();
}


function animateInfectedCount(number, target, elem) {
    if (number < target) {
        var interval = setInterval(function() {
            $(elem).text(number);
            if (number >= target) {
                clearInterval(interval);
                return;
            }
            number++;
            document.getElementById("infected").innerHTML = number;
        }, 50);
    }
}

function animateDailyConfirmedCount(number, target, elem) {
    if (number < target) {
        var interval = setInterval(function() {
            $(elem).text(number);
            if (number >= target) {
                clearInterval(interval);
                return;
            }
            number++;
            document.getElementById("dailyconfirmed").innerHTML = number;
        }, 50);
    }
}

function animateDeceasedCount(number, target, elem) {
    if (number < target) {
        var interval = setInterval(function() {
            $(elem).text(number);
            if (number >= target) {
                clearInterval(interval);
                return;
            }
            number++;
            document.getElementById("deceased").innerHTML = number;
        }, 50);
    }
}

setTimeout(function() {
    animateInfectedCount(Infected - 100, Infected, "infected");
    animateDailyConfirmedCount(DailyConfirmed - 100, DailyConfirmed, "dailyconfirmed");
    animateDeceasedCount(Deceased - 100, Deceased, "deceased");
}, 1000);