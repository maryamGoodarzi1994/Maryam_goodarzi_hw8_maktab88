let addButton = document.getElementById("add");
let containerDiv = document.getElementById("container");
let progressDiv = document.getElementById('one');
let width = Number('10');
progressDiv.textContent = 10;
// progressDiv.style.width = '10%';


  addButton.onclick = function () {
width += Number('10');
   progressDiv.style.width = Number(width)+'%' ;
 let text = Number(progressDiv.textContent) += 10;

   text = Number(text) + '%';
  
  }