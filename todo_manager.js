
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

// BEGIN PASTED CODE
//prompt for userInput that was pasted in for basic functionality
const toDoListShell = () => {
    //let selection = prompt("Enter 1: Add a task \n Enter 2: Modify \n Enter 3: Delete\n Enter 4: View List")
    const readline = require("readline"); // keep this

    // create interface for input and output
    const rl = readline.createInterface({ // keep this
      input: process.stdin, //keep this
      output: process.stdout, // keep this
    });
    
    // create empty user input
    let userInput = ""; // I think we can change this to be 'selection'
    
    // question user to enter name
    rl.question("What is your name\n", function (string) { // this is to be modified display our menu
      userInput = string; // keep this
    
      console.log("Your name is " + userInput); // this would actually be our function call
    
      // close input stream
      rl.close(); // keep this
// END OF PASTED CODE

      1
    });
    // if (selection === '1'){
    //    let taskName = prompt("Enter a task");
    //    taskAdd(taskName)
    // }
    
}
console.log(toDoListShell())
//console.log(taskAdd("first task"))

module.exports = {taskAdd: taskAdd, taskComplete: taskComplete, taskRemove: taskRemove, viewList: viewList}
