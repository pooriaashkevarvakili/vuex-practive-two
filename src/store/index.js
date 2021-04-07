import { createStore } from "vuex";

export default createStore({
  state: {
    count: 0,
    todos: [
      {
        id: 1,
        name: "pooria",
        done: true,
      },
      {
        id: 2,
        name: "mohamad",
        done: false,
      },
      {
        id: 3,
        name: "ali",
        done: true,
      },
      {
        id: 4,
        name: "poya",
        done: false,
      },
    ],
  },
  getters: {
    getTodoById:(state)=>(id)=>{
return state.todos.find((todo)=>todo.id === id)
    },
     doneToDos(state) {
       return  state.todos.filter((todo) => todo.done);

     },
    todoList(state,getters) {
     return  getters.doneToDos.length
    },

  },
  mutations: {
    increment(state, payload) {
      state.count = state.count + payload.value;
    },
  },
  actions: {},
  modules: {},
});
