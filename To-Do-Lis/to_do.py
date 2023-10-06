tasks = {}


def to_do():
   

    menu_prompt ='To do list options: \n 1.Add an item\n 2.Mark Task as Complete \n 3.Delete Task \n 4.View Task \n 5.Exit \nPlease enter an option: '

    

    user_input = input(menu_prompt)

    if user_input == '1':
        to_do_name = input('Please enter task name: ')
        add_item(to_do_name)     
    elif user_input == '2':
        mark_as_done()
    elif user_input == '3':
        delete_Task()
    elif user_input == '4':
        view_list()
    else:
        print('Invalid Input')

    to_do()



def add_item(to_do_name):
   
    tasks[to_do_name] = False
    print(list(tasks))
    to_do()

def mark_as_done(to_do_name):
    tasks[to_do_name] = False
    return tasks[to_do_name]

def delete_Task(to_do_name):
    tasks[to_do_name] = False
    #remove to_do_name from list
    return False

def view_list():
    print(tasks)
    to_do()
  


to_do()