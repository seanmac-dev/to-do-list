
task = {};

const taskAdd = (userInput) => {
    task[userInput] = false
    return task[userInput]
}

// marking task as complete (toggle true/false)
const taskComplete = (userInput) => {
    task[userInput] = true
    return task[userInput]
}

console.log(taskAdd("first task"))

module.exports = {taskAdd: taskAdd, taskComplete: taskComplete}
