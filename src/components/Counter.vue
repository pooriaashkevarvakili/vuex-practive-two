<template>
<div>
  counter:{{count}}
</div>
  <div>
    <button @click="onIncrement()">onIncrement</button>
  </div>
</template>

<script>
export default {
  name: "Counter",
  data(){
    return{
      counter:0
    }

  },
  computed:{
    count(){
      return this.$store.state.count
    }
  },
  methods:{
    onIncrement(){
      this.$store.dispatch({
        type:'increment',
        value:4
      })
    }
  }
}
</script>

<style scoped>

</style>