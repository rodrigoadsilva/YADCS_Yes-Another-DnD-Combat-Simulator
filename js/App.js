var teste = {};

var xmlhttp = new XMLHttpRequest();
var url = "https://www.dnd5eapi.co/api/races";

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        teste = myArr;
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();