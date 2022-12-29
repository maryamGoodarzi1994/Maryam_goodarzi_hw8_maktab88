let light = document.getElementById('light');
let dark = document.getElementById('dark');
let title = document.getElementById('title');
let textContainer = document.getElementById('text-container');

light.onclick = function(){
title.textContent = 'light mode';
textContainer.style.backgroundColor = 'rgb(183, 178, 178)'
textContainer.style.color = 'rgb(23, 22, 22)';

}
dark.onclick = function(){
title.textContent = 'dark mode';
textContainer.style.color = 'rgb(183, 178, 178)'
textContainer.style.backgroundColor = 'rgb(23, 22, 22)';

}