let element = document.createElement("div");
element.style.width = '200px'
element.style.height = '200px'
element.style.backgroundColor = 'green';
element.style.overflow ='hidden';

let text = document.createTextNode("click here and watch the next change!");

element.onclick = function(){
element.textContent += 'click here and watch the next change!';
}

document.body.appendChild(element)