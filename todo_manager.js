
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
console.log(taskAdd("first task"))

module.exports = {taskAdd: taskAdd, taskComplete: taskComplete, taskRemove: taskRemove, viewList: viewList}
