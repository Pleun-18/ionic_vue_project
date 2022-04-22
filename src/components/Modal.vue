<template>
  <div> 
    <button v-on:click="data.count++">Button 2</button>
    <h2>{{data.count}}</h2>
    <h2>{{double}}</h2>
  </div>
</template>

<script>
import clickedHook from '../Hooks/Hooks'
export default {
  name: 'Modal',
  Hooks(){
    return clickedHook();
  }
}
</script>