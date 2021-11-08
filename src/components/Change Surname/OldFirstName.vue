<template>
  <div class="first-sur-name">
    <label for="firstsurname">Имя</label> 
    <br>
    <input type="text" id="firstsurname"
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

</style>