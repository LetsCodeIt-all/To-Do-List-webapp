let A;
A=alert("Hii");

function addtask() {
  let taskadd = document.querySelector('.task-adder input'); // select input inside .task-adder
  let tasktext = taskadd.value.trim();

  if (tasktext !== "") {
    let taskBox = document.createElement('div');
    taskBox.className = 'task';
    
    // Create Checkbox
    let checkbox = document.createElement('div');
    checkbox.className = 'checkbox';
    
    // Create Text
    let taskTitle = document.createElement('h3');
    taskTitle.className = 'tt';
    taskTitle.innerText = tasktext;
    
    // Create Cancel Button
    let cancelBtn = document.createElement('div');
    cancelBtn.className = 'cb';
    cancelBtn.innerHTML = '&times;';

    // Append inside taskBox
    taskBox.appendChild(checkbox);
    taskBox.appendChild(taskTitle);
    taskBox.appendChild(cancelBtn);

    // Append taskBox inside tasks
    document.getElementsByClassName('tasks')[0].appendChild(taskBox);

    
  };
  
};
function comp(element){
  element.classList.add('checked');

}