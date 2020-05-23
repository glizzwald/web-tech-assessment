var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://api.apify.com/v2/key-value-stores/KWLojgM5r1JmMW4b4/records/LATEST?disableRedirect=true');
ourRequest.onload = function() {
    var covidData = JSON.parse(ourRequest.responseText);
    console.log(covidData[0]);

};
ourRequest.send();