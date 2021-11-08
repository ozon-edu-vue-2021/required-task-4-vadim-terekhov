<template>
  <div class="old-sur-name">
    <label for="oldsurname">Фамилия</label> 
    <br>
    <input type="text" id="oldsurname"
      :value="value"
      @input="$emit('input',$event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: 'OldSurName',
  props: {
    value: String,
  }
}
</script>

<style scoped>

</style>