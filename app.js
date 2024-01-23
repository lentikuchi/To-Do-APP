const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("Strange? You forgot to text, Try again.");
    }
    else{
        li = document.createElement("li"); //krijon li t re sa her go e shkrujsh
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span"); // ekzistimi iksit ke teksti
    span.innerHTML = "\u00d7";
    li.appendChild(span);

    }
    inputBox.value = ""; //majsi e shkrujsh taskin e hek pi ke inputi mos ta pengoje
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();//nese o e shtajpet vene at image me rethin e mbushet
    }
      else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
      } 
    
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();