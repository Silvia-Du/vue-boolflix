<template>
  <div class="_header d-flex align-items-center justify-content-end px-3">
    <input type="text" class="form-control me-2" placeholder="cerca un film">
    <button type="button" class="btn btn-warning">Cerca</button>
  </div>
</template>

<script>
export default {
  name: 'HeaderComp'
}
</script>

<style lang="scss">

._header{
  height: 80px;
  background-color: rgb(29, 26, 26);
  input{
    max-width: 250px;
  }
}

</style>