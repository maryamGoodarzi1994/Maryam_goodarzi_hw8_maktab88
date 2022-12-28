
let element = document.createElement("div");
let textChild = document.createTextNode("hover over me!");
element.appendChild(textChild);
element.style.backgroundColor = "blue"
element.style.width ="100px";
element.style.height = "100px";
element.onmouseover = function(){
    element.style.backgroundColor = "red";
}
element.onmouseleave =function (){
    element.style.backgroundColor = "blue";
}
document.body.appendChild(element);