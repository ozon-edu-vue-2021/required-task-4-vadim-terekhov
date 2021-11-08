<template>
  <div class="middle-name">
    <label for="middlename">Отчество</label> 
    <br>
    <input type="text" id="middlename"
      :value="value"
      @input="$emit('input',$event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: 'MiddleName',
  props: {
    value: String,
  }
}
</script>

<style scoped>

</style>