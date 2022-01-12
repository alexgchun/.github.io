function Color_Function() {
    var Color_Output;//declared var
    var Colors = document.getElementById("Color_Input").value //input value goes into switch(color) until it matches a case with same Spelling and Puncutaion
    var Color_String = " is a great color!"; //end string
    switch(Colors) {
        case "Red"://case
            Color_Output = "Red" + Color_String;
        break;
        case "Blue":
            Color_Output = "Blue" + Color_String;
        break;
        case "Yellow":
            Color_Output = "Yellow" + Color_String;
        break;
        default://when no case matches, this is displayed
        Color_Output = "Please enter a color exactly as written on the list above.";

    }
    document.getElementById("Output").innerHTML = Color_Output;
}


function Hello_World_Function() {
    var A = document.getElementsByClassName("click");//replace class click element with var A;
    A[0].innerHTML = "Chengaged";//first index with class click, text will change to that;
}

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();

var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 100);