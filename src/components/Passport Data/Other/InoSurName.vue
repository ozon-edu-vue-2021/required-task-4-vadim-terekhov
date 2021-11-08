<template>
  <div class="in-sur-name">
    <label for="inosurname">Фамилия на латинице</label> 
    <br>
    <input type="text" id="inosurname"
      @input="$emit('input',$event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: 'InoSurName',
}
</script>

<style scoped>

</style>