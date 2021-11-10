<template>
  <div class="first-name">
    <label for="firstname">Имя</label> 
    <br>
    <input type="text" id="firstname" class="input-all"
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
.first-name{
  flex: 1 1 auto;
  margin-right: 5px;
}
</style>