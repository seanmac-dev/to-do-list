// this is where the testing suite will be built

// empty objects for task list, emojis, 

const todoManager = require("./todo_manager.js")

// test the add feature

//describe("tests adding task", () => {
    test("add something", () => {
        expect(todoManager('something')).toBe(false)
    })
//})

// code the mark done feature

// code the remove feature

// code the view feature
