
def to_do():
    
    menu_prompt ='To do list options: \n 1.Add an item\n 2.Mark Task as Complete \n 3.Delete Task \n 4.View Task \n 5.Exit'

    print(menu_prompt)


    user_input = input('Please enter an option')

    #run with python -m pytest test_factorial.py
    return 'chicken nugget'





tasks = {}

def add_item(to_do_name):
    tasks[to_do_name] = False
    return tasks[to_do_name]

def mark_as_done(to_do_name):
    tasks[to_do_name] = False
    return tasks[to_do_name]

def delete_Task(to_do_name):
    tasks[to_do_name] = False
    #remove to_do_name from list
    return False

def view_list():
    print(tasks)
    return 'tasks'

