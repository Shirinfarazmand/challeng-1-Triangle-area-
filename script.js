
//challenge 1


// function declaration
var a = prompt('Write down the base of your triangle');
var b = prompt('Write down the hieght of your triangle');

function triangleArea() {
    return a*b/2;
}
document.getElementsByClassName('container')[0].innerHTML = triangleArea();


// function expression(it is just for having experience)

/*var a = prompt('Write down the base of your triangle');
var b = prompt('Write down the hieght of your triangle');

var x = function() {
    return a*b/2;
    
}
document.getElementsByClassName('container')[0].innerHTML = x(a,b);*/