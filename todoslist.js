let userInputEl=document.getElementById("userInput");
let toDosMainContainerEl=document.getElementById("todoMainContainer");
let addButtonEl=document.getElementById("todosAddButton");
let requiredEl = document.getElementById("requiredEl");
let saveBtnEl = document.getElementById("saveBtn");

let todoList=JSON.parse(localStorage.getItem("todoList"));
if (todoList===null){
    todoList=[];
}else{
    todoList=todoList;
}

function onDeleteTodo(id){
    todoList = todoList.filter((item)=>item.id!==id);
    let stringfiedEl=JSON.stringify(todoList);
    localStorage.setItem("todoList",stringfiedEl);
}

let CreateAndAppend=function(todo){
    let todoId = "todo"+todo.id;
    let checkBoxId = "checkBox"+todo.id;
    let labelId = "label"+todo.id;

    let itemcontainerEl=document.createElement("div"); //item main
    itemcontainerEl.id=todoId;
    itemcontainerEl.setAttribute("class","item-containter d-flex flex-row mt-2")
    // itemcontainerEl.classList.add("item-containter","d-flex","flex-row","mt-2")
    let CheckBoxContainerEl=document.createElement("div"); //check box
    CheckBoxContainerEl.setAttribute("class","check-box-container");
    // CheckBoxContainerEl.classList.add("check-box-container");
    let checkBoxEl=document.createElement("input");
    checkBoxEl.setAttribute("class","check-box-el");
    // checkBoxEl.classList.add("check-box-el");
    checkBoxEl.setAttribute("type","checkbox");
    // checkBoxEl.type="checkbox";
    checkBoxEl.setAttribute("id",checkBoxId);
    // checkBoxEl.id=checkBoxId;
    CheckBoxContainerEl.appendChild(checkBoxEl);

    let itemDetailContainerEl=document.createElement("div");
    itemDetailContainerEl.setAttribute("class","item-details-container d-flex flex-row")
    // itemDetailContainerEl.classList.add("item-details-container","d-flex","flex-row");
    let itemDetailsTextEl=document.createElement("div");
    itemDetailsTextEl.setAttribute("class","itemdetails-text");
    // itemDetailsTextEl.classList.add("itemdetails-text");
    let LabelEl=document.createElement("label");
    LabelEl.setAttribute("class","label-el")
    // LabelEl.classList.add("label-el")
    LabelEl.setAttribute("id",labelId)
    // LabelEl.id=labelId;
    LabelEl.textContent=todo.name;
    itemDetailContainerEl.appendChild(LabelEl)
    LabelEl.setAttribute("for",checkBoxId);
    let deleteIconContainer=document.createElement("div");
    deleteIconContainer.setAttribute("class","ml-auto p-2")
    // deleteIconContainer.classList.add("ml-auto","p-2");
    let deleteiconEl=document.createElement("i");
    deleteiconEl.setAttribute("class","icon-el bi bi-trash3 text-danger")
    // deleteiconEl.classList.add("icon-el","bi","bi-trash3","text-danger");
    deleteIconContainer.appendChild(deleteiconEl);


    toDosMainContainerEl.appendChild(itemcontainerEl);
    itemcontainerEl.appendChild(CheckBoxContainerEl);
    itemcontainerEl.appendChild(itemDetailContainerEl);
    itemDetailContainerEl.appendChild(itemDetailsTextEl);
    itemDetailContainerEl.appendChild(deleteIconContainer);


    checkBoxEl.onclick=function(){
        LabelEl.classList.toggle("checked");
    }

    deleteiconEl.onclick=function(){
        itemcontainerEl.textContent="";
        onDeleteTodo(todo.id)
    }

}

function getDetails(){
    toDosMainContainerEl.textContent="";
    for (let eachItem of todoList){
        CreateAndAppend(eachItem)
    }

}

function addTodo(){
    let addTodoLength=todoList.length
    let addto={
        id:addTodoLength,
        name:userInputEl.value
    }
    todoList.push(addto)
}

addButtonEl.onclick=function(){
    // CreateAndAppend()
    addTodo();
    getDetails();
    userInputEl.value="";

}
saveBtnEl.onclick=function(){
    let stringfiedEl=JSON.stringify(todoList);
    localStorage.setItem("todoList",stringfiedEl);
}
getDetails();


