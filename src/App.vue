<template>
  <div>
<Counter/>
  <div>
    <h3>App Vue Counter</h3>
    count:{{count}}
  </div>
    <div>
      <button @click.prevent="onIncrement()">increment</button>
    </div>
    <div>
    <TodoList/>
  </div>
    <div>
      todo list compeleted:{{getDoneListCount}}
    </div>
  </div>

</template>
<script>
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";
export default {
  name:'app',
  computed:{
    count(){
      return this.$store.state.count
    },
    getDoneListCount(){
      return this.$store.getters.todoList
    }
  },
  components:{
    Counter,
    TodoList
  },
  methods:{
    onIncrement(){
      this.$store.dispatch('increment',4)
    },

  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
