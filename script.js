const container = document.getElementById("container")
const items = document.getElementById("items");
const textfield = document.getElementById("field");
const send = document.getElementById("send");
const time = document.getElementById("time");
const tasks = document.getElementById("tasks");
const notasks = document.getElementById("notasks");

let mode = 0;
let timer = 0;
let taskNum = 0;

function themeToggler(){
    if(mode === 0){
        mode = 1;
        document.body.classList.add("dark-mode");
        container.classList.add("container-dark-mode");
        notasks.classList.add("tasks-dark-mode");
        tasks.querySelectorAll("div").forEach(div => {
            div.classList.add("tasks-dark-mode");
            div.querySelector("button").classList.add("send-dark-mode");
        });
        send.classList.add("send-dark-mode");
    }
    else{
        mode = 0;
        document.body.classList.remove("dark-mode");
        container.classList.remove("container-dark-mode");
        notasks.classList.remove("tasks-dark-mode");
        tasks.querySelectorAll("div").forEach(div => {
            div.classList.remove("tasks-dark-mode");
            div.querySelector("button").classList.remove("send-dark-mode");
        });
        send.classList.remove("send-dark-mode");

    }
    
}


function updateNoTaskMessage(){
    if(tasks.children.length === 0){
        notasks.style.display = "block";
    }
    else{
        notasks.style.display = "none";
    }
}

send.addEventListener('click', function() {
    let inputValue = textfield.value.trim();

    if (inputValue !== '') {
        const newDiv = document.createElement('div');
        newDiv.textContent = inputValue;
        const newBtn = document.createElement("button");
        if(mode === 0){
            newDiv.classList.add("new-div");
            newBtn.classList.add("delete-button");
        }
        else{
            newDiv.classList.add("new-div", "tasks-dark-mode");
            newBtn.classList.add("delete-button", "send-dark-mode");
        }
        
        
        
        newDiv.appendChild(newBtn);
        tasks.appendChild(newDiv);
        
        newBtn.addEventListener('click', function(){
            console.log("hello");
            tasks.removeChild(newDiv);
            updateNoTaskMessage();
        })
        inputValue = '';
        textfield.value = inputValue;
    } else {
        alert('Please enter something!');
    }
});

function updateTaskNum(){
    taskNum = tasks.children.length;
    items.innerHTML = taskNum;
    updateNoTaskMessage();
}


function updateTimer(){
    timer++;
    time.textContent = timer;
}


const timerInterval = setInterval(updateTimer,1000);
const taskInterval = setInterval(updateTaskNum, 0);




