var covid;

function main() {
    var settings = {
        "url": "https://api.covid19api.com/summary",
        "method": "GET",
        "timeout": 0,
    };



    $.ajax(settings).done(function(response) {
        console.log(response);
        document.write(NewConfirmed)
    });
}
document.write(NewConfimed)

var output = document.getElementById('output');
output.innerHTML = 'new content';