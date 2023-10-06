
task = {};

// adds a task to the list
const taskAdd = (userInput) => {
    task[userInput] = false
    return task[userInput]
}

// marking task as complete (toggle true/false)
const taskComplete = (userInput) => {
    task[userInput] = true
    return task[userInput]
}

// removing the task
const taskRemove = (userInput) => {
    delete task[userInput]
}

// view the task
const viewList = () => {
    return Object.keys(task)
}



//prompt for userInput
const toDoListShell = () => {
    //let selection = prompt("Enter 1: Add a task \n Enter 2: Modify \n Enter 3: Delete\n Enter 4: View List")
    const readline = require("readline");

    // create interface for input and output
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    
    // create empty user input
    let userInput = "";
    
    // question user to enter name
    rl.question("What is your name\n", function (string) {
      userInput = string;
    
      console.log("Your name is " + userInput);
    
      // close input stream
      rl.close();

    });
    // if (selection === '1'){
    //    let taskName = prompt("Enter a task");
    //    taskAdd(taskName)
    // }
    
}
console.log(toDoListShell())
//console.log(taskAdd("first task"))

module.exports = {taskAdd: taskAdd, taskComplete: taskComplete, taskRemove: taskRemove, viewList: viewList}
