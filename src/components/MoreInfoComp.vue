<template>
  <div class="addedInfo">{{data}}</div>
</template>

<script>
export default {
  name: 'MoreInfoComp',

  props:{ data: String}
}
</script>

<style lang="scss">
  .addedInfo{
    background-color: yellow;
    width: 200px;
    height: 200px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
  }


</style>