const todosApp = {
    data() {
        return {
            todos: window.todos = [],
            newTodo: {
                done: false
            }
        }
    },
    methods: {
        addTodo: function(){
            if(this.newTodo.text){
                this.todos.push(this.newTodo)
                this.newTodo = {
                    done: false
                }    
            } else {
                alert('O texto da tarefa é obrigatório')
            }
        }
    }
}

Vue.createApp(todosApp).mount('#app')