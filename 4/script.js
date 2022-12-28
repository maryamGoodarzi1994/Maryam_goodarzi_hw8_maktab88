let container = document.createElement("div");
container.style.border ="1px solid black";
container.style.padding = "10px 5px";


let title = document.createElement("h1");
title.innerText = "My Task";
title.style.color = "red";

let orderedList = document.createElement("ol");
orderedList.style.listStyleType = "upper-roman";


let item1 = makeLi("user dashbord") ;
appendChildToOl(item1);
let item2 = makeLi("admin dashboard");
appendChildToOl(item2);

let item3 = makeLi("authentication");
appendChildToOl(item3);

let item4 = makeLi("about page");
appendChildToOl(item4);

let item5 = document.createElement("li");
let deleteOrderedList = document.createElement("del");
deleteOrderedList.innerText = 'content page';
item5.appendChild(deleteOrderedList);
appendChildToOl(item5);
function makeLi(text){
    let item = document.createElement("li");
     item.innerText = text;
     
    return item;
}
function appendChildToOl (child){
    orderedList.appendChild(child)
}

let unorderedList = document.createElement("ul");
unorderedList.style.listStyleType = "circle";

let unorderedItem1 = document.createElement("li");
unorderedItem1.innerText = 'login';
unorderedList.appendChild(unorderedItem1);

let unorderedItem2 = document.createElement("li");
let deleteTag = document.createElement("del");
deleteTag.innerText = 'register';

unorderedItem2.appendChild(deleteTag);
unorderedList.appendChild(unorderedItem2);



let unorderedItem3 = document.createElement("li");
unorderedItem3.innerText = 'logout';
unorderedList.appendChild(unorderedItem3);




let input = document.createElement("input");
let button = document.createElement("button");
button.textContent = 'add task';

container.appendChild(title);
item3.appendChild(unorderedList);
container.appendChild(orderedList);
container.appendChild(input);
container.appendChild(button);

document.body.appendChild(container);