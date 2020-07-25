

var list = document.getElementById('list');



function addTodo(){
var todo_item = document.getElementById('todo-item')  
var li = document.createElement('li');
var litext = document.createTextNode(todo_item.value);
li.appendChild(litext)

// create delete button
var delbtn = document.createElement("button")
var deltext = document.createTextNode("DELETE")
delbtn.setAttribute("class","myButton2")
delbtn.setAttribute("onclick","deleteItem(this)")
delbtn.appendChild(deltext)
// create edit button
var editBtn = document.createElement("button")
var editText = document.createTextNode("EDIT")
editBtn.setAttribute("class","myButton3")

editBtn.appendChild(editText)
editBtn.setAttribute("onclick","editItem(this)")





li.appendChild(delbtn)
li.appendChild(editBtn)




list.appendChild(li)
todo_item.value = ""
// console.log(li);    
}    
function deleteItem(e){
e.parentNode.remove()
}   

function editItem(e){
    var val = prompt("Enter your updated value",e.parentNode.firstChild. nodevalue)
    e.parentNode.firstChild. nodeValue = val;
}

function deleteButton(){
    list.innerHTML= ""
}
    
   
   
   
   
    












