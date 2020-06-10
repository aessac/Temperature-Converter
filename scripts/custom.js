function tempConverter() {
    //To reset values on click
    var htmlValues = document.getElementsByClassName('value-wrapper');
    for (var i = 0; i < htmlValues.length; i++) {
        console.log('htmlValues', htmlValues, htmlValues[i]);
        htmlValues[i].innerHTML = '';
    }

    //To check temperature choice
    var tempChoice = document.getElementById("tempChoice");
    var valueTemp = tempChoice.options[tempChoice.selectedIndex].value;

    // Checks the value inside the temperature input
    var tempValue = document.getElementById("temperature").value;
    var tempNumber = Number(tempValue);

    //Check if temperature is empty
    if (tempNumber == "") {
        return 0;
    }

    if (valueTemp == 'celsius') {
        celsiusToFah(tempNumber);
        celsiusToKel(tempNumber);
        celsiusToRan(tempNumber);
        celsiusToRea(tempNumber);
    }

    else if (valueTemp == 'fahrenheit') {
        fahrenheitToCel(tempNumber);
        fahrenheitToKel(tempNumber);
        fahrenheitToRan(tempNumber);
        fahrenheitToRea(tempNumber);
    }

    else if (valueTemp == 'kelvin') {
        kelvinToCel(tempNumber);
        kelvinToFah(tempNumber);
        kelvinToRan(tempNumber);
        kelvinToRea(tempNumber);
    }

    else if (valueTemp == 'rankine') {
        rankineToCel(tempNumber);
        rankineToFah(tempNumber);
        rankineToKel(tempNumber);
        rankineToRea(tempNumber);
    }

    else if (valueTemp == 'reaumur') {
        reaumurToCel(tempNumber);
        reaumurToFah(tempNumber);
        reaumurToKel(tempNumber);
        reaumurToRan(tempNumber);
    }


    //Celsius functions
    function celsiusToFah(celsius) {
        var fahrenheit = (celsius * (9 / 5)) + 32;
        var fahrenheit = fahrenheit.toFixed(3);
        document.getElementById("CelToFah").innerHTML = "Fahrenheit" + " " + "=" + " " + fahrenheit;
    }

    function celsiusToKel(celsius) {
        var kelvin = (celsius * 1) + 273.15;
        var kelvin = kelvin.toFixed(3);
        document.getElementById("CelToKel").innerHTML = "Kelvin" + " " + "=" + " " + kelvin;
    }
    function celsiusToRan(celsius) {
        var rankine = ((celsius * (9 / 5)) + 491.67);
        var rankine = rankine.toFixed(3);
        document.getElementById("CelToRan").innerHTML = "Rankine" + " " + "=" + " " + rankine;
    }

    function celsiusToRea(celsius) {
        var reaumur = (celsius * 0.8);
        var reaumur = reaumur.toFixed(3);
        document.getElementById("CelToRea").innerHTML = "Reaumur" + " " + "=" + " " + reaumur;
    }


    //Fahrenheit functions
    function fahrenheitToCel(fahrenheit) {
        var celsius = (fahrenheit - 32) * (5 / 9);
        var celsius = celsius.toFixed(3);
        document.getElementById("FahToCel").innerHTML = "Celsius" + " " + "=" + " " + celsius;
    }

    function fahrenheitToKel(fahrenheit) {
        var kelvin = (((fahrenheit - 32) * (5 / 9)) + 273.15);
        var kelvin = kelvin.toFixed(3);
        document.getElementById("FahToKel").innerHTML = "Kelvin" + " " + "=" + " " + kelvin;
    }

    function fahrenheitToRan(fahrenheit) {
        var rankine = (fahrenheit + 459.67);
        var rankine = rankine.toFixed(3);
        document.getElementById("FahToRan").innerHTML = "Rankine" + " " + "=" + " " + rankine;
    }

    function fahrenheitToRea(fahrenheit) {
        var reaumur = ((fahrenheit - 32) * (4 / 9));
        var reaumur = reaumur.toFixed(3);
        document.getElementById("FahToRea").innerHTML = "Reaumur" + " " + "=" + " " + reaumur;
    }

}


//Kelvin functions
function kelvinToCel(kelvin) {
    var celsius = (kelvin - 273.15);
    var celsius = celsius.toFixed(3);
    document.getElementById("KelToCel").innerHTML = "Celsius" + " " + "=" + " " + celsius;
}

function kelvinToFah(kelvin) {
    var fahrenheit = (((kelvin - 273.15) * (9 / 5)) + 32);
    var fahrenheit = fahrenheit.toFixed(3);
    document.getElementById("KelToFah").innerHTML = "Fahrenheit" + " " + "=" + " " + fahrenheit;
}

function kelvinToRan(kelvin) {
    var rankine = (kelvin * (9 / 5));
    var rankine = rankine.toFixed(3);
    document.getElementById("KelToRan").innerHTML = "Rankine" + " " + "=" + " " + rankine;
}

function kelvinToRea(kelvin) {
    var reaumur = ((kelvin - 273.15) * 0.8);
    var reaumur = reaumur.toFixed(3);
    document.getElementById("KelToRea").innerHTML = "Reaumur" + " " + "=" + " " + reaumur;
}


//Rankine functions
function rankineToCel(rankine) {
    var celsius = ((rankine - 491.67) * (5 / 9));
    var celsius = celsius.toFixed(3);
    document.getElementById("RanToCel").innerHTML = "Celsius" + " " + "=" + " " + celsius;
}

function rankineToFah(rankine) {
    var fahrenheit = (rankine - 459.67);
    var fahrenheit = fahrenheit.toFixed(3);
    document.getElementById("RanToFah").innerHTML = "Fahrenheit" + " " + "=" + " " + fahrenheit;
}

function rankineToKel(rankine) {
    var kelvin = (rankine * (5 / 9));
    var kelvin = kelvin.toFixed(3);
    document.getElementById("RanToKel").innerHTML = "Kelvin" + " " + "=" + " " + kelvin;
}

function rankineToRea(rankine) {
    var reaumur = ((rankine - 491.67) * (4 / 9));
    var reaumur = reaumur.toFixed(3);
    document.getElementById("RanToRea").innerHTML = "Reaumur" + " " + "=" + " " + reaumur;
}


//Reaumur functions
function reaumurToCel(reaumur) {
    var celsius = (reaumur / 0.8);
    var celsius = celsius.toFixed(3);
    document.getElementById("ReaToCel").innerHTML = "Celsius" + " " + "=" + " " + celsius;
}

function reaumurToFah(reaumur) {
    var fahrenheit = ((reaumur * (9 / 4)) + 32);
    var fahrenheit = fahrenheit.toFixed(3);
    document.getElementById("ReaToFah").innerHTML = "Fahrenheit" + " " + "=" + " " + fahrenheit;
}

function reaumurToKel(reaumur) {
    var kelvin = ((reaumur * (5 / 4)) + 273.15);
    var kelvin = kelvin.toFixed(3);
    document.getElementById("ReaToKel").innerHTML = "Kelvin" + " " + "=" + " " + kelvin;
}

function reaumurToRan(reaumur) {
    var rankine = ((reaumur * (9 / 4)) + 491.67);
    var rankine = rankine.toFixed(3);
    document.getElementById("ReaToRan").innerHTML = "Rankine" + " " + "=" + " " + rankine;
}


