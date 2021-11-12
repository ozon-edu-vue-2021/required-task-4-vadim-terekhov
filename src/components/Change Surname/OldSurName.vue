<template>
  <div class="old-sur-name">
    <label for="oldsurname">Фамилия (предыдущая)</label> 
    <br>
    <input type="text" id="oldsurname" class="input-all"
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
.old-sur-name{
  width: 100%;
  margin-right: 5px;
}
</style>