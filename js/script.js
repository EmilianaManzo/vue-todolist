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
        text : '',
        isDone :false
      },

      newText:'',

      error : ''

    }
  },

  methods : {
  
    deleteTask(indice){
      this.todoList.splice(indice,1)
      
    },
    
    addTask(){
      
      if(this.newText.length >= 4){
        this.newTask ={
          text : this.newText,
          isDone :false
        }

        this.todoList.unshift(this.newTask)
        this.newText= '';
        this.error= '';
        console.log(this.todoList)

      } else{
        this.error = 'Errore compilazione! La parola richiede almeno 4 lettere'
        this.newText= '';
      }

    }

  },



}).mount('#app')