// Variables

const inputBox=document.getElementById("textBox");
const lsitCOnatiner=document.getElementById("list-Conatiner");




// Decleration of function to store the value in the array through submit buuton
function saveTask(){
    debugger;
if(inputBox.value===''){
    alert("Please Enter your task")
}

else{
    let li=document.createElement('li');
    li.innerHTML=inputBox.value;
    lsitCOnatiner.appendChild(li);

    let span=document.createElement('span');
    span.innerHTML="\u00d7";
    li.appendChild(span);
}

inputBox.value='';  
saveData();
}

lsitCOnatiner.addEventListener("click",function(e){
    if(e.target.tagName==='LI'){
        e.target.classList.toggle("checked");
        saveData();
    }

    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",lsitCOnatiner.innerHTML);
}

function showTask(){
    lsitCOnatiner.innerHTML=localStorage.getItem("data");
}
showTask();
 
