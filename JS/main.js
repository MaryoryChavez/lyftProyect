function listCountries(evt) {
    var listCountries = document.getElementById("listCountries");
    var nombre = document.getElementById("valorCount");
    var input = document.getElementById("inputNumber");
    for (var i = 0; i < countries.length; i++) {
        var li = document.createElement("LI");
        li.innerHTML = '<div src="" class="flag flag-' + countries[i].code.toLowerCase() + '" alt="" >' + '</div>' + '<a href="" onclick="dial(' + i + ',event)">' + countries[i].name + '</a>';

        input.value = "+51";
        nombre.innerHTML = '<div src="" class="flag flag-pe" alt=""></div>' + '</div>' + '<p>Perú</p>';

        listCountries.appendChild(li);
    }
    console.log(countries[0].code.toLowerCase());
    evt.preventDefault();
}

function dial(num, evt) {
    var input = document.getElementById("inputNumber");
    var nombre = document.getElementById("valorCount");
    input.value = countries[num].dial_code;
    nombre.innerHTML = '<div src="" class="flag flag-' + countries[num].code.toLowerCase() + '" alt="" >' + '</div>' + '<p>' + countries[num].name + '</p>';

    evt.preventDefault();
}

function aleatoriPass() {
    var aleatory = "LAB-" + Math.round(Math.random() * (999 - 100) + parseInt(100));
    alert(aleatory);
    location.href="signup2.html";
}