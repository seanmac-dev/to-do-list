// this is where the testing suite will be built

// empty objects for task list, emojis, 

const todoManager = require("./todo_manager.js")

// test the add feature

//describe("tests adding task", () => {
    test("add something", () => {
        expect(taskAdd('something')).toBe(false)
    })
//})

// code the mark done feature
    test("mark the task complete", () => {
        expect(taskComplete('complete')).toBe(true)
    })
// code the remove feature

// code the view feature
