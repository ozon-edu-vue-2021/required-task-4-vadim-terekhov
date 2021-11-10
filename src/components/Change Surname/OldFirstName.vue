<template>
  <div class="first-sur-name">
    <label for="firstsurname">Имя (предыдущее)</label> 
    <br>
    <input type="text" id="firstsurname" class="input-all"
      :value="value"
      @input="$emit('input',$event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: 'OldFirstName',
  props: {
    value: String,
  }
}
</script>

<style scoped>
.first-sur-name{
  width: 100%;
}
</style>