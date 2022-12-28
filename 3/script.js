let parentElement = document.createElement("div");
parentElement.style.backgroundColor = "green";
parentElement.style.height = "500px";
parentElement.style.width = "500px";
parentElement.style.padding = "10px";

let parentText = document.createTextNode("parent div");
parentElement.appendChild(parentText);

let targetElement = document.createElement("div");
targetElement.style.backgroundColor = "transparent";
targetElement.style.height = "350px";
targetElement.style.width = "350px";
targetElement.style.padding = "10px";
targetElement.style.margin = "auto";
targetElement.style.border = "1px solid black";
let targetText = document.createTextNode("target div");
targetElement.appendChild(targetText);

let childElement = document.createElement("div");
childElement.style.height = "200px";
childElement.style.width = "200px";
childElement.style.margin = "auto";
childElement.style.border = "1px solid black";
let childText = document.createTextNode("child div");
childElement.appendChild(childText);

let buutonCopyParentText = document.createElement("button");
buutonCopyParentText.textContent = "copy parent text";


buutonCopyParentText.onclick = function(){
    targetElement.innerHTML = parentText.textContent + ' '+ targetText.textContent + ' '+ childText.textContent +' '+ targetElement.innerHTML;
}

let buutonCopyChildText = document.createElement("button");
buutonCopyChildText.textContent = "copy child text";

buutonCopyChildText.onclick = function(){
    targetElement.innerHTML = childText.textContent+ ' '+targetElement.innerHTML;
}

targetElement.appendChild(childElement);
parentElement.appendChild(targetElement);
document.body.appendChild(parentElement);
document.body.appendChild(buutonCopyParentText);
document.body.appendChild(buutonCopyChildText);
