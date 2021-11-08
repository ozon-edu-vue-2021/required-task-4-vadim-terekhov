<template>
  <div class="first-name">
    <label for="firstname">Имя</label> 
    <br>
    <input type="text" id="firstname"
      :value="value"
      @input="$emit('input',$event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: 'FirstName',
  props: {
    value: String,
  }
}
</script>

<style scoped>

</style>