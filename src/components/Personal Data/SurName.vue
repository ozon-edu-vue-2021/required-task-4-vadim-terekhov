<template>
  <div class="sur-name">
    <label for="surname">Фамилия</label> 
    <br>
    <input type="text" id="surname"
      :value="value"
      @input="$emit('input',$event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: 'SurName',
  props: {
    value: String,
  }
}
</script>

<style scoped>

</style>