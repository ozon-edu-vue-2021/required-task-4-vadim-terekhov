<template>
  <div class="ino-first-name">
    <label for="inofirstname">Имя на латинице</label> 
    <br>
    <input type="text" id="inofirstname" class="input-all"
    :value="value"
      @input="$emit('input',$event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: 'InoFirstName',
  props: {
    value: String,
  }
}
</script>

<style scoped>
.ino-first-name{
  width: 100%;
}
</style>