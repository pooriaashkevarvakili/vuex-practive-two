<template>
  <div style="text-align:left ">
    <h3>Todo List (Done:{{doneListCount}})</h3>
    <ul>
      <li v-for="todo in todoList" :key="todo.id">
        {{todo.name}}-({{todo.done?'Done':'notDone'}})
      </li>
    </ul>
    <div>
      <div v-if="todo" >
        <h3>select  todo</h3>
        id:{{todo.id}}
       <div>
        name:{{todo.name}}
         </div>
      </div>
    </div>
    <h3>
      completed todos
    </h3>
    <ul>
      <li v-for="todo in doneTodos" :key="todo.id">
        <a href="#" @click.prevent="onTodoSelected(todo.id)" >
          {{todo.name}}-({{todo.done?'Done':'notDone'}})
        </a>

      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  data(){
    return{
selectedId:0
    }
  },
  computed:{
    todoList(){
      return this.$store.state.todos
    },
    getDoneListCount(){
      return this.$store.getters.todoList
    },
    doneTodos(){
      return this.$store.getters.doneToDos
    },
    todo(){
      return this.$store.getters.getTodoById(this.selectedId)
    }

  },
  methods:{
    onTodoSelected(id){
this.selectedId=id
    }
  }
}
</script>

<style scoped>

</style>