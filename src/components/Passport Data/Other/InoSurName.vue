<template>
  <div class="in-sur-name">
    <label for="inosurname">Фамилия на латинице</label> 
    <br>
    <input type="text" id="inosurname" class="input-all"
      :value="value"
      @input="$emit('input',$event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: 'InoSurName',
  props: {
    value: String,
  }
}
</script>

<style scoped>
.in-sur-name{
  margin-right: 5px;
  width: 100%;
}
</style>