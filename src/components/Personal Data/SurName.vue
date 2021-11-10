<template>
  <div class="sur-name">
    <label for="surname">Фамилия</label> 
    <br>
    <input type="text" id="surname" class="sur-name-input input-all"
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
.sur-name{
  flex: 1 1 auto;
  margin-right: 5px;
}
</style>