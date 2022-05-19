const todoList = {
    items: [
      {
        text: 'Завершить текущий челлендж',
        completed: false,
      },
      {
        text: 'Отдохнуть во время перерыва',
        completed: false,
      },
      {
        text: 'Помочь напарнику понять код',
        completed: false,
      },
      {
        text: 'Выиграть в мафию',
        completed: true,
      },
    ],
  
    printAll: function() {
        for (let i = 0; i < this.items.length; i++) {
          console.log( todoList.print(i))
        }
        return 
    },
    

    add: function(tex) {

      todoList.items.unshift({text: tex, completed: false})
     return
    },
  
    remove: function(index) {
    return todoList.items.splice(index, 1)
    },
  
    print: function(index) {
       return todoList.items[index].completed === true ? todoList.items[index].text = "[x] " + todoList.items[index].text : todoList.items[index].text = "[ ] " + todoList.items[index].text
    },
  
    complete: function(index) {
    return this.items[index].completed = true

    },
  };



  