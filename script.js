let input=document.querySelector("#todoInput")
let button=document.querySelector("#addTodo")
let list=document.querySelector("#todo-list")


button.addEventListener("click",()=>{
    if (input.value.trim() === "")return;

    let li =document.createElement("li")
    li.textContent= input.value;

    li.addEventListener("click",()=>li.remove());

    list.appendChild(li);
    input.value="";
})

