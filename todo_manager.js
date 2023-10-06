
task = {};

const taskAdd = (userInput) => {
    task[userInput] = false
    return task[userInput]
}

console.log(taskAdd("first task"))

module.exports = taskAdd