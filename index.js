var input=document.getElementById("todo-input")
var btn= document.getElementById("todo-btn")
var list=document.getElementById("todo-content")
btn.addEventListener('click', add)
function add(){
   var li=document.createElement('li')
   li.innerHTML = input.value + "<button onclick='remove(event)'> Remove</button>"
   list.appendChild(li)
   input.value=''
   li.addEventListener('click',()=>{
    li.style.textDecoration='line-through'
   })
}
function remove(event){
  event.target.parentElement.remove()
}
