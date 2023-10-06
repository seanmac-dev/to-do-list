tasks = {}


def to_do():
   
    n = True

    while n == True:
        menu_prompt ='\nTo do list options: \n 1.Add an item\n 2.Mark Task as Complete \n 3.Delete Task \n 4.View Task \n 5.Exit \nPlease enter an option: '
        if n == False:
            pass
        user_input = input(menu_prompt)

        if user_input == '1':
            to_do_name = input('\nPlease enter task name: ')
            add_item(to_do_name)     
        elif user_input == '2':
            to_cross_off = input('\nPlease enter task to cross off: ')
            mark_as_done(to_cross_off)
        elif user_input == '3':
            to_delete = input('\nWhat task do you want to delete?')
            delete_Task(to_delete)
        elif user_input == '4':
            view_list()
        elif user_input == '5':
            n = False
        else:
            print('\nInvalid Input')





def add_item(to_do_name):
   
    tasks[to_do_name] = False
    print('Task Added')
    

def mark_as_done(to_do_name):
    #check if the item is on list
    if to_do_name in tasks:
        tasks[to_do_name] = True
        cross_off = f'X {to_do_name}'
        tasks[cross_off] = tasks[to_do_name]
        del tasks[to_do_name]
        

def delete_Task(to_do_name):
    del tasks[to_do_name]

def view_list():
    print(tasks)
    
  


to_do()