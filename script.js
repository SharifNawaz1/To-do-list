let inputBox = document.querySelector("#input-box");
let listcontainer = document.querySelector("#list-container");
let enterkey = document.querySelector("input");
console.log(listcontainer);
let addTask = document.querySelector("#add");

enterkey.addEventListener("keydown",(e)=>{
    if(e.keyCode==13)
    {
        if(inputBox.value === '')
        {
            alert("You must write something...");
        }
        else{
            let li = document.createElement("li");
            li.innerHTML=inputBox.value;
            listcontainer.appendChild(li);
            let span = document.createElement("span");
            span.innerHTML="\u00d7";
            li.appendChild(span);
        }
        inputBox.value = '';
        savaData();       
    }
})

addTask.addEventListener("click",()=>
{
    if(inputBox.value === '')
    {
        alert("You must write something...");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=inputBox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    savaData();
});
listcontainer.addEventListener("click",(e)=>
{
    
    if(e.target.tagName === "LI")
    {
        
        e.target.classList.toggle("checked");
        savaData();
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        savaData();
    }
})


let savaData = () => {
localStorage.setItem("data",listcontainer.innerHTML)
}

let showData = () => {
    listcontainer.innerHTML = localStorage.getItem("data");
}
showData();