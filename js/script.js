const {createApp} = Vue;

createApp({
  data(){
    return{
      todoList : [
        {
          text : 'Chiamare dentista',
          isDone : false
        },
        {
          text : 'Fare la spesa',
          isDone : false
        },
        {
          text : 'Chiamare suocera',
          isDone : false
        },
        {
          text : 'Dormire',
          isDone : false
        }
      ],
      
      newTask : {
        newText : '',
        isDone :false
      },


    }
  },

  methods : {

    addTask(){
      this.todoList.unshift(this.newTask)
      console.log(this.todoList)
      this.newTask= ''
      
    }
  }


}).mount('#app')