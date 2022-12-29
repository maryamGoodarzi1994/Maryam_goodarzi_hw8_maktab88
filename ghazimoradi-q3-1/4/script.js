let list = document.querySelectorAll('li');
let ul =document.querySelector('ul');
let searchInput = document.getElementById('search-input');
console.log(list);

document.addEventListener(
    "keyup",
    function(event) {
     ul.innerHTML = [...list].filter(item => item.innerText.startsWith(event.key));
        })
        
        