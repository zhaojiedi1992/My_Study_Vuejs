<template>
  <div >
    <h2>{{$store.state.counter}}</h2>
  </div>
</template>

<script>
import store from "../../store";
export default {
  name: 'HelloWorld',
  data () {
    return {

    }
  },
  store
}
</script>

<style scoped>

</style>
