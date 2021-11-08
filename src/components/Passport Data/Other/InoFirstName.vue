<template>
  <div class="ino-first-name">
    <label for="inofirstname">Имя на латинице</label> 
    <br>
    <input type="text" id="inofirstname"
      @input="$emit('input',$event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: 'InoFirstName',
}
</script>

<style scoped>

</style>