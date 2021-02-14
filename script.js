//challenge 1


// function declaration

function triangleArea() {
var b = document.getElementById("b").value;
var h = document.getElementById("h").value;
var a =  b*h/2;

document.querySelector(".ta").innerHTML = a;

}


// function expression(it is just for having experience)

/*var b = prompt('Write down the base of your triangle');
var h = prompt('Write down the hieght of your triangle');
var a = function() {
    return b*h/2;
    
}
document.getElementsByClassName('container')[0].innerHTML = a(b,h);*/
