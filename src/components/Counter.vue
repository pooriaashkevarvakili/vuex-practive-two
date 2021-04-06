<template>
<div>
  counter:{{$store.state.count}}
</div>
</template>

<script>
export default {
  name: "Counter",
  data(){
    return{
      counter:0
    }
  }
}
</script>

<style scoped>

</style>