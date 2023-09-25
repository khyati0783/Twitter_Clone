const div_b3=document.querySelector(".b3");
const input=document.querySelector(".w2");
const button=document.querySelector(".ton1");

function addTodo(){
    const todo=input.value;
    if(input.value!=""){
    const new_li=document.createElement("div");
    const new_p=document.createElement("p");
    const new_btn=document.createElement("button");
    const new_edit=document.createElement("button");

    new_btn.style.backgroundColor="rgb(35, 149, 219)";
    new_btn.style.color="white";
    new_btn.style.border="1px solid rgb(35, 149, 219)";
    new_btn.style.borderRadius="20px";
    new_btn.style.height="40px";
    new_btn.style.width="100px";
    new_btn.style.float="right";
    new_btn.style.marginRight="10px";
    new_btn.style.fontSize="24px";

    new_edit.style.backgroundColor="rgb(35, 149, 219)";
    new_edit.style.color="white";
    new_edit.style.border="1px solid rgb(35, 149, 219)";
    new_edit.style.borderRadius="20px";
    new_edit.style.height="40px";
    new_edit.style.width="100px";
    new_edit.style.float="right";
    new_edit.style.marginRight="10px";
    new_edit.style.fontSize="24px";

    new_li.style.borderBlockStart="1px solid rgb(134, 130, 130)";
    new_li.style.fontSize="30px";
    new_li.style.paddingLeft="10px";
    new_li.style.marginBlockStart="10px";
    new_li.style.marginBlockEnd="10px";
    new_li.style.display="inline";

    new_p.textContent=todo;
    new_btn.textContent="delete";
    new_edit.textContent="edit";
    new_btn.classList.add("del");
    new_edit.classList.add("edit");

    new_li.appendChild(new_p);
    new_li.appendChild(new_btn);
    new_li.appendChild(new_edit);
    div_b3.appendChild(new_li);


    input.value="";
    };
}
function removeTodo(event){
    const clicked=event.target;
    const clickedIsDelBtn=clicked.matches(".del");
    if( clickedIsDelBtn){
        const li=clicked.parentElement;
        li.style.display="none";
    }
}

function editTodo(){
}
button.addEventListener("click",addTodo);
div_b3.addEventListener("click",removeTodo);