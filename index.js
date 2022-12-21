const newTask = document.querySelector("[data-add]");

newTask.addEventListener("click",()=>{
  if (document.querySelector("[data-task]").value.length === 0) {
   alert("Please enter a task");
  }
  else
  {
    document.querySelector("[data-list]").innerHTML += `
      <div class="task">
        <span id="taskname">
         ${document.querySelector("[data-task]").value}
        </span>
        <button class="delete-button">
          <i class="material-icons">delete</i>
        </button>
      </div>`;
    document.querySelector("[data-task]").value="";
    console.log("the list has ", document.querySelectorAll(".task"));

    
let deleteTask = document.querySelectorAll(".delete-button");


for(let i=0;i<deleteTask.length;i++){
deleteTask[i].addEventListener('click',()=>{
 deleteTask[i].parentNode.remove();
})
}

}});



