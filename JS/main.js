function pru() {
    var listCountries = document.getElementById("listCountries");
    for (var i = 0; i < countries.length; i++) {
        var li = document.createElement("LI");
        li.innerHTML = '<img src="" class="flag flag-'+countries[i].code.toLowerCase()+'" alt="" '+'/>'+'<a href="">'+countries[i].name+'</a>';
        listCountries.appendChild(li);
    }
    console.log(countries[0].code.toLowerCase());
}


